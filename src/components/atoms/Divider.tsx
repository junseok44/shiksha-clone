import React from "react";
import { View } from "react-native";

const Divider = ({
  width,
  color,
  margin,
}: {
  width: number;
  color: string;
  margin: number;
}) => {
  return (
    <View
      style={{
        marginVertical: margin,
        borderBottomColor: color,
        borderBottomWidth: width,
      }}
    ></View>
  );
};

export default Divider;
