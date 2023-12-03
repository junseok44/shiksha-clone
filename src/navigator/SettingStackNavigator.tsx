import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { SCREENS } from "../utils/enums";
import OrderRestaurantScreen from "../screen/OrderRestaurantScreen";
import OrderFavoriteScreen from "../screen/OrderFavoriteScreen";
import AppInfoScreen from "../screen/AppInfoScreen";
import SettingsScreen from "../screen/SettingsScreen";
import { SettingsStackParamList } from "../@types/navigation";
import Header from "../components/organisms/Header";

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => {
          return (
            <Header>
              <Header.GoBack
                onPressGoBack={() => {
                  props.navigation.goBack();
                }}
              />
              <Header.Title>설정</Header.Title>
            </Header>
          );
        },
      }}
    >
      <Stack.Screen
        name={SCREENS.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          header: (props) => {
            return (
              <Header>
                <Header.Title>설정</Header.Title>
              </Header>
            );
          },
        }}
      />
      <Stack.Screen
        name={SCREENS.ORDER_RESTAURANT_SCREEN}
        component={OrderRestaurantScreen}
      />
      <Stack.Screen
        name={SCREENS.ORDER_FAVORITE_SCREEN}
        component={OrderFavoriteScreen}
      />
      <Stack.Screen name={SCREENS.APP_INFO_SCREEN} component={AppInfoScreen} />
    </Stack.Navigator>
  );
};

export default SettingStackNavigator;
