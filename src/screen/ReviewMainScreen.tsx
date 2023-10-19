import { Text, View } from "react-native";
import { SCREENS } from "../utils/enums";
import type { StackScreenProps } from "@react-navigation/stack";
import type { FavoriteStackParamList } from "../@types/navigation";
import Button, { MainButton } from "../components/atoms/Button";
import { useMenu } from "../hooks/useMenu";
import FlexBox from "../components/atoms/FlexBox";
import IconWithText from "../components/molecules/IconWithText";
import Icons from "../components/atoms/Icons";
import Typography from "../components/atoms/Typography";
import Container from "../components/atoms/Container";
import ReviewBoard from "../components/organisms/ReviewBoard";
import Margin from "../components/atoms/Margin";
import CommentList from "../components/organisms/CommentList";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";

type props = StackScreenProps<
  FavoriteStackParamList,
  typeof SCREENS.REVIEW_MAIN_SCREEN
>;

const ReviewMainScreen = ({ navigation, route }: props) => {
  const { menuId } = route.params;

  useEffect(() => {
    fetch("http://10.111.40.28:8080/api/report")
      .then()
      .catch((e) => console.log(e));
  }, []);
  const { menuReview, loading, error } = useMenu(menuId);

  if (error)
    return (
      <View>
        <Text>불러오는 도중 오류가 발생했습니다.</Text>
      </View>
    );

  if (!error && loading)
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );

  return (
    <>
      {menuReview && (
        <ScrollView style={{ flex: 1 }}>
          <Container styles={{ backgroundColor: "white" }}>
            <FlexBox
              direction="column"
              gap={10}
              alignItems="center"
              styles={{ paddingVertical: 20 }}
            >
              <IconWithText
                icon={<Icons type="ant" name="hearto" size={13}></Icons>}
                text={`좋아요 ${menuReview.likes}개`}
              ></IconWithText>
              <Typography size={25}>{menuReview?.name}</Typography>

              <ReviewBoard></ReviewBoard>
              <MainButton
                onPress={() => {
                  navigation.navigate(SCREENS.REVIEW_WRITE_SCREEN, {
                    menuId: menuId,
                  });
                }}
              >
                <Text style={{ color: "white" }}>리뷰 작성하기</Text>
              </MainButton>
            </FlexBox>
          </Container>
          <Margin margin={15}></Margin>
          <Container styles={{ backgroundColor: "white", flex: 1 }}>
            <FlexBox
              direction="column"
              alignItems="stretch"
              styles={{ paddingVertical: 20 }}
              gap={20}
            >
              <FlexBox justifyContent="space-between">
                <Typography>리뷰</Typography>
                <Button
                  onPress={() =>
                    navigation.navigate(SCREENS.REVIEW_LIST_SCREEN, {
                      menuId: menuId,
                    })
                  }
                >
                  <Icons type="ant" name="right"></Icons>
                </Button>
              </FlexBox>
              <CommentList></CommentList>
            </FlexBox>
          </Container>
        </ScrollView>
      )}
    </>
  );
};

export default ReviewMainScreen;
