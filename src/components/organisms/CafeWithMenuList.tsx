import React from "react";
import { View, Text, ScrollView } from "react-native";
import Margin from "../atoms/Margin";
import { TCafeMenus, Ttime } from "../../@types/types";
import Button from "../atoms/Button";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { SCREENS } from "../../utils/enums";
import { palette } from "../../utils/palette";
import Divider from "../atoms/Divider";
import FlexBox from "../atoms/FlexBox";
import styled from "styled-components/native";

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
`;

const StyledColumnPrimary = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 5;
`;

const StyledColumnSecondary = styled.View`
  flex-basis: 40;
  justify-content: center;
  align-items: center;
`;

const CafeWithMenuListItem = ({
  cafeWithMenu: cafe,
  time,
}: {
  cafeWithMenu: TCafeMenus;
  time: Ttime;
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View
      key={cafe.id}
      style={{ backgroundColor: palette.white, padding: 10, borderRadius: 10 }}
    >
      <StyledRow>
        <StyledColumnPrimary>
          <Text>{cafe.name}</Text>
          <Button
            onPress={() => {
              navigation.navigate(SCREENS.FAVORITE_NAVIGATOR, {
                screen: SCREENS.RESTAURANT_SCREEN,
                params: { cafeId: cafe.id },
              });
            }}
          >
            <Text style={{ color: "red" }}>식당 정보</Text>
          </Button>
        </StyledColumnPrimary>
        <StyledColumnSecondary>
          <Text>Price</Text>
        </StyledColumnSecondary>
        <StyledColumnSecondary>
          <Text>Rate</Text>
        </StyledColumnSecondary>
        <StyledColumnSecondary>
          <Text>Like</Text>
        </StyledColumnSecondary>
      </StyledRow>

      <Divider width={3} color={palette.orange} margin={5}></Divider>
      {cafe.menus.map((menu) => (
        <View key={menu.id}>
          {menu.time === time && (
            <StyledRow>
              <StyledColumnPrimary>
                <Text>{menu.name}</Text>
              </StyledColumnPrimary>
              <StyledColumnSecondary>
                <Text>{menu.price}</Text>
              </StyledColumnSecondary>
              <StyledColumnSecondary>
                <Text>{menu.rate}</Text>
              </StyledColumnSecondary>
              <StyledColumnSecondary>
                <Text>{menu.price}</Text>
              </StyledColumnSecondary>
            </StyledRow>
          )}
        </View>
      ))}
    </View>
  );
};

const CafeWithMenuList = ({
  cafeWithMenus,
  time,
}: {
  cafeWithMenus: TCafeMenus[];
  time: Ttime;
}) => {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {cafeWithMenus.map((cafe) => {
        if (cafe.menus.filter((menu) => menu.time === time).length == 0)
          return null;

        return (
          <>
            <CafeWithMenuListItem
              key={cafe.id}
              cafeWithMenu={cafe}
              time={time}
            ></CafeWithMenuListItem>
            <Margin margin={10}></Margin>
          </>
        );
      })}
    </ScrollView>
  );
};

export default CafeWithMenuList;
