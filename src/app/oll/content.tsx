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
  Tooltip as TooltipBase,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { Fragment, useState } from "react";

interface Row {
  name: string;
  algorithm: string[];
  algNotes: string[];
  image: string;
  video: string;
}

const firstRows: Row[] = [
  {
    name: "Line",
    algorithm: ["F (Sexy Move) F'"],
    algNotes: [],
    image: "/images/oll-line.png",
    video: "/videos/oll-line.mp4",
  },
  {
    name: "R",
    algorithm: ["f (Sexy Move) f'"],
    algNotes: [],
    image: "/images/oll-r.png",
    video: "/videos/oll-r.mp4",
  },
  {
    name: "Dot",
    algorithm: ["F (Sexy Move) F'", "f (Sexy Move) f'"],
    algNotes: [],
    image: "/images/oll-dot.png",
    video: "/videos/oll-dot.mp4",
  },
];

const secondRows: Row[] = [
  {
    name: "Sune",
    algorithm: ["(R U R') U (R U2 R')"],
    algNotes: ["(Take out pair) U (Insert with U2)"],
    image: "/images/oll-sune.png",
    video: "/videos/oll-sune.mp4",
  },
  {
    name: "Anti-Sune",
    algorithm: ["(R U2 R') U' (R U' R')"],
    algNotes: ["(Take out pair with U2) U' (Insert)"],
    image: "/images/oll-anti-sune.png",
    video: "/videos/oll-anti-sune.mp4",
  },
  {
    name: "H",
    algorithm: ["(R U2 R') U' (R U R' U') (R U' R')"],
    algNotes: ["(Take out pair with U2) U' (Sexy Move) (Insert)"],
    image: "/images/oll-h.png",
    video: "/videos/oll-h.mp4",
  },
  {
    name: "Pi",
    algorithm: ["(L' U2) (L2 U) (L2' U L2 U2 L')"],
    algNotes: ["(Take out pair with U2) (Take out back pair) (Reinsert pairs)"],
    image: "/images/oll-pi.png",
    video: "/videos/oll-pi.mp4",
  },
  {
    name: "U",
    algorithm: ["(R2 D) (R' U2) (R D') (R' U2 R')"],
    algNotes: ["(Setup move) (Take out back pair) (Undo setup move) (Insert)"],
    image: "/images/oll-u.png",
    video: "/videos/oll-u.mp4",
  },
  {
    name: "Hammerhead",
    algorithm: ["(r U R' U') (r' F R F')"],
    algNotes: ["(Fat Sexy Move) (Fat Sledgehammer)"],
    image: "/images/oll-hammerhead.png",
    video: "/videos/oll-hammerhead.mp4",
  },
  {
    name: "Bowtie",
    algorithm: ["F' (r U R' U') (r' F R)"],
    algNotes: ["F' (Fat Sexy Move) (Fat Sledgehammer)"],
    image: "/images/oll-bowtie.png",
    video: "/videos/oll-bowtie.mp4",
  },
];

export default function OLL() {
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
      <p>Orientation of the Last Layer in two steps.</p>
      <h2>First Look</h2>
      <p>The first look orients the yellow cross.</p>
      <TableComponent rows={firstRows} handleClick={handleClick} />
      <h2>Second Look</h2>
      <p>The second look orients the last layer.</p>
      <TableComponent rows={secondRows} handleClick={handleClick} />
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
            <AlgNote algNotes={row.algNotes} algorithm={row.algorithm} />
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

const AlgNote = ({
  algNotes,
  algorithm,
}: {
  algNotes: string[];
  algorithm: string[];
}) => {
  return (
    <>
      {algNotes.length > 0 ? (
        <Tooltip
          title={
            <span>
              {algNotes.map((note, i) => (
                <span key={note}>
                  {note}
                  {i !== algNotes.length - 1 && <br />}
                </span>
              ))}
            </span>
          }
        >
          <div>
            <Algorithm algorithm={algorithm} />
          </div>
        </Tooltip>
      ) : (
        <Algorithm algorithm={algorithm} />
      )}
    </>
  );
};

const Algorithm = ({ algorithm }: { algorithm: string[] }) => {
  return (
    <>
      {algorithm.map((part, i) => (
        <Fragment key={part}>
          {part}
          {i !== algorithm.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
};

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

const Tooltip = styled(TooltipBase)({
  cursor: "help",
});
