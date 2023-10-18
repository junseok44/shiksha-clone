import { View, Text } from "react-native";
import Margin from "../components/atoms/Margin";
import { useMenus } from "../hooks/useMenus";
import TimeSelector from "../components/organisms/TimeSelector";
import DateSelector from "../components/organisms/DateSelector";
import CafeWithMenuList from "../components/organisms/CafeWithMenuList";

const MenuScreen = () => {
  const {
    cafeWithMenus,
    date,
    time,
    loading,
    error,
    setTime,
    setDate,
    onRefresh,
  } = useMenus();

  return (
    <View style={{ flex: 1 }}>
      <DateSelector date={date} setDate={setDate}></DateSelector>
      <TimeSelector time={time} setTime={setTime}></TimeSelector>
      <Margin margin={10} />
      <CafeWithMenuList
        cafeWithMenus={cafeWithMenus}
        time={time}
        loading={loading}
        onRefresh={onRefresh}
        error={error}
      ></CafeWithMenuList>
    </View>
  );
};

export default MenuScreen;
