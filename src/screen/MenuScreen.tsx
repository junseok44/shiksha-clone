import { View, Text } from "react-native";
import Margin from "../components/atoms/Margin";
import { useMenus } from "../hooks/useMenus";
import TimeSelector from "../components/organisms/TimeSelector";
import CafeWithMenuList from "../components/organisms/CafeWithMenuList";
import DateSelector from "../components/organisms/DateSelector";

const MenuScreen = () => {
  const { cafeWithMenus, date, time, loading, error, setTime, setDate } =
    useMenus();

  // TODO : 만약 에러가 나면 reLOAD를 해야하는데.
  // 혹은 밑으로 스크ㄹ롤을 내려서 새로고침을 해야하는데.

  if (error) return <Text>불러오는 도중 오류가 발생했습니다.</Text>;
  if (!error && loading) return <Text>로딩중...</Text>;

  return (
    <View>
      <DateSelector date={date} setDate={setDate}></DateSelector>
      <TimeSelector time={time} setTime={setTime}></TimeSelector>
      <Margin margin={10} />
      <CafeWithMenuList
        cafeWithMenus={cafeWithMenus}
        time={time}
      ></CafeWithMenuList>
    </View>
  );
};

export default MenuScreen;
