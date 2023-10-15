import React from "react";
import FlexBox from "../atoms/FlexBox";
import { Button, Text, View } from "react-native";
import { Ttime } from "../../@types/types";

const TimeSelector = ({
  time,
  setTime,
}: {
  time: Ttime;
  setTime: React.Dispatch<React.SetStateAction<Ttime>>;
}) => {
  return (
    <View style={{}}>
      <FlexBox justifyContent="center">
        <Button
          title="아침"
          onPress={() => {
            setTime("morning");
          }}
        ></Button>
        <Button
          title="점심"
          onPress={() => {
            setTime("lunch");
          }}
        ></Button>
        <Button
          title="저녁"
          onPress={() => {
            setTime("dinner");
          }}
        ></Button>
      </FlexBox>
    </View>
  );
};

export default TimeSelector;
