import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "F2L — Rubrics",
  description:
    "Common cases for solving the first two layers (F2L) on a Rubik's Cube.",
};

export default function Page() {
  return <Content />;
}
