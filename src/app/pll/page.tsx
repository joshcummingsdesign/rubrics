import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "PLL (2-Look) — Rubrics",
  description: `Solving the permutation of the last layer (PLL) on a Rubik's Cube in two "looks" or steps.`,
};

export default function Page() {
  return <Content />;
}
