"use client";
import { CircularProgress, styled } from "@mui/material";
import { Modal } from "./Modal";

interface Props {
  src: string | null;
  open: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<Props> = ({ src, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <VideoContainer>
        <Loading />
        {src && (
          <video
            src={src}
            width={600}
            height={450}
            controls
            playsInline
            autoPlay
          />
        )}
      </VideoContainer>
    </Modal>
  );
};

const VideoContainer = styled("div")({
  position: "relative",
  width: "100%",
  paddingBottom: "75%",
  height: 0,

  video: {
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
});

const Loading = styled(CircularProgress)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: theme.palette.brand.white,
}));
