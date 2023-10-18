import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../utils/enums";
import FavoriteScreen from "../screen/FavoriteScreen";

import { FavoriteStackParamList } from "../@types/navigation";
import { getSharedScreens } from "../screen/SharedScreen";

const Stack = createStackNavigator<FavoriteStackParamList>();

const FavoriteStackNavigator = () => {
  const sharedScreen = getSharedScreens(Stack);

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
      {sharedScreen}
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;
