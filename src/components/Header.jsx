import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import { Button } from "./UI/Button";

export const Header = () => {
  return (
    <StyledHeader>
      <LeftContainer>
        <span>
          <Icons.SwitcherIcon />
          Trello
        </span>
        <NavContainer>
          <p>
            Рабочие пространства
            <Icons.DownIcon />
          </p>
          <p>
            Недавние <Icons.DownIcon />
          </p>
          <p>
            В избраном <Icons.DownIcon />
          </p>
          <p>
            Шаблоны <Icons.DownIcon />
          </p>
          <StyledButton>Создать</StyledButton>
        </NavContainer>
      </LeftContainer>
      <RightContainer>
        <StyledLoupIcon />
        <StyledInput placeholder="Поиск" />
        <RightGroupInfo>
          <StyledRing />
          <QuestionMark />
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
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.4s ease-in-out;
    &:hover {
      width: fit-content;
      height: fit-content;
      padding: 3px 5px;
      background-color: #ffffff3d;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  p {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    font-size: 14px;
    transition: all 0.4s ease-in-out;
    &:hover {
      width: fit-content;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 8px;
      background-color: #ffffff3d;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
const StyledRing = styled(Icons.Ring)`
  width: 24px;
  height: 24px;
  transition: all 0.4s ease-in-out;
  &:hover {
    width: fit-content;
    height: fit-content;
    padding: 3px 5px;
    background-color: #ffffff3d;
    border-radius: 4px;
  }
`;
const QuestionMark = styled(Icons.QuestionMark)`
  width: 20px;
  height: 20px;
  transition: all 0.4s ease-in-out;
  &:hover {
    width: fit-content;
    height: fit-content;
    padding: 3px 5px;
    background-color: #ffffff3d;
    border-radius: 4px;
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
  &:hover {
    background-color: #ffffff3d;
    cursor: pointer;
  }
`;
const StyledLoupIcon = styled(Icons.Loup)`
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
  transition: all 0.4s ease-in-out;
  &:hover {
    width: fit-content;
    height: fit-content;
    padding: 5px 8px;
    background-color: #ffffff3d;
    border-radius: 4px;
  }
`;
