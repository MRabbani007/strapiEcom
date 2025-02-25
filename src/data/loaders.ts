import qs from "qs";
import { getAuthToken } from "../services/get-token";

import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = await getAuthToken();

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});

    const data = await response.json();

    return data; // flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getCatalogueMenuData() {
  const url = new URL("/api/departments", baseUrl);

  const query = {
    populate: {
      categories: {
        populate: {
          sub_categories: {
            populate: "*", // Ensures all fields inside sub_categories are populated
          },
          icon: true, // Ensure the icon field is included
        },
      },
    },
    // depth: 3,
    sort: ["sortIndex:asc"],
  };

  url.search = qs.stringify(query, { encode: false });

  return await fetchData(url.href);
}
