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
import { Algorithm } from "@/components/Algorithm";

interface Row {
  name: string;
  algorithm: string[];
  notes: string[];
  image: string;
  video: string;
}

const firstLookRows: Row[] = [
  {
    name: "Line",
    algorithm: ["F (Sexy Move) F'"],
    notes: [],
    image: "/images/oll-line.png",
    video: "/videos/oll-line.mp4",
  },
  {
    name: "R",
    algorithm: ["f (Sexy Move) f'"],
    notes: [],
    image: "/images/oll-r.png",
    video: "/videos/oll-r.mp4",
  },
  {
    name: "Dot",
    algorithm: ["F (Sexy Move) F'", "f (Sexy Move) f'"],
    notes: [],
    image: "/images/oll-dot.png",
    video: "/videos/oll-dot.mp4",
  },
];

const secondLookRows: Row[] = [
  {
    name: "Sune",
    algorithm: ["(R U R') U (R U2 R')"],
    notes: ["(Take out pair) U (Insert with U2)"],
    image: "/images/oll-sune.png",
    video: "/videos/oll-sune.mp4",
  },
  {
    name: "Anti-Sune",
    algorithm: ["(R U2 R') U' (R U' R')"],
    notes: ["(Take out pair with U2) U' (Insert)"],
    image: "/images/oll-anti-sune.png",
    video: "/videos/oll-anti-sune.mp4",
  },
  {
    name: "H",
    algorithm: ["(R U2 R') U' (R U R' U') (R U' R')"],
    notes: ["(Take out pair with U2) U' (Sexy Move) (Insert)"],
    image: "/images/oll-h.png",
    video: "/videos/oll-h.mp4",
  },
  {
    name: "Pi",
    algorithm: ["(L' U2) (L2 U) (L2' U L2 U2 L')"],
    notes: ["(Take out pair with U2) (Take out back pair) (Reinsert pairs)"],
    image: "/images/oll-pi.png",
    video: "/videos/oll-pi.mp4",
  },
  {
    name: "U",
    algorithm: ["(R2 D) (R' U2) (R D') (R' U2 R')"],
    notes: ["(Setup move) (Take out back pair) (Undo setup move) (Insert)"],
    image: "/images/oll-u.png",
    video: "/videos/oll-u.mp4",
  },
  {
    name: "Hammerhead",
    algorithm: ["(r U R' U') (r' F R F')"],
    notes: ["(Fat Sexy Move) (Fat Sledgehammer)"],
    image: "/images/oll-hammerhead.png",
    video: "/videos/oll-hammerhead.mp4",
  },
  {
    name: "Bowtie",
    algorithm: ["F' (r U R' U') (r' F R)"],
    notes: ["F' (Fat Sexy Move) (Fat Sledgehammer)"],
    image: "/images/oll-bowtie.png",
    video: "/videos/oll-bowtie.mp4",
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
      <h1>OLL (2-Look)</h1>
      <p>
        Solving the orientation of the last layer (OLL) on a Rubik&apos;s Cube
        in two "looks" or steps.
      </p>
      <h2>First Look</h2>
      <p>The first look orients the yellow cross.</p>
      <TableComponent rows={firstLookRows} handleClick={handleClick} />
      <h2>Second Look</h2>
      <p>The second look orients the last layer.</p>
      <TableComponent rows={secondLookRows} handleClick={handleClick} />
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
        <TableCell>Algorithm</TableCell>
        <TableCell>Video</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell>
            <Algorithm algorithm={row.algorithm} notes={row.notes} />
          </TableCell>
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
