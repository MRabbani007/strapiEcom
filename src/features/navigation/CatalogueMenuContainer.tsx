import { getCatalogueMenuData } from "@/data/loaders";
import React from "react";
import CatalogueMenu from "./CatalogueMenu";

export default async function CatalogueMenuContainer() {
  const { data } = await getCatalogueMenuData();

  return <CatalogueMenu departments={data} />;
}
