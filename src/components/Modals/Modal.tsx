"use client";
import { Modal as ModalBase, IconButton, styled } from "@mui/material";
import { Close } from "@mui/icons-material";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  return (
    <ModalBase open={open} onClose={onClose}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalBase>
  );
};

const ModalContent = styled("div")({
  padding: "50px 20px 20px",
  maxWidth: "640px",
  margin: "0 auto",
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  transform: "scale(1.5)",
  zIndex: 1,
  top: "6px",
  right: "12px",
  color: theme.palette.brand.white,
}));
