import { View, Text, Button } from "react-native";
import { SCREENS } from "../utils/enums";
import { StackScreenProps } from "@react-navigation/stack";
import { FavoriteStackParamList } from "../@types/navigation";

type props = StackScreenProps<
  FavoriteStackParamList,
  typeof SCREENS.FAVORITE_SCREEN
>;

const FavoriteScreen = ({ navigation, route }: props) => {
  return (
    <View>
      <Button
        title="식당 info"
        onPress={() => {
          navigation.navigate(SCREENS.RESTAURANT_SCREEN);
        }}
      ></Button>
      <Button
        title="메뉴 리뷰 페이지"
        onPress={() => {
          navigation.navigate(SCREENS.REVIEW_MAIN_SCREEN);
        }}
      ></Button>
    </View>
  );
};

export default FavoriteScreen;
