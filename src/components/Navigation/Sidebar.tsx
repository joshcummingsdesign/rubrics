"use client";
import { useEffect, useRef, useState } from "react";
import {
  ClickAwayListener,
  Drawer as DrawerBase,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  className?: string;
  children: React.ReactNode;
  open: boolean;
  closedOnDesktop?: boolean;
  onClose: () => void;
}

export const SIDEBAR_WIDTH = 250;
export const SIDEBAR_WIDTH_LG = 300;

export const Sidebar: React.FC<Props> = ({
  className,
  children,
  open,
  onClose,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isClosable, setIsClosable] = useState(false);

  useEffect(() => {
    // Clear any running timeouts first
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isDesktop && open) {
      // Wait a bit before allowing close
      timeoutRef.current = setTimeout(() => {
        setIsClosable(true);
      }, 100);
    } else {
      // Defer setState to avoid synchronous state change
      Promise.resolve().then(() => setIsClosable(false));
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isDesktop, open]);

  return (
    <ClickAwayListener
      onClickAway={() => !isDesktop && isClosable && onClose()}
    >
      <Drawer
        className={className}
        variant={isDesktop ? "permanent" : "persistent"}
        anchor="left"
        open={open}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </ClickAwayListener>
  );
};

const Drawer = styled(DrawerBase)(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,

  [theme.breakpoints.up("lg")]: {
    width: SIDEBAR_WIDTH_LG,
  },

  "& .MuiDrawer-paper": {
    width: SIDEBAR_WIDTH,
    boxSizing: "border-box",
    borderRight: `1px solid ${theme.palette.brand.black}`,

    [theme.breakpoints.up("lg")]: {
      width: SIDEBAR_WIDTH_LG,
    },
  },
}));

const DrawerContent = styled("div")({
  position: "relative",
  minHeight: "100vh",
});
