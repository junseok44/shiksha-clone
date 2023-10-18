import React from "react";
import { View, Text } from "react-native";
import FlexBox from "../atoms/FlexBox";
import StarCount from "../molecules/StarCount";
import Typography from "../atoms/Typography";
import Margin from "../atoms/Margin";
import { palette } from "../../utils/palette";
import Icons from "../atoms/Icons";

const ReviewStarGraphBar = ({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => {
  return (
    <FlexBox alignItems="center" gap={5}>
      <Typography size={12}>{label}</Typography>
      <Icons name="star" type="ant" color={palette.font_grey} size={12}></Icons>
      <View
        style={{
          width: `${percentage}%`,
          height: "50%",
          borderRadius: 5,
          backgroundColor: palette.orange,
        }}
      ></View>
    </FlexBox>
  );
};

const ReviewStarGraph = () => {
  return (
    <FlexBox direction="column" gap={5}>
      <ReviewStarGraphBar label="5" percentage={80}></ReviewStarGraphBar>
      <ReviewStarGraphBar label="4" percentage={10}></ReviewStarGraphBar>
      <ReviewStarGraphBar label="3" percentage={0}></ReviewStarGraphBar>
      <ReviewStarGraphBar label="2" percentage={0}></ReviewStarGraphBar>
      <ReviewStarGraphBar label="1" percentage={10}></ReviewStarGraphBar>
    </FlexBox>
  );
};

const ReviewBoard = () => {
  return (
    <FlexBox>
      <View
        style={{
          flexBasis: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Typography size={30}>4.9</Typography>
        <Margin margin={10}></Margin>
        <StarCount count={3}></StarCount>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Typography color={palette.font_grey} size={15}>
          총 5개의 평가가 있어요!
        </Typography>
        <Margin margin={10}></Margin>
        <ReviewStarGraph></ReviewStarGraph>
      </View>
    </FlexBox>
  );
};

export default ReviewBoard;
