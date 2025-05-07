import React from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";
import { Icons } from "../assets/icons/icons";

export const CardList = () => {
  return (
    <WrapperCards>
      <ContainerCards>
        <TopContainerOfCard>
          <h2>Нужно сделать</h2>
          <TopRightIconsGroup>
            <Button>
              <span>
                <StyledIconArrow />
              </span>
            </Button>
            <div>
              <Button>
                <span>
                  <Icons.KebabMenuForCard />
                </span>
              </Button>
            </div>
          </TopRightIconsGroup>
        </TopContainerOfCard>
        <ol>
          <StyledLi>
            <ContainerBlackboard>
              <IconCircle />
              <span>Планирование проекта</span>
            </ContainerBlackboard>
            <ContainerBlackboard>
              <IconEdit />
            </ContainerBlackboard>
          </StyledLi>
          <StyledLi>
            <ContainerBlackboard>
              <IconCircle />
              <span>Вступительное собрание</span>
            </ContainerBlackboard>
            <IconEdit />
          </StyledLi>
        </ol>
        <GroupAddingCard>
          <StyledButton>
            <Icons.PlusBlack />
            <span>Добавить карточку</span>
          </StyledButton>
          <span>
            <Icons.Image />
          </span>
        </GroupAddingCard>
      </ContainerCards>
      <ContainerCards>
        <TopContainerOfCard>
          <h2>В процессе</h2>
          <TopRightIconsGroup>
            <Button>
              <span>
                <StyledIconArrow />
              </span>
            </Button>
            <div>
              <Button>
                <span>
                  <Icons.KebabMenuForCard />
                </span>
              </Button>
            </div>
          </TopRightIconsGroup>
        </TopContainerOfCard>
        <GroupAddingCard>
          <StyledButton>
            <Icons.PlusBlack />
            <span>Добавить карточку</span>
          </StyledButton>
          <span>
            <Icons.Image />
          </span>
        </GroupAddingCard>
      </ContainerCards>
      <ContainerCards>
        <TopContainerOfCard>
          <h2>Готова</h2>
          <TopRightIconsGroup>
            <Button>
              <span>
                <StyledIconArrow />
              </span>
            </Button>
            <div>
              <Button>
                <span>
                  <Icons.KebabMenuForCard />
                </span>
              </Button>
            </div>
          </TopRightIconsGroup>
        </TopContainerOfCard>
        <GroupAddingCard>
          <StyledButton>
            <Icons.PlusBlack />
            <span>Добавить карточку</span>
          </StyledButton>
          <span>
            <Icons.Image />
          </span>
        </GroupAddingCard>
      </ContainerCards>
      <BlockAddingCard>
        <Icons.Plus />
        <span>Добавьте еще одну колонку</span>
      </BlockAddingCard>
    </WrapperCards>
  );
};
const WrapperCards = styled.ol`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0px 30px;
`;
const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;
  height: fit-content;
  background-color: #f1f2f4;
  box-shadow: 0px 1px 1px #091e4240;
  border-radius: 12px;
  padding: 8px 12px;
  h2 {
    font-size: 17px;
    color: #172b4d;
  }
`;
const TopContainerOfCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopRightIconsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StyledIconArrow = styled(Icons.Arrow)`
  width: 24px;
  height: 24px;
`;
const IconCircle = styled(Icons.Circle)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const IconEdit = styled(Icons.Edit)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const StyledLi = styled.li`
  min-height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0px 1px 1px #091e4240;
  border-radius: 8px;
  padding: 0px 8px;
  cursor: pointer;
  &:hover ${IconCircle}, &:hover ${IconEdit} {
    opacity: 1;
  }
`;
const ContainerBlackboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    color: #172b4d;
  }
`;
const GroupAddingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperIconImage = styled.span`
  width: 32px;
  height: 32px;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    width: fit-content;
    height: fit-content;
    padding: 3px 5px;
    background-color: #ffffff3d;
    border-radius: 4px;
  }
`;
const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #44546f;
  font-weight: 600;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    width: 220px;
    height: 32px;
    padding: 5px 8px;
    border-radius: 4px;
    background-color: #091e4224;
  }
`;
const BlockAddingCard = styled.div`
  width: 272px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #ffffff3d;
  border-radius: 12px;
  cursor: pointer;
  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
  }
`;
