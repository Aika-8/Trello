import React, { useEffect } from "react";
import Modal from "../UI/Modal";
import { Icons } from "../../assets/icons/icons";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteColumn, getColumn } from "../../store/thunks/columnsThunk";

export const ModalColumn = ({
  open,
  onClose,
  top,
  left,
  columnId,
  handleAddCard,
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose();
  };

  const handleAction = async (action) => {
    try {
      console.log("Выбрано действие:", action);
      if (action === "delete") {
        await dispatch(deleteColumn(columnId)).unwrap();
        await dispatch(getColumn());
      }
    } catch (error) {
      console.error("Ошибка при удалении колонки:", error);
    }
    handleClose();
  };
  useEffect(() => {
    dispatch(getColumn());
  }, [dispatch]);
  return (
    <Modal
      open={open}
      title="Действия со списком"
      onClose={handleClose}
      top={top}
      left={left}
    >
      <Box
        sx={{
          background: "white",
          borderRadius: "3px",
          boxShadow: "0px 1px 1px #091e4240",
        }}
      >
        <List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              marginLeft: "30px",
              marginBottom: "15px",
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
              Действия со списком
            </Typography>
            <Icons.Crestic onClick={handleClose} />
          </Box>
          <ListItemButton
            onClick={() => {
              handleAddCard();
              handleClose();
            }}
          >
            <ListItemText primary="Добавить карточку" />
          </ListItemButton>
          <ListItemButton onClick={() => handleAction("copyList")}>
            <ListItemText primary="Копирование списка" />
          </ListItemButton>
          <ListItemButton onClick={() => handleAction("moveList")}>
            <ListItemText primary="Перемещение списка" />
          </ListItemButton>
          <ListItemButton onClick={() => handleAction("subscribe")}>
            <ListItemText primary="Подписаться" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <Divider sx={{ my: 1, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <Typography variant="body2" sx={{ color: "#44546f" }}>
                Изменить цвет колонки{" "}
                <span
                  style={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    color: "#553bd8",
                    borderRadius: "3px",
                    border: "1px sold transparent",
                    background:
                      "Linear-gradient(112.4deg, var(--ds-background-accent-blue-subtle, #579dff) 0%, var(--ds-background-accent-purple-subtle, #9f8fef) 100%)",
                  }}
                >
                  Premium
                </span>
              </Typography>
              <Icons.upArrowIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "280px",
                height: "32px",
                backgroundColor: "#091e420f",
                cursor: "pointer",
              }}
            >
              <Icons.Crestic />
              <Typography
                variant="body2"
                sx={{ color: "#172b4d", fontWeight: "500" }}
              >
                Без цвета
              </Typography>
            </Box>
          </Divider>
          <Divider sx={{ my: 1 }} />
          <ListItemButton onClick={() => handleAction("automation")}>
            <ListItemText primary="Автоматизация" />
            <Icons.downBlack />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListItemButton onClick={() => handleAction("delete")}>
            <ListItemText primary="Архивировать" />
          </ListItemButton>
        </List>
      </Box>
    </Modal>
  );
};
