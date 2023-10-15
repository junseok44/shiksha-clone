import React from "react";
import { View } from "react-native";

const Margin = ({ margin }: { margin: number }) => {
  return <View style={{ marginBottom: margin }}></View>;
};

export default Margin;
