import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "F2L — Rubrics",
  description:
    "Common Rubik's Cube cases for solving the first two layers (F2L).",
};

export default function Page() {
  return <Content />;
}
