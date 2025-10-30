"use client";
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useMediaQuery, useTheme } from "@mui/material";
import { MainMenu } from "./MainMenu";
import { Header } from "./Header";

export const Navigation = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [sidebarOpen, setSidebarOpen] = useState(isDesktop);

  const toggleSidebar = (open: boolean) => () => {
    setSidebarOpen(open);
  };

  useEffect(() => {
    setSidebarOpen(isDesktop);
  }, [isDesktop]);

  return (
    <>
      <Header onMenuClick={toggleSidebar(true)} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar(false)}>
        <MainMenu onClose={toggleSidebar(false)} />
      </Sidebar>
    </>
  );
};
