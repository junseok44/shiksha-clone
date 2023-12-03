import { atom, selector } from "recoil";
import { TCafe } from "../@types/types";

export const isCafeModalOpenedAtom = atom({
  key: "cafeModalAtom",
  default: false,
});

export const currentCafeIdAtom = atom<null | number>({
  key: "currentCafeIdAtom",
  default: null,
});

export const cafeDataQueryAtom = selector({
  key: "cafeDataQueryAtom",
  get: async ({ get }) => {
    const cafeId = get(currentCafeIdAtom);

    if (cafeId === null) {
      return null;
    }

    const cafeData = await new Promise<TCafe>((resolve) => {
      setTimeout(() => {
        resolve({
          id: cafeId,
          name: "학생회관 식당",
          locationName: "16동",
          locationCord: "Location Cord",
          cafeId: 1,
          time: {
            lunchStart: new Date(),
            lunchEnd: new Date(),
            saturdayStart: new Date(),
            saturdayEnd: new Date(),
            HolidayStart: new Date(),
            HolidayEnd: new Date(),
          },
        });
      }, 1000);
    });

    return cafeData;
  },
});
