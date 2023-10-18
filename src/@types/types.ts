// 메뉴와 즐겨찾기 부분에서 받는 데이터
export interface TCafeMenus {
  id: number;
  name: string;
  menus: TMenuWithMeta[];
}

interface TMenuWithMeta {
  id: number;
  cafeId: number;
  name: string;
  price: number;
  isSoldOut: boolean;
  time: "dinner" | "lunch" | "morning";
  rate: number;
}

// 메인 리뷰에서 보는 데이턷을.
export interface TMenuReview {
  id: number;
  name: string;
  likes: number;
  isLike: boolean;
  rate: number;
  reviews: TReview[];
}

export interface TReview {
  id: number;
  authorId: number;
  text: string;
  createdAt: Date;
}

export type Ttime = "dinner" | "lunch" | "morning";
