import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../utils/enums";
import { palette } from "../utils/palette";
import { getHeaderTitleFromRoutes } from "../utils/navigation";
import FavoriteScreen from "../screen/FavoriteScreen";
import MenuScreen from "../screen/MenuScreen";
import SettingStackNavigator from "./SettingStackNavigator";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.MENU_SCREEN}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={SCREENS.FAVORITE_SCREEN}
        component={FavoriteScreen}
        options={({ route, navigation }) => {
          return {
            headerTitle: getHeaderTitleFromRoutes(route),
            tabBarVisible: false,
          };
        }}
      />
      <Tab.Screen
        name={SCREENS.MENU_SCREEN}
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
  );
};

export default MainTabNavigator;
