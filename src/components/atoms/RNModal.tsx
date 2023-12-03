import React from "react";
import { Modal } from "react-native";

const RNModal = ({
  isModalOpen,
  children,
}: {
  isModalOpen: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Modal
      visible={isModalOpen}
      animationType={"slide"}
      presentationStyle="pageSheet"
    >
      {children}
    </Modal>
  );
};

export default RNModal;
