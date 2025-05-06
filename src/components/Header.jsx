import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import { Button } from "./UI/Button";

export const Header = () => {
  return (
    <StyledHeader>
      <LeftContainer>
        <Icons.SwitcherIcon />
        <div>
          {/* <Icons.UseGroup /> */}
          <span>Trello</span>
        </div>
        <NavContainer>
          <p>Рабочие пространства</p>
          <p>Недавние</p>
          <p>В избраном</p>
          <p>Шаблоны</p>
          <StyledButton>Создать</StyledButton>
        </NavContainer>
      </LeftContainer>
      <RightContainer>
        <StyledLoupIcon />
        <StyledInput placeholder="Поиск" />
        <RightGroupInfo>
          <Icons.Ring />
          <Icons.QuestionMark />
          <StyledBtnLogIn>Log in</StyledBtnLogIn>
        </RightGroupInfo>
      </RightContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #7d2650;
  color: #ffffff;
  padding: 0px 30px;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p {
    font-size: 14px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
`;
const RightGroupInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StyledInput = styled.input`
  width: 200px;
  height: 32px;
  background-color: #ffffff33;
  border: 1px solid #dfe1e6;
  border-radius: 5px;
  padding: 0px 30px;
  ::placeholder {
    font-size: 14px;
    color: #ffffff;
  }
`;
const StyledLoupIcon = styled(Icons.Loup)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 25%;
  left: 2%;
  z-index: 2;
`;
const StyledButton = styled(Button)`
  width: 76px;
  height: 32px;
  border-radius: 3px;
  padding: 0px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
`;
const StyledBtnLogIn = styled(Button)`
  background-color: #7d2650;
  color: #ffffff;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
`;
