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
    name: "Y Perm",
    algorithm: ["F (R U' R') U' (R U R') F' (R U R' U' R' F R F')"],
    algNotes: [
      "F (Insert pair) U' (Take out pair) F' (Sledgehammer)",
      "Trigger: No headlights",
      "Mnemonic: Y are we starting with F?",
    ],
    image: "/images/pll-y-perm.png",
    video: "https://www.youtube.com/embed/72-JJuRcZ1Y?si=wf0FzJFoq5HClGwD",
  },
  {
    name: "T Perm",
    algorithm: ["(R U R' U' R' F) R2 (U' R') U' (R U R') F'"],
    algNotes: [
      "(Sledgehammer) R2 (Insert pair) U' (Take out pair) F",
      "Trigger: Headlights",
      "Mnemonic: T looks like a sledgehammer",
    ],
    image: "/images/pll-t-perm.png",
    video: "https://www.youtube.com/embed/989kUSCYWgk?si=WIRe6uY3n5ECipJo",
  },
];

const secondRows: Row[] = [
  {
    name: "Ua Perm",
    algorithm: ["M2 U M U2 M' U M2"],
    algNotes: ["Trigger: One solved side, Opposite edges"],
    image: "/images/pll-ua-perm.png",
    video: "https://www.youtube.com/embed/jx-7rfgljvY?si=mLW_amM-g-rXiSRm",
  },
  {
    name: "Ub Perm",
    algorithm: ["M2 U' M U2 M' U' M2"],
    algNotes: ["Trigger: One solved side, Adjacent edges"],
    image: "/images/pll-ub-perm.png",
    video: "https://www.youtube.com/embed/jx-7rfgljvY?si=mLW_amM-g-rXiSRm",
  },
  {
    name: "H Perm",
    algorithm: ["M2 U' M2 U2 M2 U' M2"],
    algNotes: ["Trigger: No solved sides, Opposite edges"],
    image: "/images/pll-h-perm.png",
    video: "https://www.youtube.com/embed/KW_naqN3LG8?si=5MosPtfzl6YUfnJT",
  },
  {
    name: "Z Perm",
    algorithm: ["(M2 U') (M2 U') M' U2 M2 U2 M'"],
    algNotes: ["Trigger: No solved sides, Adjacent edges"],
    image: "/images/pll-z-perm.png",
    video: "https://www.youtube.com/embed/CJeICPGe6Ew?si=drBUv2JZBfJ4nVdj",
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
      <h1>PLL (2-Look)</h1>
      <p>Permutation of the Last Layer in two steps.</p>
      <h2>First Look</h2>
      <p>The first look permutes the corners.</p>
      <TableComponent rows={firstRows} handleClick={handleClick} />
      <h2>Second Look</h2>
      <p>The second look permutes the edges.</p>
      <TableComponent rows={secondRows} handleClick={handleClick} />
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
              <Image src={row.image} width={100} height={100} alt={row.name} />
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
    width: "25%",
    textAlign: "left",

    "&:nth-child(2)": {
      width: "53%",
    },

    "&:nth-child(3)": {
      width: "22%",
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
