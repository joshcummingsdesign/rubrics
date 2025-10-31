"use client";
import { useState } from "react";
import Image from "next/image";
import {
  styled,
  Table as TableBase,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { VideoModal } from "@/components/Modals/VideoModal";

interface Row {
  name: string;
  algorithm: string;
  image: string;
  video: string;
}

const rows: Row[] = [
  {
    name: "Sexy Move",
    algorithm: "R U R' U'",
    image: "/images/sexy-move.png",
    video: "/videos/sexy-move.mp4",
  },
  {
    name: "Reverse Sexy",
    algorithm: "U R U' R'",
    image: "/images/reverse-sexy.png",
    video: "/videos/reverse-sexy.mp4",
  },
  {
    name: "Anti-Sexy",
    algorithm: "R U' R' U",
    image: "/images/anti-sexy.png",
    video: "/videos/anti-sexy.mp4",
  },
  {
    name: "Sledgehammer",
    algorithm: "R' F R F'",
    image: "/images/sledgehammer.png",
    video: "/videos/sledgehammer.mp4",
  },
];

export default function Content() {
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
      <p>Common Rubik&apos;s Cube patterns and triggers.</p>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Algorithm</TableCell>
            <TableCell align="center">Video</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.algorithm}</TableCell>
              <TableCell align="center">
                <a href={row.video} onClick={handleClick}>
                  <Image
                    src={row.image}
                    width={213}
                    height={160}
                    alt={row.name}
                  />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <VideoModal src={currentVideo} open={open} onClose={handleClose} />
    </>
  );
}

const Table = styled(TableBase)({
  "td, th": {
    width: "30%",

    "&:nth-child(2)": {
      width: "35%",
    },

    "&:nth-child(3)": {
      width: "35%",
    },
  },
});
