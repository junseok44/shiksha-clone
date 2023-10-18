import React from "react";
import { Text, View, Pressable } from "react-native";
import styled from "styled-components/native";
import { palette } from "./../../utils/palette";

interface TButtonProps {
  onPress: any;
  children: React.ReactNode;
  hitSlop?: number;
  styles?: any;
}

interface TSubmitBtnProps extends TButtonProps {
  isActive?: boolean;
}

const Button = ({ onPress, children, hitSlop = 10, styles }: TButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop}
      style={{
        ...(styles ? styles : {}),
      }}
    >
      {children}
    </Pressable>
  );
};

export const SubmitButton = (props: TSubmitBtnProps) => {
  return (
    <Button
      {...props}
      styles={{
        ...(props.styles ? props.styles : {}),
        width: "100%",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: palette.white,
        backgroundColor: props.isActive ? palette.orange : palette.light_grey,
      }}
    >
      {props.children}
    </Button>
  );
};

// 이런식으로 컴파운드 패턴을 사용할 수 있다!!
SubmitButton.Text = styled.Text`
  color: ${palette.white};
`;

export const MainButton = (props: TButtonProps) => {
  return (
    <Button
      {...props}
      styles={{
        backgroundColor: palette.orange,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: palette.white,
      }}
    ></Button>
  );
};

export default Button;
