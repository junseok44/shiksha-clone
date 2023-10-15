import React from "react";
import { View } from "react-native";

const FlexBox = ({
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  children,
  gap,
}: {
  direction?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end";
  gap?: number;
  children: React.ReactNode;
}) => {
  return (
    <View
      style={{
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...(gap ? { gap: gap } : {}),
      }}
    >
      {children}
    </View>
  );
};

export default FlexBox;
