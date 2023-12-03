import React from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  cafeDataQueryAtom,
  isCafeModalOpenedAtom,
} from "../state/cafeModalAtom";
import { Text, View } from "react-native";
import Typography from "../components/atoms/Typography";
import FlexBox from "../components/atoms/FlexBox";
import Divider from "../components/atoms/Divider";
import Container from "../components/atoms/Container";
import { palette } from "../utils/palette";
import styled from "styled-components/native";
import CenterContainer from "../components/atoms/CenterLayout";

const CafeInfoModalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 15;
  font-weight: normal;
`;

const CafeModalRowDivider = styled.View<{ height?: number; color?: string }>`
  width: 100%;
  height: ${(props) => props.height || 1};
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.color || palette.orange};
`;

const CafeModalMap = styled.View`
  width: 100%;
  height: 250;
  background-color: ${palette.light_grey};
  border-radius: 10px;
`;

const CafeInfoScreen = () => {
  const [isCafeModalOpened, setIsCafeModalOpen] = useRecoilState(
    isCafeModalOpenedAtom
  );
  const cafeData = useRecoilValueLoadable(cafeDataQueryAtom);

  return cafeData.state === "loading" ? (
    <CenterContainer>
      <Text>loading...</Text>
    </CenterContainer>
  ) : cafeData.state === "hasError" ? (
    <CenterContainer>
      <Text>Error!!</Text>
    </CenterContainer>
  ) : (
    cafeData.state === "hasValue" && (
      <FlexBox gap={20} direction="column" styles={{ flex: 1 }}>
        <View style={{ width: "100%", flex: 1, backgroundColor: "white" }}>
          <Container>
            <FlexBox
              justifyContent="center"
              styles={{
                paddingVertical: 12,
              }}
            >
              <Typography variant="h3" size={20}>
                {cafeData.state === "hasValue" && cafeData.contents?.name}
              </Typography>
            </FlexBox>
            <Divider color={palette.orange} width={2}></Divider>
            <CafeInfoModalRow>
              <Typography variant="h4">Cafe Name</Typography>
              <Typography variant="h4">101동</Typography>
            </CafeInfoModalRow>
            <CafeModalMap></CafeModalMap>
          </Container>
        </View>
        <View style={{ width: "100%", flex: 1, backgroundColor: "white" }}>
          <Container>
            <CafeInfoModalRow>
              <Typography variant="h4">영업시간</Typography>
              <CafeModalRowDivider></CafeModalRowDivider>
            </CafeInfoModalRow>
            <CafeInfoModalRow>
              <Typography variant="h4">주중</Typography>
              <Typography variant="h4">11:30 - 19:00</Typography>

              <CafeModalRowDivider
                color={palette.light_grey}
              ></CafeModalRowDivider>
            </CafeInfoModalRow>
            <CafeInfoModalRow>
              <Typography variant="h4">토요일</Typography>
              <Typography variant="h4">11:30 - 19:00</Typography>
              <CafeModalRowDivider
                color={palette.light_grey}
              ></CafeModalRowDivider>
            </CafeInfoModalRow>
            <CafeInfoModalRow>
              <Typography variant="h4">휴일</Typography>
              <Typography variant="h4">11:30 - 19:00</Typography>

              <CafeModalRowDivider
                color={palette.light_grey}
              ></CafeModalRowDivider>
            </CafeInfoModalRow>
          </Container>
        </View>
      </FlexBox>
    )
  );
};

export default CafeInfoScreen;
