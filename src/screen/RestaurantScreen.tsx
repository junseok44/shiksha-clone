import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../@types/types";
import { SCREENS } from "./../utils/enums";

type props = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.RESTAURANT_SCREEN
>;

const RestaurantScreen = ({ navigation, route }: props) => {
  return (
    <View>
      <Text>리뷰들을 여기서 확인합니다.</Text>
    </View>
  );
};

export default RestaurantScreen;
