type Department = {
  id: string;
  label: string;
  slug: string;
  icon?: StrapiIcon;
  categories?: Category[];
};

type Category = {
  id: string;
  label: string;
  slug: string;
  icon?: StrapiIcon;
  visible?: boolean;
  sortIndex?: number;
  sub_categories?: SubCategory[];
};

type SubCategory = {
  id: string;
  catId: string;
  label: string;
  slug: string;
  visible?: boolean;
  sortIndex?: number;
};

type StrapiIcon = {
  url: string;
};
