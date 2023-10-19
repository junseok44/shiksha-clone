import React, { useState } from "react";
import { Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FlexBox from "../atoms/FlexBox";
import Button from "../atoms/Button";
import Icons from "../atoms/Icons";

const DateSelector = ({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const [isVisiblePicker, setIsVisiblePicker] = useState(false);

  return (
    <View style={{ padding: 16 }}>
      <FlexBox justifyContent="center" alignItems={"center"} gap={32}>
        <Button
          onPress={() => {
            setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000));
          }}
        >
          <Icons type="ant" name="left" size={15}></Icons>
        </Button>
        <Button
          onPress={() => {
            setIsVisiblePicker(true);
          }}
        >
          <Text>{date.toLocaleDateString()}</Text>
        </Button>
        <Button
          onPress={() => {
            setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
          }}
        >
          <Icons type="ant" name="right" size={15}></Icons>
        </Button>
      </FlexBox>
      <DateTimePickerModal
        isVisible={isVisiblePicker}
        onConfirm={(date) => {
          setDate(date);
          setIsVisiblePicker(false);
        }}
        onCancel={() => {
          setIsVisiblePicker(false);
        }}
        date={date}
      ></DateTimePickerModal>
    </View>
  );
};

export default DateSelector;
