import { getCatalogueMenuData } from "@/data/loaders";
import CatalogueMenu from "./CatalogueMenu";

export default async function CatalogueMenuContainer() {
  const { data } = await getCatalogueMenuData();

  return <CatalogueMenu departments={data} />;
}
