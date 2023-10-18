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
        backgroundColor: bgColor,
        ...(styles ? styles : {}),
      }}
    >
      {children}
    </View>
  );
};

export default Container;
