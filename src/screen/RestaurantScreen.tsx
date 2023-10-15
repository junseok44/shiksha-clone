import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { FavoriteStackParamList } from "../@types/navigation";
import { SCREENS } from "./../utils/enums";

type props = StackScreenProps<
  FavoriteStackParamList,
  typeof SCREENS.RESTAURANT_SCREEN
>;

const RestaurantScreen = ({ navigation, route }: props) => {
  const { cafeId } = route.params;

  return (
    <View>
      <Text>{cafeId}입니다.</Text>
    </View>
  );
};

export default RestaurantScreen;
