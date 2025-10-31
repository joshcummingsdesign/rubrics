import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Cubes — Rubrics",
  description: "The cubes I am currently solving with.",
};

export default function Cubes() {
  return <Content />;
}
