import React from "react";
import { View } from "react-native";
import FlexBox from "../atoms/FlexBox";
import StarCount from "../molecules/StarCount";
import Typography from "../atoms/Typography";
import { palette } from "../../utils/palette";

const Comment = () => {
  return (
    <View>
      <FlexBox gap={5}>
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
        ></View>
        <View style={{ flex: 1 }}>
          <FlexBox justifyContent="space-between">
            <Typography size={13}>ID 9595</Typography>
            <Typography size={13} color={palette.font_grey}>
              2023년 6월 28일
            </Typography>
          </FlexBox>
          <StarCount count={5} size={13}></StarCount>
        </View>
      </FlexBox>
      <View
        style={{
          borderWidth: 1,
          borderColor: palette.font_grey,
          height: 50,
          borderRadius: 10,
          marginLeft: 40,
        }}
      ></View>
    </View>
  );
};

const CommentList = () => {
  return (
    <FlexBox direction="column" gap={15} alignItems="stretch">
      {[1, 2, 3, 4, 5].map((k, i) => (
        <Comment key={k}></Comment>
      ))}
      <Comment></Comment>
    </FlexBox>
  );
};

export default CommentList;
