import { Button, View } from "react-native";
import { SCREENS } from "../utils/enums";
import type { StackScreenProps } from "@react-navigation/stack";
import type { FavoriteStackParamList } from "../@types/navigation";

type props = StackScreenProps<
  FavoriteStackParamList,
  typeof SCREENS.REVIEW_MAIN_SCREEN
>;

const ReviewMainScreen = ({ navigation, route }: props) => {
  return (
    <View>
      <Button
        title="리뷰 작성 페이지"
        onPress={() => {
          navigation.navigate(SCREENS.REVIEW_WRITE_SCREEN);
        }}
      ></Button>

      <Button
        title="리뷰 리스트 페이지"
        onPress={() => {
          navigation.navigate(SCREENS.REVIEW_LIST_SCREEN);
        }}
      ></Button>
    </View>
  );
};

export default ReviewMainScreen;
