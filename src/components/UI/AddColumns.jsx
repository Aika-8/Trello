import React, { useEffect, useState } from "react";
import { Icons } from "../../assets/icons/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { getColumn, postColumn } from "../../store/thunks/columnsThunk";
import { ColumnList } from "../ColumnList";

export const AddColumns = () => {
  const dispatch = useDispatch();
  const columnTitles = useSelector((state) => state.addColumn.title);
  const [isOpenField, setIsOpenField] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");
  const handleShowCardForm = () => {
    setIsOpenField((prev) => !prev);
  };
  const handleAddColumn = async (e) => {
    e.preventDefault();
    if (!columnTitle.trim()) return;
    const newColumn = { title: columnTitle };
    try {
      await dispatch(postColumn(newColumn)).unwrap();
      await dispatch(getColumn());
      setColumnTitle("");
      setIsOpenField(false);
    } catch (error) {
      console.error("Ошибка при добавлении колонки:", error);
    }
  };
  useEffect(() => {
    dispatch(getColumn());
  }, [dispatch]);
  return (
    <WrapperCards>
      <>
        <ColumnList array={columnTitles}/>
        {!isOpenField && (
          <BlockAddingCard onClick={handleShowCardForm}>
            <Icons.Plus />
            <span>Добавьте еще одну колонку</span>
          </BlockAddingCard>
        )}
        <>
          {isOpenField && (
            <AddCardForm onSubmit={handleAddColumn}>
              <StyledTextarea
                placeholder="Введите имя колонки..."
                value={columnTitle}
                onChange={(e) => setColumnTitle(e.target.value)}
              />
              <WrapperBtnCrestic>
                <StyledBtnAdding type="submit">
                  Добавить колонку
                </StyledBtnAdding>
                <Icons.Crestic onClick={() => setIsOpenField(false)} />
              </WrapperBtnCrestic>
            </AddCardForm>
          )}
        </>
      </>
    </WrapperCards>
  );
};
const WrapperCards = styled.ol`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  list-style: none;
  padding: 0px 30px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: #ffffff3d transparent;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff3d;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
const BlockAddingCard = styled.div`
  width: 280px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background-color: #ffffff3d;
  border-radius: 12px;
  padding: 0px 5px;
  cursor: pointer;
  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
  }
`;
const AddCardForm = styled.form`
  width: 280px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f1f2f4;
  box-shadow: 0px 1px 1px #091e4240;
  border-radius: 12px;
  padding: 8px 12px;
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
  width: 256px;
  height: 32px;
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
