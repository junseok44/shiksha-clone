import React from "react";
import { View } from "react-native";
import { palette } from "../../utils/palette";

const Divider = ({
  width = 3,
  color = palette.font_grey,
  margin = 0,
}: {
  width?: number;
  color?: string;
  margin?: number;
}) => {
  return (
    <View
      style={{
        width: "100%",
        borderBottomWidth: width,
        marginVertical: margin,
        borderBottomColor: color,
      }}
    ></View>
  );
};

export default Divider;
