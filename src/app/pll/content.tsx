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
import { Algorithm } from "@/components/Algorithm";
import { YouTubeModal } from "@/components/Modals";

interface Row {
  name: string;
  algorithm: string[];
  notes: string[];
  image: string;
  video: string;
}

const firstRows: Row[] = [
  {
    name: "Y Perm",
    algorithm: ["F (R U' R') U' (R U R') F' (R U R' U' R' F R F')"],
    notes: [
      "F (Insert pair) U' (Take out pair) F' (Sledgehammer)",
      "Trigger: No headlights",
      "Mnemonic: Y are we starting with F?",
    ],
    image: "/images/pll-y-perm.svg",
    video: "https://www.youtube.com/embed/72-JJuRcZ1Y?si=wf0FzJFoq5HClGwD",
  },
  {
    name: "T Perm",
    algorithm: ["(R U R' U' R' F) R2 (U' R') U' (R U R') F'"],
    notes: [
      "(Sledgehammer) R2 (Insert pair) U' (Take out pair) F",
      "Trigger: Headlights",
      "Mnemonic: T looks like a sledgehammer",
    ],
    image: "/images/pll-t-perm.svg",
    video: "https://www.youtube.com/embed/989kUSCYWgk?si=WIRe6uY3n5ECipJo",
  },
];

const secondRows: Row[] = [
  {
    name: "Ua Perm",
    algorithm: ["M2 U M U2 M' U M2"],
    notes: ["Trigger: Solved side in back, Right edge goes opposite"],
    image: "/images/pll-ua-perm.svg",
    video: "https://www.youtube.com/embed/jx-7rfgljvY?si=mLW_amM-g-rXiSRm",
  },
  {
    name: "Ub Perm",
    algorithm: ["M2 U' M U2 M' U' M2"],
    notes: ["Trigger: Solved side in back, Right edge goes adjacent"],
    image: "/images/pll-ub-perm.svg",
    video: "https://www.youtube.com/embed/jx-7rfgljvY?si=mLW_amM-g-rXiSRm",
  },
  {
    name: "H Perm",
    algorithm: ["M2 U' M2 U2 M2 U' M2"],
    notes: ["Trigger: No solved sides, Edges go opposite"],
    image: "/images/pll-h-perm.svg",
    video: "https://www.youtube.com/embed/KW_naqN3LG8?si=5MosPtfzl6YUfnJT",
  },
  {
    name: "Z Perm",
    algorithm: ["(M2 U') (M2 U') M' U2 M2 U2 M'"],
    notes: ["Trigger: No solved sides, Edges go adjacent"],
    image: "/images/pll-z-perm.svg",
    video: "https://www.youtube.com/embed/CJeICPGe6Ew?si=drBUv2JZBfJ4nVdj",
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
      <h1>PLL (2-Look)</h1>
      <p>
        Solving the permutation of the last layer (PLL) on a Rubik&apos;s Cube
        in two &ldquo;looks&rdquo; or steps.
      </p>
      <h2>First Look</h2>
      <p>The first look permutes the corners.</p>
      <TableComponent rows={firstRows} handleClick={handleClick} />
      <h2>Second Look</h2>
      <p>The second look permutes the edges.</p>
      <TableComponent rows={secondRows} handleClick={handleClick} />
      <YouTubeModal src={currentVideo} open={open} onClose={handleClose} />
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
        <TableCell align="center">Video</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell>
            <Algorithm algorithm={row.algorithm} notes={row.notes} />
          </TableCell>
          <TableCell align="center">
            <a href={row.video} onClick={handleClick}>
              <Image src={row.image} width={122} height={122} alt={row.name} />
            </a>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Table = styled(TableBase)({
  "td, th": {
    width: "22%",

    "&:nth-child(2)": {
      width: "56%",
    },

    "&:nth-child(3)": {
      width: "22%",
    },
  },
});
