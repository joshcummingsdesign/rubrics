"use client";
import {
  IconButton,
  Modal,
  styled,
  Table as TableBase,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";

const rows = [
  {
    name: "Sexy Move",
    notation: "R U R' U'",
    image: "/images/sexy-move.png",
    video: "/videos/sexy-move.mp4",
  },
  {
    name: "Reverse Sexy",
    notation: "U R U' R'",
    image: "/images/reverse-sexy.png",
    video: "/videos/reverse-sexy.mp4",
  },
  {
    name: "Anti Sexy",
    notation: "R U' R' U",
    image: "/images/anti-sexy.png",
    video: "/videos/anti-sexy.mp4",
  },
  {
    name: "Sledgehammer",
    notation: "R' F R F'",
    image: "/images/sledgehammer.png",
    video: "/videos/sledgehammer.mp4",
  },
];

export default function Patterns() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCurrentVideo(e.currentTarget.href);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentVideo(null);
  };

  return (
    <>
      <h1>Patterns</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Notation</TableCell>
            <TableCell>Video</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.notation}</TableCell>
              <TableCell>
                <a href={row.video} onClick={handleClick}>
                  <Image
                    src={row.image}
                    height={480}
                    width={640}
                    alt={row.name}
                  />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <CloseButton onClick={handleClose}>
            <Close />
          </CloseButton>
          {currentVideo && (
            <video src={currentVideo} controls playsInline autoPlay />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const Table = styled(TableBase)({
  "td, th": {
    width: "33.33%",
    textAlign: "left",
  },
});

const ModalContent = styled("div")({
  padding: "50px 20px 20px",
  maxWidth: "640px",
  margin: "0 auto",

  video: {
    display: "block",
  },
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  transform: "scale(1.5)",
  zIndex: 1,
  top: "6px",
  right: "12px",
  color: theme.palette.brand.white,
}));
