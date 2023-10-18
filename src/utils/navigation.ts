import { SCREENS } from "./enums";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export const getHeaderTitleFromRoutes = <T>(route: T) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Menu";

  switch (routeName) {
    case SCREENS.FAVORITE_SCREEN:
      return "Favorite";
    case SCREENS.MENU_SCREEN:
      return "Menu";
    case SCREENS.SETTINGS_SCREEN:
      return "Settings";
    case SCREENS.REVIEW_MAIN_SCREEN:
      return "리뷰";
    case SCREENS.REVIEW_LIST_SCREEN:
      return "리뷰";
    case SCREENS.REVIEW_WRITE_SCREEN:
      return "리뷰 작성";
    default:
      return "other";
  }
};
