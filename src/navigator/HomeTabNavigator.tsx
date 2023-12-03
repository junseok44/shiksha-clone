import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../utils/enums";
import { palette } from "../utils/palette";
import { getHeaderTitleFromRoutes } from "../utils/navigation";
import FavoriteScreen from "../screen/FavoriteScreen";
import MenuScreen from "../screen/MenuScreen";
import SettingStackNavigator from "./SettingStackNavigator";
import { Text, View } from "react-native";
import BottomTabBar from "../components/organisms/BottomTabBar";
import Header from "../components/organisms/Header";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.MENU_SCREEN}
      screenOptions={({ route }) => ({
        header: (props) => (
          <Header {...props}>
            <Header.Icon></Header.Icon>
          </Header>
        ),
      })}
      tabBar={(props) => <BottomTabBar {...props}></BottomTabBar>}
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
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
