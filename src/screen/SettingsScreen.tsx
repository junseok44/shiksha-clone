import { Text, View, Button } from "react-native";
import { SettingsStackParamList } from "../@types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { SCREENS } from "../utils/enums";

type props = StackScreenProps<
  SettingsStackParamList,
  typeof SCREENS.SETTINGS_SCREEN
>;
const SettingsScreen = ({ navigation, route }: props) => {
  return (
    <View>
      <Button
        title={SCREENS.APP_INFO_SCREEN}
        onPress={() => navigation.navigate(SCREENS.APP_INFO_SCREEN)}
      ></Button>
      <Button
        title={SCREENS.ORDER_RESTAURANT_SCREEN}
        onPress={() => navigation.navigate(SCREENS.ORDER_RESTAURANT_SCREEN)}
      ></Button>
      <Button
        title={SCREENS.ORDER_FAVORITE_SCREEN}
        onPress={() => navigation.navigate(SCREENS.ORDER_FAVORITE_SCREEN)}
      ></Button>
    </View>
  );
};

export default SettingsScreen;
