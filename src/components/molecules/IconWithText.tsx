import React from "react";
import { View, Text } from "react-native";
import { palette } from "../../utils/palette";

const IconWithText = ({
  icon,
  text,
  size = 27,
  fontSize = 12,
  isSelected = false,
}: {
  icon: JSX.Element;
  text: string;
  isSelected?: boolean;
  size?: number;
  fontSize?: number;
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {React.cloneElement(icon, {
        size: size,
        color: isSelected ? palette.orange : "black",
      })}
      <Text
        style={{
          fontSize,

          color: isSelected ? palette.orange : "black",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default IconWithText;
