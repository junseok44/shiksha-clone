import React from "react";
import { View, Image } from "react-native";
import { palette } from "../../utils/palette";

const RoundProfile = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        width: 45,
        height: 45,
        borderRadius: "50%",
        backgroundColor: palette.orange,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};

RoundProfile.Default = () => {
  return (
    <Image
      source={require("../../../assets/riceIcon.png")}
      style={{
        width: 30,
        height: 30,
      }}
    ></Image>
  );
};

export default RoundProfile;
