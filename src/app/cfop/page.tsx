import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "CFOP — Rubrics",
  description:
    "CFOP (Cross, F2L, OLL, PLL) is a method for solving the Rubik's Cube in four steps.",
};

export default function Page() {
  return <Content />;
}
