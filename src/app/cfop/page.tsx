import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "CFOP — Rubrics",
  description:
    "The CFOP method (Cross, F2L, OLL, PLL) for solving the Rubik's Cube.",
};

export default function Patterns() {
  return <Content />;
}
