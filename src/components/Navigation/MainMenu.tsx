"use client";
import { Close } from "@mui/icons-material";
import {
  IconButton,
  List as ListBase,
  ListItem,
  ListItemButton,
  ListItemText as ListItemTextBase,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  onClose: () => void;
}

const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "CFOP",
    href: "/cfop",
  },
  {
    name: "Patterns",
    href: "/patterns",
  },
  {
    name: "F2L",
    href: "/f2l",
  },
];

export const MainMenu: React.FC<Props> = ({ onClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const pathname = usePathname();

  return (
    <nav>
      <List>
        {items.map((item, i) => (
          <ListHeaderItem key={item.name} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText
                selected={pathname === item.href}
                primary={item.name}
              />
            </ListItemButton>
            {!isDesktop && i === 0 && (
              <CloseButton onClick={onClose}>
                <Close />
              </CloseButton>
            )}
          </ListHeaderItem>
        ))}
      </List>
    </nav>
  );
};

const List = styled(ListBase)({
  padding: 0,
});

const ListHeaderItem = styled(ListItem)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.brand.white,
}));

const ListItemText = styled(ListItemTextBase, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  ".MuiTypography-root": {
    color: selected ? theme.palette.brand.blue : theme.palette.brand.black,
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  transform: "scale(0.8)",
  zIndex: 1,
  top: "6px",
  right: "8px",
  color: theme.palette.brand.black,
}));
