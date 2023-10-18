import { View, Text } from "react-native";
import FlexBox from "../components/atoms/FlexBox";
import Typography from "../components/atoms/Typography";
import StarCount from "../components/molecules/StarCount";
import { TextInput } from "react-native-gesture-handler";
import Container from "../components/atoms/Container";
import { palette } from "../utils/palette";
import Margin from "../components/atoms/Margin";
import { MainButton, SubmitButton } from "../components/atoms/Button";
import { useState } from "react";

const ReviewWriteScreen = () => {
  const gap = 32;

  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <Container styles={{ flex: 1 }}>
      <FlexBox
        direction="column"
        alignItems="center"
        gap={gap}
        styles={{ paddingVertical: gap }}
      >
        <Typography size={24}>비벼먹는제육고추장은 어땠나요?</Typography>

        <FlexBox alignItems="center" direction="column" gap={8}>
          <Typography size={16}>별점을 선택해주세요</Typography>
          <StarCount count={rate} size={42} setCount={setRate}></StarCount>
          <Typography size={24}>{rate.toString()}</Typography>
        </FlexBox>

        <View style={{ width: "100%" }}>
          <Typography size={14} color={palette.font_grey}>
            식단 한줄 평을 함께 남겨보세요!
          </Typography>
          <Margin margin={8}></Margin>
          <View style={{ backgroundColor: palette.light_grey, padding: 8 }}>
            <TextInput
              onChange={(e) => setText(e.nativeEvent.text)}
              style={{ height: 100, backgroundColor: palette.white }}
            ></TextInput>
          </View>
        </View>

        <SubmitButton
          onPress={() => {}}
          isActive={text.length > 0 && rate != 0}
        >
          <SubmitButton.Text>작성완료</SubmitButton.Text>
        </SubmitButton>
      </FlexBox>
    </Container>
  );
};

export default ReviewWriteScreen;
