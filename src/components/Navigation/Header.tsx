"use client";
import { Menu } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onMenuClick: () => void;
}

export const HEADER_HEIGHT = 52;

export const Header: React.FC<Props> = ({ onMenuClick }) => (
  <Wrapper>
    <MenuButton onClick={onMenuClick} aria-label="Menu">
      <Menu />
    </MenuButton>
    <Link href="/">
      <Image
        className="logo"
        src="/images/cube.svg"
        alt="Rubrics"
        width={HEADER_HEIGHT - 12}
        height={HEADER_HEIGHT - 12}
      />
    </Link>
  </Wrapper>
);

const Wrapper = styled("header")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "6px 12px",
  height: HEADER_HEIGHT,
  backgroundColor: theme.palette.brand.white,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.brand.black,
  height: `${HEADER_HEIGHT - 12}px`,
  width: `${HEADER_HEIGHT - 12}px`,

  [theme.breakpoints.up("md")]: {
    visibility: "hidden",
  },
}));
