import React from "react";
import { Text, View, Pressable } from "react-native";

const Button = ({
  onPress,
  children,
}: {
  onPress: any;
  children: React.ReactNode;
}) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};

export default Button;
