import { StackScreenProps } from "@react-navigation/stack";
import { SCREENS } from "../utils/enums";

export type FavoriteStackParamList = {
  [SCREENS.FAVORITE_SCREEN]: undefined;
  [SCREENS.RESTAURANT_SCREEN]: undefined;
  [SCREENS.REVIEW_MAIN_SCREEN]: undefined;
  [SCREENS.REVIEW_LIST_SCREEN]: undefined;
  [SCREENS.REVIEW_WRITE_SCREEN]: undefined;
};

export type SettingsStackParamList = {
  [SCREENS.SETTINGS_SCREEN]: undefined;
  [SCREENS.APP_INFO_SCREEN]: undefined;
  [SCREENS.ORDER_RESTAURANT_SCREEN]: undefined;
  [SCREENS.ORDER_FAVORITE_SCREEN]: undefined;
};
