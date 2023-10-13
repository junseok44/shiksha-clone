import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";
import { SCREENS } from "../utils/enums";
import FavoriteScreen from "./FavoriteScreen";
import RestaurantScreen from "./RestaurantScreen";
import ReviewMainScreen from "./ReviewMainScreen";
import ReviewListScreen from "./ReviewListScreen";
import ReviewWriteScreen from "./ReviewWriteScreen";
import { FavoriteStackParamList } from "../@types/navigation";

const Stack = createStackNavigator<FavoriteStackParamList>();

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREENS.FAVORITE_SCREEN}
        component={FavoriteScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={SCREENS.RESTAURANT_SCREEN}
        component={RestaurantScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // 아래에서 위로 슬라이드
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={SCREENS.REVIEW_MAIN_SCREEN}
        component={ReviewMainScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={SCREENS.REVIEW_LIST_SCREEN}
        component={ReviewListScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={SCREENS.REVIEW_WRITE_SCREEN}
        component={ReviewWriteScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;
