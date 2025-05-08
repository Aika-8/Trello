import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";
import { Icons } from "../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCards, postCards } from "../store/thunks/cardsThunk";
import { CardList } from "./CardList";

export const ColumnItem = ({ title, columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.addCard.addingCard);
  const filteredCards = cards.filter((card) => card.columnId === columnId);
  const [isOpenField, setIsOpenField] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const handleAddCard = () => {
    setIsOpenField((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cardTitle.trim()) return;
    const newCard = {
      title: cardTitle,
      columnId: columnId,
    };
    try {
      await dispatch(postCards(newCard)).unwrap();
      // await dispatch(getCards());
    } catch (error) {
      console.error("Ошибка при добавлении карточки:", error);
    }
    setCardTitle("");
    // setIsOpenField(false);
  };
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);
  return (
    <ContainerCards>
      <TopContainerOfCard>
        <h2>{title}</h2>
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
      <CardList array={filteredCards} />
      {!isOpenField && (
        <GroupAddingCard>
          <StyledButton onClick={handleAddCard}>
            <Icons.PlusBlack />
            <span>Добавить карточку</span>
          </StyledButton>
          <Icons.Image />
        </GroupAddingCard>
      )}
      {isOpenField && (
        <AddCardForm onSubmit={handleSubmit}>
          <StyledTextarea
            placeholder="Введите название или вставтьте ссылку"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <WrapperBtnCrestic>
            <StyledBtnAdding type="submit">Добавить карточку</StyledBtnAdding>
            <Icons.Crestic onClick={() => setIsOpenField(false)} />
          </WrapperBtnCrestic>
        </AddCardForm>
      )}
    </ContainerCards>
  );
};
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
const GroupAddingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const AddCardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: fadeIn 0.3s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 60px;
  border-radius: 6px;
  padding: 8px;
  resize: none;
  outline: none;
  box-shadow: 0px 1px 1px #091e4240;
  border: 3px solid #1d7afc;
  transition: border 0.05s ease-in-out;
  &:hover {
    border: none;
  }
`;
const WrapperBtnCrestic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  ${Icons.Crestic} {
    width: 20px;
    height: 20px;
  }
`;
const StyledBtnAdding = styled(Button)`
  width: 150px;
  height: 32px;
  border: none;
  border-radius: 3px;
  background-color: #0c66e4;
  box-shadow: none;
  color: #ffffff;
  font-size: 14px;
  padding: 0px 5px;
`;
