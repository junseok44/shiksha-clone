import {
  CardStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";

import { SCREENS } from "../utils/enums";
import RestaurantScreen from "./RestaurantScreen";
import ReviewListScreen from "./ReviewListScreen";
import ReviewMainScreen from "./ReviewMainScreen";
import ReviewWriteScreen from "./ReviewWriteScreen";

export const getSharedScreens = (Stack) => {
  return [
    <Stack.Screen
      key="SharedScreen1"
      name={SCREENS.RESTAURANT_SCREEN}
      component={RestaurantScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // 아래에서 위로 슬라이드
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
    />,
    <Stack.Screen
      key="SharedScreen2"
      name={SCREENS.REVIEW_MAIN_SCREEN}
      component={ReviewMainScreen}
    />,
    <Stack.Screen
      key="SharedScreen2"
      name={SCREENS.REVIEW_WRITE_SCREEN}
      component={ReviewWriteScreen}
    />,
    <Stack.Screen
      key="SharedScreen2"
      name={SCREENS.REVIEW_LIST_SCREEN}
      component={ReviewListScreen}
    />,
  ];
};
