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
import { YouTubeModal } from "@/components/Modals";

interface Row {
  name: string;
  description: string;
  image: string;
  ytLink: string;
}

const rows: Row[] = [
  {
    name: "Cross",
    description:
      "Solve the white cross on the bottom of the cube, while keeping track of your first F2L pair.",
    image: "/images/cross.png",
    ytLink: "https://www.youtube.com/embed/IWXpkfwimo0?si=i9jxLLpy253YK2gE",
  },
  {
    name: "F2L",
    description:
      "Solve the first two layers (F2L) by creating pairs and inserting them into the back slots for better visibility.",
    image: "/images/sexy-move.png",
    ytLink: "https://www.youtube.com/embed/BtDLfh0XZkE?si=tsIwMYMblpGTrxs7",
  },
  {
    name: "OLL",
    description:
      "Solve the orientation of the last layer (OLL), which makes all of the pieces on the top face yellow.",
    image: "/images/oll.png",
    ytLink: "https://www.youtube.com/embed/7b-OSG05lh8?si=6OZg9dhGCgzrN2-R",
  },
  {
    name: "PLL",
    description:
      "Solve the permutation of the last layer (PLL), which moves the last layer pieces into the right slots.",
    image: "/images/pll.png",
    ytLink: "https://www.youtube.com/embed/f_Yor-ydZjs?si=o7I7O9JUntY94EmN",
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
      <YouTubeModal src={currentVideo} open={open} onClose={handleClose} />
    </>
  );
}

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
