import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../utils/enums";
import { HomeStackParamList } from "../@types/navigation";
import { getSharedScreens } from "../screen/SharedScreen";
import MenuScreen from "../screen/MenuScreen";
import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator<HomeStackParamList>();

/*
그럼 

stack
  tab
    tab1
    tab2
    tab3
      stack1
      stack2
      stack3
  stack
    sharedscreen1
    sharedscreen2

이렇게 해야한다는 것인가?
그럼 sharedscreen1에서 뒤로가기시에 돌아갈 수 있나?






*/

const HomeStackNavigator = () => {
  const sharedScreen = getSharedScreens(Stack);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREENS.HOME_SCREEN}
        component={MenuScreen}
      ></Stack.Screen>
      {sharedScreen}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
