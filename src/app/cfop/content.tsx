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
    name: "Cross",
    description:
      "Plan out the white cross on the bottom of the cube. Keep track of your first F2L pair.",
    image: "/images/cross.png",
    ytLink: "https://www.youtube.com/embed/IWXpkfwimo0?si=i9jxLLpy253YK2gE",
  },
  {
    name: "F2L",
    description:
      "Solve F2L (First Two Layers) by keeping pairs in the top layer and solving pairs in the back slots first. This gives you better visibility as you solve F2L.",
    image: "/images/sexy-move.png",
    ytLink: "https://www.youtube.com/embed/BtDLfh0XZkE?si=tsIwMYMblpGTrxs7",
  },
  {
    name: "OLL (2-Look)",
    description:
      "Orientation of the Last Layer, i.e. making the top face all yellow. 2-Look, means that you use two steps to orient the last layer.",
    image: "/images/oll.png",
    ytLink: "https://www.youtube.com/embed/7b-OSG05lh8?si=6OZg9dhGCgzrN2-R",
  },
  {
    name: "PLL (2-Look)",
    description:
      "Permutation of the Last Layer, i.e. moving the last layer peices into the right slots. 2-Look, means that you use two steps to permute the last layer.",
    image: "/images/pll.png",
    ytLink: "https://www.youtube.com/embed/f_Yor-ydZjs?si=o7I7O9JUntY94EmN",
  },
];

export default function CFOP() {
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
      <h1>CFOP</h1>
      <p>
        CFOP (Cross, F2L, OLL, PLL) is a method for solving the Rubik&apos;s
        Cube in four steps.
      </p>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Video</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <a href={row.ytLink} onClick={handleClick}>
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
            <VideoContainer>
              <iframe
                width="560"
                height="315"
                src={`${currentVideo}?rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </VideoContainer>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const Table = styled(TableBase)({
  "td, th": {
    width: "26.67%",
    textAlign: "left",

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

const VideoContainer = styled("div")({
  position: "relative",
  width: "100%",
  paddingBottom: "56.25%",
  height: 0,

  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
});
