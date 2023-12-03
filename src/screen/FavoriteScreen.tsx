import { View, Text } from "react-native";
import { useMenus } from "../hooks/useMenus";
import TimeSelector from "../components/organisms/TimeSelector";
import Margin from "../components/atoms/Margin";
import CafeWithMenuList from "../components/organisms/CafeWithMenuList";
import DateSelector from "../components/organisms/DateSelector";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  cafeDataQueryAtom,
  isCafeModalOpenedAtom,
} from "../state/cafeModalAtom";
import RNModal from "../components/atoms/RNModal";
import Button from "../components/atoms/Button";

const tempFavoriteIds = [1];

const FavoriteScreen = ({ navigation, route }) => {
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

  const [isCafeModalOpened, setIsCafeModalOpen] = useRecoilState(
    isCafeModalOpenedAtom
  );
  const cafeData = useRecoilValueLoadable(cafeDataQueryAtom);

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
      <RNModal isModalOpen={isCafeModalOpened}>
        <Text>modal</Text>
        <Button
          onPress={() => {
            setIsCafeModalOpen(false);
          }}
        >
          <Text>close modal</Text>

          {cafeData.state === "loading" && <Text>loading</Text>}
          {cafeData.state === "hasValue" && (
            <View>
              <Text>{cafeData.contents?.name}</Text>
            </View>
          )}
          {cafeData.state === "hasError" && <Text>error</Text>}
        </Button>
      </RNModal>
    </View>
  );
};

export default FavoriteScreen;
