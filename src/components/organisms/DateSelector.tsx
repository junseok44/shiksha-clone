import React from "react";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FlexBox from "../atoms/FlexBox";
import Button from "../atoms/Button";

const DateSelector = ({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  return (
    <View style={{ padding: 10 }}>
      <FlexBox justifyContent="center" alignItems={"center"} gap={5}>
        <Button onPress={() => {}}>
          <Text>이전</Text>
        </Button>
        <Text>{date.toLocaleDateString()}</Text>
        <Button onPress={() => {}}>
          <Text>이후</Text>
        </Button>
      </FlexBox>
    </View>
  );
};

export default DateSelector;
