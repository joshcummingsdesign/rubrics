import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "OLL (2-Look) — Rubrics",
  description: `Solving the orientation of the last layer (OLL) on a Rubik's Cube in two "looks" or steps.`,
};

export default function Page() {
  return <Content />;
}
