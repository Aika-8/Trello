import React, { useEffect, useState } from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import { ModalCard } from "./modal/ModalCard";
import { useDispatch } from "react-redux";
import { getCards, updateCard } from "../store/thunks/cardsThunk";

export const CardList = ({ array }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalCardId, setModalCardId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const handleEditClick = (e, item) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + 20,
    });
    setModalCardId(item.id);
    setIsModalOpen(true);
    setEditingId(item.id);
    setEditValue(item.title);
  };
  const handleSave = async (id, editValue) => {
    try {
      if (!editValue.trim()) {
        console.warn("Нельзя сохранить пустой заголовок");
        return;
      }
      await dispatch(updateCard({ id, title: editValue })).unwrap();
      setEditingId(null);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);
  return (
    <div>
      {array?.map((item, index) => (
        <StyledLi key={index}>
          <ContainerCard>
            <IconCircle />
            <WrapperUptdate>
              {editingId === item.id ? (
                <StyledInput
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={{ flex: 1 }}
                />
              ) : (
                <span>{item.title}</span>
              )}
              {/* {editingId === item.id && (
                <SaveButton onClick={() => handleSave(item.id, editValue)}>
                  Сохранить
                </SaveButton>
              )} */}
            </WrapperUptdate>
          </ContainerCard>
          <IconEdit onClick={(e) => handleEditClick(e, item)} />
        </StyledLi>
      ))}
      {editingId && (
        <SaveButton onClick={() => handleSave(editingId, editValue)}>
          Сохранить
        </SaveButton>
      )}
      <ModalCard
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        top={modalPosition.top}
        left={modalPosition.left}
        cardId={modalCardId}
      />
    </div>
  );
};
const IconCircle = styled(Icons.Circle)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const IconEdit = styled(Icons.Edit)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const StyledLi = styled.li`
  width: 100%;
  min-height: 36px;
  height: fit-content;
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
const WrapperUptdate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    color: #172b4d;
    word-break: break-word;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
    max-width: 100%;
    padding: 3px 0px;
  }
`;
const SaveButton = styled.button`
  width: 93px;
  height: 32px;
  margin-top: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #0052cc;
  color: white;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;
`;
const StyledInput = styled.input`
  width: 100%;
  min-height: 60px;
  border-radius: 6px;
  padding: 8px;
  resize: none;
  outline: none;
  border: none;
  background-color: #f1f2f4;
  /* box-shadow: 0px 1px 1px #091e4240; */
  /* border: 3px solid #1d7afc; */
  /* transition: border 0.05s ease-in-out;
  &:hover {
    border: none;
  } */
`;
