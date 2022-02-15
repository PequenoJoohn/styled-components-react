import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";

import { corPrimaria } from '../UI/variaveis';

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => {
    console.log(props)
    return props.primary ? "white" : corPrimaria
  }};
  color: ${(props) => props.primary ? corPrimaria : "white"};
`;

const Title = styled.h3`
  color: ${(props) => props.primary ? corPrimaria : "white"};
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <Title>Smart Bank</Title>
      <div>
        <BtnCabecalho primary href="/">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="/">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;