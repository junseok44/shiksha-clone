import React from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  cafeDataQueryAtom,
  isCafeModalOpenedAtom,
} from "../../state/cafeModalAtom";
import RNModal from "../atoms/RNModal";
import Button from "../atoms/Button";
import { Text, View } from "react-native";
import Typography from "../atoms/Typography";
import FlexBox from "../atoms/FlexBox";
import Divider from "../atoms/Divider";
import Container from "../atoms/Container";
import { palette } from "../../utils/palette";
import styled from "styled-components/native";

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

const CafeInfoModal = () => {
  const [isCafeModalOpened, setIsCafeModalOpen] = useRecoilState(
    isCafeModalOpenedAtom
  );
  const cafeData = useRecoilValueLoadable(cafeDataQueryAtom);

  return (
    <RNModal isModalOpen={isCafeModalOpened}>
      <FlexBox gap={20} direction="column" styles={{ flex: 1 }}>
        <View style={{ flex: 1, width: "100%" }}>
          <Container>
            <FlexBox
              justifyContent="center"
              styles={{
                padding: 10,
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
        <View style={{ flex: 1, width: "100%" }}>
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
    </RNModal>
  );
};

export default CafeInfoModal;
