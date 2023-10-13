import * as React from "react";
import { Button, Animated } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  CommonActions,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./src/screen/MenuScreen";
import FavoriteStackNavigator from "./src/screen/FavoriteStackNavigator";
import SettingStackNavigator from "./src/screen/SettingStackNavigator";
import { SCREENS } from "./src/utils/enums";

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
    default:
      return "other";
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={SCREENS.HOME_SCREEN}
        screenOptions={
          {
            // headerLeft: () => (
            //   <Button
            //     title="뒤로"
            //     onPress={() => {
            //       CommonActions.goBack();
            //     }}
            //   ></Button>
            // ),
          }
        }
      >
        <Tab.Screen
          name={SCREENS.FAVORITE_NAVIGATOR}
          component={FavoriteStackNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitleFromRoutes(route),
          })}
        />
        <Tab.Screen
          name={SCREENS.HOME_SCREEN}
          component={MenuScreen}
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
