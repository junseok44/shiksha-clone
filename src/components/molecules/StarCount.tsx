import React from "react";
import { Text } from "react-native";
import Icons from "../atoms/Icons";
import { AntDesign } from "@expo/vector-icons";
import FlexBox from "../atoms/FlexBox";
import { palette } from "../../utils/palette";
import Button from "../atoms/Button";

// 별이 다섯개임을 보여주는
const StarCount = ({
  count,
  setCount,
  size = 24,
}: {
  count: number;
  setCount?: (T: number) => void;
  size?: number;
}) => {
  return (
    <FlexBox>
      {Array.from({ length: count }).map((_, index) => {
        if (setCount) {
          return (
            <Button onPress={() => setCount(index + 1)}>
              <Icons
                type="ant"
                name="star"
                size={size}
                color={palette.orange}
              ></Icons>
            </Button>
          );
        } else {
          return (
            <Icons
              type="ant"
              name="star"
              size={size}
              color={palette.orange}
            ></Icons>
          );
        }
      })}

      {Array.from({ length: 5 - count }).map((_, index) => {
        if (setCount) {
          return (
            <Button onPress={() => setCount(index + 1)}>
              <Icons
                type="ant"
                name="staro"
                size={size}
                color={palette.orange}
              ></Icons>
            </Button>
          );
        } else {
          return <Icons type="ant" name="staro" size={size}></Icons>;
        }
      })}
    </FlexBox>
  );
};

export default StarCount;
