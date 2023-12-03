import React from "react";
import { View, Text, ScrollView, RefreshControl, Modal } from "react-native";
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
import styled from "styled-components/native";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  currentCafeIdAtom,
  isCafeModalOpenedAtom,
} from "../../state/cafeModalAtom";

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
`;

const StyledColumnPrimary = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const StyledColumnSecondary = styled.View`
  flex-basis: 40px;
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

  const setIsModalOpen = useSetRecoilState(isCafeModalOpenedAtom);
  const setCurrentCafeId = useSetRecoilState(currentCafeIdAtom);

  return (
    <View
      key={cafe.id}
      style={{
        backgroundColor: palette.white,
        padding: 10,
        borderRadius: 10,
        flex: 1,
      }}
    >
      <StyledRow>
        <StyledColumnPrimary>
          <Text>{cafe.name}</Text>
          <Button
            onPress={() => {
              setCurrentCafeId(cafe.id);
              navigation.navigate(SCREENS.RESTAURANT_SCREEN);
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

      <Divider width={2} color={palette.orange} margin={1}></Divider>
      {cafe.menus.map((menu) => (
        <View key={menu.id}>
          {menu.time === time && (
            <Button
              onPress={() => {
                navigation.navigate(SCREENS.REVIEW_MAIN_SCREEN, {
                  menuId: menu.id,
                });
              }}
            >
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
            </Button>
          )}
        </View>
      ))}
    </View>
  );
};

const CafeWithMenuList = ({
  cafeWithMenus,
  time,
  loading,
  onRefresh,
  error,
}: {
  cafeWithMenus: TCafeMenus[];
  time: Ttime;
  loading: boolean;
  error: Error | null;
  onRefresh: () => void;
}) => {
  return (
    <ScrollView
      style={{ paddingHorizontal: 10 }}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
        ></RefreshControl>
      }
    >
      {error ? (
        <Text>에러가 발생했습니다. 다시 시도해주세요</Text>
      ) : (
        cafeWithMenus.map((cafe) => {
          if (cafe.menus.filter((menu) => menu.time === time).length == 0)
            return null;

          return (
            <React.Fragment key={cafe.id}>
              <CafeWithMenuListItem
                cafeWithMenu={cafe}
                time={time}
              ></CafeWithMenuListItem>
              <Margin margin={10}></Margin>
            </React.Fragment>
          );
        })
      )}
    </ScrollView>
  );
};

export default CafeWithMenuList;
