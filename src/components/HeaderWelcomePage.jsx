import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderWelcomePage = () => {
  return (
    <StyledHeader>
      <LeftContainer>
        <Icons.WelcomeLogo />
        <NavContainer>
          <p>
            Характеристики
            <Icons.DownBlackIcon />
          </p>
          <p>
            Решение <Icons.DownBlackIcon />
          </p>
          <p>
            Планы <Icons.DownBlackIcon />
          </p>
          <p>
            Цены <Icons.DownBlackIcon />
          </p>
          <p>
            Ресурсы <Icons.DownBlackIcon />
          </p>
        </NavContainer>
      </LeftContainer>
      <RightContainer>
        <StyledLink to="/signUp?mode=signIn">Вход</StyledLink>
        <Button
          sx={{
            width: "300px",
            height: "100%",
            color: "#ffffff",
            backgroundColor: "#0c66e4",
            textTransform: "initial",
            "&:hover": {
              backgroundColor: "#0052CC",
            },
          }}
        >
          Получите Trello беспалтно
        </Button>
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
  color: #ffffff;
  padding: 0px 30px;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  cursor: pointer;
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
    font-size: 17px;
    font-weight: 550;
    color: #000;
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
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const StyledLink = styled(Link)`
  color: #000;
  font-size: 20px;
  font-weight: 520;
  text-decoration: none;
`;
