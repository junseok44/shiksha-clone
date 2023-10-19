import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { SCREENS } from "./../utils/enums";
import { LoggedInStackParamList } from "../@types/navigation";
import { useState } from "react";
import { useFetcher } from "../hooks/useFetch";
import { fakeFetch } from "../utils/fetch";
import { cafes } from "../utils/data";
import { TCafe } from "../@types/types";
import { dateFormatNew } from "../utils/dateFormat";

type props = StackScreenProps<
  LoggedInStackParamList,
  typeof SCREENS.RESTAURANT_SCREEN
>;

const RestaurantScreen = ({ navigation, route }: props) => {
  const [cafe, setCafe] = useState<TCafe | null>(null);
  const { cafeId } = route.params;

  const { loading, error } = useFetcher(
    () =>
      fakeFetch(
        cafes.find((cafe) => cafe.id === cafeId),
        1000
      ),
    (res) => {
      if (res) setCafe(res);
    }
  );

  if (error) {
    return <Text>에러가 발생했습니다.</Text>;
  }
  if (loading) {
    return <Text>로딩중입니다..</Text>;
  }

  return (
    <View>
      <Text>{cafeId}입니다.</Text>
      {cafe && (
        <View>
          {renderTime("휴일 점심", cafe.time.HolidayStart, 11)}
          {renderTime("휴일 저녁", cafe.time.HolidayEnd, 18)}
        </View>
      )}
    </View>
  );
};

const renderTime = (label: string, time: Date | null, defaultHour: number) => (
  <Text>
    {label}: {time ? dateFormatNew(time, defaultHour, 0) : "정보 없음"}
  </Text>
);

export default RestaurantScreen;
