import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { palette } from "../utils/palette";
import { SCREENS } from "../utils/enums";
import HomeTabNavigator from "./HomeTabNavigator";
import ReviewMainScreen from "../screen/ReviewMainScreen";
import Header from "../components/organisms/Header";
import ReviewWriteScreen from "../screen/ReviewWriteScreen";
import ReviewListScreen from "../screen/ReviewListScreen";
import CafeInfoScreen from "../screen/CafeInfoScreen";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.white,
  },
};

export default function RootStackNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
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
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.REVIEW_MAIN_SCREEN}
          component={ReviewMainScreen}
          options={{
            header: (props) => (
              <Header {...props}>
                <Header.GoBack
                  onPressGoBack={() => {
                    console.log("lets go back");
                    props.navigation.goBack();
                  }}
                ></Header.GoBack>
                <Header.Title>리뷰</Header.Title>
              </Header>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name={SCREENS.REVIEW_WRITE_SCREEN}
          component={ReviewWriteScreen}
          options={{
            header: (props) => (
              <Header {...props}>
                <Header.GoBack
                  onPressGoBack={() => {
                    console.log("lets go back");
                    props.navigation.goBack();
                  }}
                ></Header.GoBack>
                <Header.Title>리뷰</Header.Title>
              </Header>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name={SCREENS.RESTAURANT_SCREEN}
          component={CafeInfoScreen}
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name={SCREENS.REVIEW_LIST_SCREEN}
          component={ReviewListScreen}
          options={{
            header: (props) => (
              <Header {...props}>
                <Header.GoBack
                  onPressGoBack={() => {
                    console.log("lets go back");
                    props.navigation.goBack();
                  }}
                ></Header.GoBack>
                <Header.Title>리뷰</Header.Title>
              </Header>
            ),
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
