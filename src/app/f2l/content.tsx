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

const topRows = [
  {
    name: "Pair",
    solution: "Insert / Sledgehammer",
    image: "/images/f2l-pair.png",
    video: "/videos/f2l-pair.mp4",
  },
  {
    name: "Opposite Colors",
    solution: "3-Move Insert",
    image: "/images/f2l-opposite-colors.png",
    video: "/videos/f2l-opposite-colors.mp4",
  },
  {
    name: "Same Colors",
    solution: "Behind Slot and Pair",
    image: "/images/f2l-same-colors.png",
    video: "/videos/f2l-same-colors.mp4",
  },
  {
    name: "White Up",
    solution: "Match Edge, R/L Away from Top Color",
    image: "/images/f2l-white-up.png",
    video: "/videos/f2l-white-up.mp4",
  },
  {
    name: "Mismatch Stack",
    solution: "Reverse Sexy x2",
    image: "/images/f2l-mismatch-stack.png",
    video: "/videos/f2l-mismatch-stack.mp4",
  },
  {
    name: "Mismatch Same",
    solution: "Sexy Move, U2, Take Out Corner",
    image: "/images/f2l-mismatch-same.png",
    video: "/videos/f2l-mismatch-same.mp4",
  },
  {
    name: "Mismatch Pair",
    solution: "Anti-Sexy x2",
    image: "/images/f2l-mismatch-pair.png",
    video: "/videos/f2l-mismatch-pair.mp4",
  },
  {
    name: "White Up Opposite",
    solution: "Lift Slot in Direction of White, U2",
    image: "/images/f2l-white-up-opposite.png",
    video: "/videos/f2l-white-up-opposite.mp4",
  },
  {
    name: "White Up Same",
    solution: "Put Corner Into Slot, Take Out",
    image: "/images/f2l-white-up-same.png",
    video: "/videos/f2l-white-up-same.mp4",
  },
];

const bottomRows = [
  {
    name: "Corner Solved",
    solution: "U Away from Top Color, Sledgehammer",
    image: "/images/f2l-corner-solved.png",
    video: "/videos/f2l-corner-solved.mp4",
  },
];

export default function F2L() {
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
      <h1>F2L</h1>
      <p>Useful cases for solving F2L (First Two Layers).</p>
      <h2>Top Layer</h2>
      <TableComponent rows={topRows} handleClick={handleClick} />
      <h2>Bottom Layer</h2>
      <TableComponent rows={bottomRows} handleClick={handleClick} />
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <CloseButton onClick={handleClose}>
            <Close />
          </CloseButton>
          {currentVideo && (
            <video
              src={currentVideo}
              width={600}
              height={450}
              controls
              playsInline
              autoPlay
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const TableComponent = ({
  rows,
  handleClick,
}: {
  rows: typeof topRows;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Solution</TableCell>
        <TableCell>Video</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.solution}</TableCell>
          <TableCell>
            <a href={row.video} onClick={handleClick}>
              <Image src={row.image} width={168} height={126} alt={row.name} />
            </a>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Table = styled(TableBase)({
  "td, th": {
    width: "26.67%",

    "&:nth-child(2)": {
      width: "40%",
    },

    "&:nth-child(3)": {
      width: "33.33%",
    },
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
