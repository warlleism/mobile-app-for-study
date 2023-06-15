import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const StyledContainerTransition = styled(View)`
  margin-bottom: 36px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  /* Estilos para TouchableOpacity, se necessário */
`;

const StyledView = styled(View)`
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstLine = styled(View)`
  background-color: #7809a1;
  height: 2px;
  width: 20px;
`;

const SecondLine = styled(View)`
  background-color: #6c0095ba;
  height: 2px;
  width: 15px;
`;

const ThirdLine = styled(View)`
  background-color: #ccc;
  height: 2px;
  width: 10px;
`;

const ContainerTransition = ({ children }) => {
  return <StyledContainerTransition>{children}</StyledContainerTransition>;
};

const CustomComponent = () => {
  return (
    <StyledTouchableOpacity onPress={() => console.log("teste")}>
      <StyledView>
        <FirstLine />
        <SecondLine />
        <ThirdLine />
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export { CustomComponent, ContainerTransition };
