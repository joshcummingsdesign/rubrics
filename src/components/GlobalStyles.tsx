"use client";
import { GlobalStyles as GlobalStylesBase } from "@mui/material";
import { colors, typography } from "@/assets/styles";

export const GlobalStyles = () => (
  <GlobalStylesBase
    styles={{
      h1: {
        ...typography.h1,
      },
      h2: {
        ...typography.h2,
      },
      h3: {
        ...typography.h3,
      },
      h4: {
        ...typography.h4,
      },
      h5: {
        ...typography.h5,
      },
      h6: {
        ...typography.h6,
      },
      "img:not(.logo)": {
        width: "100%",
        height: "auto",
      },
      video: {
        width: "100%",
      },
      a: {
        textDecoration: "none",
        color: colors.blue,

        "&:hover": {
          textDecoration: "underline",
        },
      },
    }}
  />
);
