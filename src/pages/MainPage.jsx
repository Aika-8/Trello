import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import { Button } from "../components/UI/Button";
import { AddColumns } from "../components/UI/AddColumns";

export const MainPage = () => {
  return (
    <StyledMain>
      <StyledTopContainer>
        <LeftContainer>
          <h3>Моя доска Trello</h3>
          <StyledIcons>
            <Icons.Star />
          </StyledIcons>
          <ContainerBlackboard>
            <GroupBlackboard>
              <StyledIcons>
                <Icons.People />
              </StyledIcons>
              {/* <span>Для рабочего пространства</span> */}
            </GroupBlackboard>
            <GroupBlackboard>
              <span>
                <Icons.Blackboard />
                По доске
              </span>
            </GroupBlackboard>
            <GroupBlackboard>
              <span>
                <Icons.Table />
                Таблица
              </span>
            </GroupBlackboard>
            <StyledDownIcons />
          </ContainerBlackboard>
        </LeftContainer>
        <RightContainer>
          <GroupBlackboard>
            <span>
              <Icons.Rocket />
              Улучшения
            </span>
          </GroupBlackboard>
          <GroupBlackboard>
            <span>
              <Icons.Lightning />
              Автоматизация
            </span>
          </GroupBlackboard>
          <GroupBlackboard>
            <span>
              <Icons.Filter />
              Фильтры
            </span>
          </GroupBlackboard>
          <GroupBlackboard>
            <StyledBtnShare>
              <Icons.Share />
              <p>Поделиться</p>
            </StyledBtnShare>
            <span>
              <StyledKebabMenu />
            </span>
          </GroupBlackboard>
        </RightContainer>
      </StyledTopContainer>
      <AddColumns />
    </StyledMain>
  );
};
const StyledMain = styled.main`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  background-color: #de629c;
`;
const StyledTopContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #b64d7e;
  color: #ffffff;
  padding: 0px 30px;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h3 {
    transition: all 0.4s ease-in-out;
    &:hover {
      width: fit-content;
      height: fit-content;
      padding: 5px 8px;
      background-color: #ffffff3d;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
const StyledIcons = styled.span`
  transition: all 0.4s ease-in-out;
  &:hover {
    width: fit-content;
    height: fit-content;
    padding: 3px 3px;
    background-color: #ffffff3d;
    border-radius: 4px;
  }
`;
const ContainerBlackboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const GroupBlackboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    transition: all 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    &:hover {
      width: fit-content;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 5px 8px;
      background-color: #ffffff3d;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
const StyledDownIcons = styled(Icons.DownIcon)`
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
  gap: 10px;
`;
const StyledBtnShare = styled(Button)`
  width: 112px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border: none;
  border-radius: 3px;
  background-color: #dcdfe4;
  font-weight: 550;
  &:hover {
    background-color: #ffffff;
  }
`;
const StyledKebabMenu = styled(Icons.Kebab)`
  width: 20px;
  height: 20px;
`;
