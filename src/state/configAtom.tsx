import { atom, selector } from "recoil";

export const configAtom = atom({
  key: "configAtom",
  default: {
    isHideEmptyRestaurant: false,
  },
});

export const isHideEmptyRestaurantAtom = selector({
  key: "isHideEmptyRestaurantAtom",
  get: ({ get }) => {
    const config = get(configAtom);
    return config.isHideEmptyRestaurant;
  },
  set: ({ set, get }, newValue) => {
    const config = get(configAtom);
    set(configAtom, {
      ...config,
      isHideEmptyRestaurant: newValue,
    });
  },
});
