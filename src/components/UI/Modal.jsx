import { Box, Modal as MUIModal } from "@mui/material";
import React from "react";

export default function Modal({
  open,
  onClose,
  children,
  top = "50%",
  left = "50%",
}) {
  return (
    <MUIModal open={open} onClose={onClose} BackdropProps={{ invisible: true }}>
      <Box
        sx={{
          position: "absolute",
          top: top,
          left: left,
          transform: "translate(-7%, 3%)",
          borderRadius: 2,
          border: "none !important",
          zIndex: 15,
          width: "304px",
          fontSize: "14px",
          color: "#172b4d",
          fontWeight: "400",
          lineHeight: "20px",
          "&:active": {
            border: "none",
            outline: "none",
          },
        }}
      >
        {children}
      </Box>
    </MUIModal>
  );
}
