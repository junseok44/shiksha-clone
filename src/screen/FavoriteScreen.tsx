import { View, Text, Button } from "react-native";
import { SCREENS } from "../utils/enums";
import { StackScreenProps } from "@react-navigation/stack";
import { FavoriteStackParamList } from "../@types/navigation";
import { useMenus } from "../hooks/useMenus";
import TimeSelector from "../components/organisms/TimeSelector";
import Margin from "../components/atoms/Margin";
import CafeWithMenuList from "../components/organisms/CafeWithMenuList";
import DateSelector from "../components/organisms/DateSelector";

type props = StackScreenProps<
  FavoriteStackParamList,
  typeof SCREENS.FAVORITE_SCREEN
>;

const tempFavoriteIds = [1];

const FavoriteScreen = ({ navigation, route }: props) => {
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

  const favoriteCafeWithMenus = cafeWithMenus.filter((cafeWithMenu) =>
    tempFavoriteIds.includes(cafeWithMenu.id)
  );

  return (
    <View style={{ flex: 1 }}>
      <DateSelector date={date} setDate={setDate}></DateSelector>
      <TimeSelector time={time} setTime={setTime}></TimeSelector>
      <Margin margin={10} />
      <CafeWithMenuList
        cafeWithMenus={favoriteCafeWithMenus}
        time={time}
        loading={loading}
        error={error}
        onRefresh={onRefresh}
      ></CafeWithMenuList>
    </View>
  );
};

export default FavoriteScreen;
