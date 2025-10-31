"use client";
import { CircularProgress, styled } from "@mui/material";
import { Modal } from "./Modal";

interface Props {
  src: string | null;
  open: boolean;
  onClose: () => void;
}

export const YouTubeModal: React.FC<Props> = ({ src, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <VideoContainer>
        <Loading />
        {src && (
          <iframe
            width="560"
            height="315"
            src={`${src}?rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </VideoContainer>
    </Modal>
  );
};

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

const Loading = styled(CircularProgress)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: theme.palette.brand.white,
}));
