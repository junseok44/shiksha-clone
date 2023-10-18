import React from "react";
import FlexBox from "../atoms/FlexBox";
import { Text, View } from "react-native";
import { Ttime } from "../../@types/types";
import Button from "../atoms/Button";
import IconWithText from "../molecules/IconWithText";
import Icons from "../atoms/Icons";

const TimeSelector = ({
  time,
  setTime,
}: {
  time: Ttime;
  setTime: React.Dispatch<React.SetStateAction<Ttime>>;
}) => {
  return (
    <View style={{}}>
      <FlexBox justifyContent="center" gap={10}>
        <Button
          onPress={() => {
            setTime("morning");
          }}
        >
          <IconWithText
            icon={<Icons type="material" name="free-breakfast"></Icons>}
            text="아침"
            isSelected={time === "morning"}
          ></IconWithText>
        </Button>
        <Button
          onPress={() => {
            setTime("lunch");
          }}
        >
          <IconWithText
            icon={<Icons type="material" name="lunch-dining"></Icons>}
            text="점심"
            isSelected={time === "lunch"}
          ></IconWithText>
        </Button>
        <Button
          onPress={() => {
            setTime("dinner");
          }}
        >
          <IconWithText
            icon={<Icons type="material" name="dinner-dining"></Icons>}
            text="저녁"
            isSelected={time === "dinner"}
          ></IconWithText>
        </Button>
      </FlexBox>
    </View>
  );
};

export default TimeSelector;
