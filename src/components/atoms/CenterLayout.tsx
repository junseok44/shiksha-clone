import React from "react";
import { View } from "react-native";

const CenterContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

export default CenterContainer;
