import React, { useEffect } from "react";
import Modal from "../UI/Modal";
import { Box, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCard, getCards } from "../../store/thunks/cardsThunk";
import { Icons } from "../../assets/icons/icons";

export const ModalCard = ({ open, onClose, top, left, cardId }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose();
  };
  const handleAction = async (action) => {
    try {
      if (action === "deleteCard") {
        await dispatch(deleteCard(cardId)).unwrap();
        await dispatch(getCards());
      }
    } catch (error) {
      console.error("Ошибка при удалении карточки:", error);
    }
    handleClose();
  };
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);
  const ActionItem = ({ icon: Icon, text, onClick }) => (
    <Box
      component="li"
      sx={{
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: 1,
        padding: "8px 10px",
        cursor: "pointer",
        boxShadow: "0px 1px 1px #091e4240",
        marginBottom: "5px",
        background: "#f1f2f4",
        borderRadius: "3px",
        border: "none !important",
        outline: "none",
      }}
      onClick={onClick}
    >
      <Icon />
      <ListItemText primary={text} />
    </Box>
  );
  return (
    <Modal
      open={open}
      title="Действия с карточкой"
      onClose={handleClose}
      top={top}
      left={left}
    >
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          border: "none !important",
          outline: "none",
          "&:focus": {
            border: "none",
            outline: "none",
          },
        }}
      >
        <ActionItem icon={Icons.First} text="Открыть карточку" />
        <ActionItem icon={Icons.Second} text="Изменить метки" />
        <ActionItem icon={Icons.Third} text="Изменить участников" />
        <ActionItem icon={Icons.Fivth} text="Сменить обложку" />
        <ActionItem
          icon={Icons.Sixth}
          text="Архивировать"
          onClick={() => handleAction("deleteCard")}
        />
      </Box>
    </Modal>
  );
};
