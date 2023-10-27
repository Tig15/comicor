import { atom, selector } from "recoil";

export const dataState = atom({
  key: "dataState",
  default: null,
});

export const homedata = {
  homeBanner: selector({
    key: "homeBanner",
    get: ({ get }) => {
      const data = get(dataState);
      return data?.["home_banner"];
    },
  }),

  menuCategories: selector({
    key: "menuCategories",
    get: ({ get }) => {
      const data = get(dataState);
      return data?.["menu_categories"];
    },
  }),

  menuCategoriesItem: selector({
    key: "menuCategoriesItem",
    get: ({ get }) => {
      const data = get(dataState);
      return data?.["menu_categories_item"];
    },
  }),

  rankCategories: selector({
    key: "rankCategories",
    get: ({ get }) => {
      const data = get(dataState);
      return data?.["rank_categories"];
    },
  }),
};
