export interface TCafeMenus {
  id: number;
  name: string;
  menus: TMenu[];
}

export interface TMenu {
  id: number;
  cafeId: number;
  name: string;
  price: number;
  isSoldOut: boolean;
  time: "dinner" | "lunch" | "morning";
  rate: number;
}

export type Ttime = "dinner" | "lunch" | "morning";
