import * as React from "react";
import { Text } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteStackNavigator from "./src/navigator/FavoriteStackNavigator";
import SettingStackNavigator from "./src/navigator/SettingStackNavigator";
import { SCREENS } from "./src/utils/enums";
import HomeStackNavigator from "./src/navigator/HomeStackNavigator";
import { palette } from "./src/utils/palette";

const Tab = createBottomTabNavigator();

const getHeaderTitleFromRoutes = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Menu";

  switch (routeName) {
    case SCREENS.FAVORITE_SCREEN:
      return "Favorite";
    case SCREENS.HOME_SCREEN:
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={SCREENS.HOME_SCREEN}
        screenOptions={({ route, navigation }) => ({
          headerStyle: {
            backgroundColor: palette.orange,
          },
          headerTitleStyle: {
            color: palette.white,
          },
        })}
      >
        <Tab.Screen
          name={SCREENS.FAVORITE_NAVIGATOR}
          component={FavoriteStackNavigator}
          options={({ route, navigation }) => {
            return {
              headerTitle: getHeaderTitleFromRoutes(route),
              tabBarVisible: false,
            };
          }}
        />
        <Tab.Screen
          name={SCREENS.HOME_NAVIGATOR}
          component={HomeStackNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitleFromRoutes(route),
          })}
        />
        <Tab.Screen
          name={SCREENS.SETTINGS_NAVIGATOR}
          component={SettingStackNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitleFromRoutes(route),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
