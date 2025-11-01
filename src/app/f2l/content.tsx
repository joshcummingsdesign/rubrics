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
  solution: string;
  image: string;
  video: string;
}

const topLayerRows: Row[] = [
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

const bottomLayerRows = [
  {
    name: "Corner Solved",
    solution: "U Away from Top Color, Sledgehammer",
    image: "/images/f2l-corner-solved.png",
    video: "/videos/f2l-corner-solved.mp4",
  },
  {
    name: "Corner Opposite",
    solution: "Match Edge, Take Out Corner",
    image: "/images/f2l-corner-opposite.png",
    video: "/videos/f2l-corner-opposite.mp4",
  },
  {
    name: "Corner Same",
    solution: "U Towards White, Sledgehammer",
    image: "/images/f2l-corner-same.png",
    video: "/videos/f2l-corner-same.mp4",
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
      <h1>F2L</h1>
      <p>
        Common cases for solving the first two layers (F2L) on a Rubik&apos;s
        Cube.
      </p>
      <h2>Top Layer</h2>
      <TableComponent rows={topLayerRows} handleClick={handleClick} />
      <h2>Bottom Layer</h2>
      <TableComponent rows={bottomLayerRows} handleClick={handleClick} />
      <VideoModal src={currentVideo} open={open} onClose={handleClose} />
    </>
  );
}

const TableComponent = ({
  rows,
  handleClick,
}: {
  rows: Row[];
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Solution</TableCell>
        <TableCell align="center">Video</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.solution}</TableCell>
          <TableCell align="center">
            <a href={row.video} onClick={handleClick}>
              <Image src={row.image} width={213} height={160} alt={row.name} />
            </a>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Table = styled(TableBase)({
  "td, th": {
    width: "25%",

    "&:nth-child(2)": {
      width: "40%",
    },

    "&:nth-child(3)": {
      width: "35%",
    },
  },
});
