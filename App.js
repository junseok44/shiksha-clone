import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "./src/utils/enums";
import MainTabNavigator from "./src/navigator/MainTabNavigator";
import ReviewMainScreen from "./src/screen/ReviewMainScreen";
import { palette } from "./src/utils/palette";
import ReviewWriteScreen from "./src/screen/ReviewWriteScreen";
import ReviewListScreen from "./src/screen/ReviewListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerStyle: {
            backgroundColor: palette.orange,
          },
          headerTitleStyle: {
            color: palette.white,
          },
        })}
      >
        <Stack.Screen
          name={SCREENS.MAIN_BOTTOM_NAVIGATOR}
          component={MainTabNavigator}
        />
        <Stack.Screen
          name={SCREENS.REVIEW_MAIN_SCREEN}
          component={ReviewMainScreen}
        ></Stack.Screen>
        <Stack.Screen
          name={SCREENS.REVIEW_WRITE_SCREEN}
          component={ReviewWriteScreen}
        ></Stack.Screen>
        <Stack.Screen
          name={SCREENS.REVIEW_LIST_SCREEN}
          component={ReviewListScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
