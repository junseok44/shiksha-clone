import { Text, View } from "react-native";
import { SettingsStackParamList } from "../@types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { SCREENS } from "../utils/enums";
import styled from "styled-components/native";
import { palette } from "../utils/palette";
import Container from "../components/atoms/Container";
import FlexBox from "../components/atoms/FlexBox";
import RoundProfile from "../components/molecules/RoundProfile";
import Icons from "../components/atoms/Icons";
import Button from "../components/atoms/Button";
import Typography from "../components/atoms/Typography";
import Margin from "../components/atoms/Margin";
import Divider from "../components/atoms/Divider";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isHideEmptyRestaurantAtom } from "../state/configAtom";

type props = StackScreenProps<
  SettingsStackParamList,
  typeof SCREENS.SETTINGS_SCREEN
>;

const SettingSection = styled.View`
  border: 1px solid ${palette.font_grey};
  padding: 10px;
  border-radius: 10px;
`;

const SettingSectionRow = ({
  text,
  onPress,
  icons,
}: {
  text: string;
  onPress?: () => void;
  icons?: React.ReactNode;
}) => {
  return (
    <Button onPress={onPress ? onPress : () => {}}>
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        styles={{ paddingVertical: 5 }}
      >
        <Typography size={16}>{text}</Typography>
        {icons ? icons : <Icons type="ant" name="right"></Icons>}
      </FlexBox>
      <Divider width={1} margin={5}></Divider>
    </Button>
  );
};

const SettingsScreen = ({ navigation, route }: props) => {
  const [isHideEmptyRestaurant, setIsHideEmptyRestaurant] = useRecoilState(
    isHideEmptyRestaurantAtom
  );

  return (
    <Container styles={{ flex: 1, paddingVertical: 25 }}>
      <SettingSection>
        <FlexBox alignItems="center">
          <RoundProfile>
            <RoundProfile.Default></RoundProfile.Default>
          </RoundProfile>
          <Button
            onPress={() => {
              navigation.navigate(SCREENS.APP_INFO_SCREEN);
            }}
            styles={{ flex: 1 }}
          >
            <FlexBox alignItems="center" styles={{ flex: 1, marginLeft: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>최신 버전을 이용중입니다.</Text>
                <Text>siksha -3.0.2</Text>
              </View>
              <Icons type="ant" name="right"></Icons>
            </FlexBox>
          </Button>
        </FlexBox>
      </SettingSection>
      <Margin margin={10}></Margin>
      <SettingSection>
        <SettingSectionRow
          text={"식당 순서 변경"}
          onPress={() => navigation.navigate(SCREENS.ORDER_RESTAURANT_SCREEN)}
        ></SettingSectionRow>
        <SettingSectionRow
          text={"즐겨찾기 식당 순서 변경"}
          onPress={() => navigation.navigate(SCREENS.ORDER_FAVORITE_SCREEN)}
        ></SettingSectionRow>
        <SettingSectionRow
          text={"메뉴 없는 식당 숨기기"}
          onPress={() => {
            setIsHideEmptyRestaurant((prev) => !prev);
          }}
          icons={
            <Icons
              type="ant"
              name="check"
              color={isHideEmptyRestaurant ? palette.orange : palette.font_grey}
              size={20}
            ></Icons>
          }
        ></SettingSectionRow>
        <SettingSectionRow text={"(관리자) 메뉴 추가하기"}></SettingSectionRow>
        <SettingSectionRow text={"(관리자) 식당 추가하기"}></SettingSectionRow>
        <SettingSectionRow text={"(관리자) 식단 추가하기"}></SettingSectionRow>
      </SettingSection>
    </Container>
  );
};

export default SettingsScreen;
