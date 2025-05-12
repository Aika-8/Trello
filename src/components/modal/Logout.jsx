import React from "react";
import Modal from "../UI/Modal";
import { ListItemButton, ListItemText } from "@mui/material";

export const Logout = ({ open, onClose, top, left, onLogout }) => {
  const handleClose = () => {
    onClose();
  };
  const handleLogout = () => {
    onLogout();
    onClose();
  };
  return (
    <Modal
      open={open}
      title="Logout"
      onClose={handleClose}
      top={top}
      left={left}
    >
      <ListItemButton
        onClick={handleLogout}
        sx={{ width: "100px", height: "40px", background: " #ffffff" }}
      >
        <ListItemText primary="Log out" />
      </ListItemButton>
    </Modal>
  );
};
