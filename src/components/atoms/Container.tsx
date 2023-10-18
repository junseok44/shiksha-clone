import React from "react";
import { View } from "react-native";

const Container = ({
  children,
  styles,
  bgColor = "white",
}: {
  children: React.ReactNode;
  styles?: any;
  bgColor?: string;
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        ...(styles ? styles : {}),
        backgroundColor: bgColor,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
