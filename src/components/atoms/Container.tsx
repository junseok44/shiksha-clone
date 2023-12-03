import React from "react";
import { View } from "react-native";

const Container = ({
  children,
  styles,
  bgColor = "white",
  isPaddingVertical = false,
}: {
  children: React.ReactNode;
  styles?: any;
  bgColor?: string;
  isPaddingVertical?: boolean;
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: bgColor,
        ...(styles ? styles : {}),
        ...(isPaddingVertical ? { paddingVertical: 20 } : {}),
      }}
    >
      {children}
    </View>
  );
};

export default Container;
