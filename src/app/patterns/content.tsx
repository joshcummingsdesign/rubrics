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
  notation: string;
  image: string;
  video: string;
}

const rows: Row[] = [
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
    name: "Anti-Sexy",
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
                    width={201}
                    height={151}
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
    width: "33.33%",
  },
});
