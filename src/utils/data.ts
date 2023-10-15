import { TCafeMenus } from "../@types/types";

export const cafeAndMenus: TCafeMenus[] = [
  {
    id: 1,
    name: "학생회관",
    menus: [
      {
        id: 1,
        cafeId: 1,
        name: "김치찌개",
        price: 3000,
        isSoldOut: false,
        time: "lunch",
        rate: 4.5,
      },
      {
        id: 2,
        cafeId: 1,
        name: "된장찌개",
        price: 2500,
        isSoldOut: true,
        time: "morning",
        rate: 4.5,
      },
      {
        id: 3,
        cafeId: 1,
        name: "비빔밥",
        price: 3500,
        isSoldOut: false,
        time: "dinner",
        rate: 4.5,
      },
      // 추가 가상 메뉴
      {
        id: 4,
        cafeId: 1,
        name: "샌드위치",
        price: 2800,
        isSoldOut: false,
        time: "lunch",
        rate: 4.5,
      },
      {
        id: 5,
        cafeId: 1,
        name: "스파게티",
        price: 4000,
        isSoldOut: true,
        time: "morning",
        rate: 4.5,
      },
      {
        id: 6,
        cafeId: 1,
        name: "피자",
        price: 4500,
        isSoldOut: false,
        time: "dinner",
        rate: 4.5,
      },
      {
        id: 7,
        cafeId: 1,
        name: "코코아 비빔밥",
        price: 3500,
        isSoldOut: false,
        time: "dinner",
        rate: 4.5,
      },
    ],
  },
  // 추가 가상 카페
  {
    id: 2,
    name: "예술계 식당",
    menus: [
      {
        id: 7,
        cafeId: 2,
        name: "아메리카노",
        price: 3500,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
      {
        id: 8,
        cafeId: 2,
        name: "카푸치노",
        price: 4000,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
      {
        id: 9,
        cafeId: 2,
        name: "프라페",
        price: 4500,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
    ],
  },
  // 추가 가상 카페
  {
    id: 3,
    name: "공대 간이 식당",
    menus: [
      {
        id: 10,
        cafeId: 3,
        name: "에스프레소",
        price: 3000,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
      {
        id: 11,
        cafeId: 3,
        name: "라떼",
        price: 3200,
        isSoldOut: true,
        time: "lunch",
        rate: 4.5,
      },
    ],
  },
  // 추가 가상 카페
  {
    id: 4,
    name: "자하연 식당",
    menus: [
      {
        id: 12,
        cafeId: 4,
        name: "차",
        price: 2800,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
      {
        id: 13,
        cafeId: 4,
        name: "과자",
        price: 2000,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
    ],
  },
  // 추가 가상 카페
  {
    id: 5,
    name: "제3식당",
    menus: [
      {
        id: 14,
        cafeId: 5,
        name: "아이스크림",
        price: 3800,
        isSoldOut: false,
        time: "dinner",
        rate: 4.5,
      },
      {
        id: 15,
        cafeId: 5,
        name: "케이크",
        price: 4500,
        isSoldOut: false,
        time: "morning",
        rate: 4.5,
      },
    ],
  },
  {
    id: 5,
    name: "제3식당",
    menus: [],
  },
];

export const cafeMenus = [];

// 정보가 적을때는 그냥 서버가 한꺼번에 다 주고 클라이언트에서 필터링해서 쓰는게 좋다.
// 정보가 많아지면 서버에서 필터링해서 보내주는게 좋다.
// 식샤의 경우에는 어떤가? 식당 개수 한 11개.

// 1. 식당과 해당 메뉴들을 따로 준다.

// {
//     cafeteria: [ { id: 1, name: '학생회관' }, { id: 2, name: '교직원식당'}],
//     menus: [{
//                     id: 1,
//                     cafeId: 1,
//                     name: '김치찌개',
//                     price: 3000,
//                     isSoldOut: false,
//                     time: 'lunch',
// }

// cafeteria.map((cafeteria) => {

//     return {List -> sort with cafeteria id and time}
// })

// 2. 식당과 해당 메뉴들을 같이 준다. 이런식으로.

// {
//     cafeteria: [
//         {
//             id: 1,
//             name: '학생회관',
//             menus: [
//                 {
//                     id: 1,
//                     cafeId: 1,
//                     name: '김치찌개',
//                     price: 3000,
//                     isSoldOut: false,
//                     time: 'lunch',
//                 },
//        ]
//     }
//     ]
// }
