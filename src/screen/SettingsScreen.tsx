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
}: {
  text: string;
  onPress?: () => void;
}) => {
  return (
    <Button onPress={onPress ? onPress : () => {}}>
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        styles={{ paddingVertical: 5 }}
      >
        <Typography size={16}>{text}</Typography>
        <Icons type="ant" name="right"></Icons>
      </FlexBox>
      <Divider width={1} margin={5}></Divider>
    </Button>
  );
};

const SettingsScreen = ({ navigation, route }: props) => {
  return (
    <Container styles={{ flex: 1, paddingVertical: 25 }}>
      <SettingSection>
        <FlexBox alignItems="center">
          <RoundProfile>
            <RoundProfile.Default></RoundProfile.Default>
          </RoundProfile>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>최신 버전을 이용중입니다.</Text>
            <Text>siksha -3.0.2</Text>
          </View>
          <Button onPress={() => {}}>
            <Icons type="ant" name="edit" size={20}></Icons>
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
        <SettingSectionRow text={"메뉴 없는 식당 숨기기"}></SettingSectionRow>
      </SettingSection>
    </Container>
  );
};

export default SettingsScreen;
