import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Patterns — Rubrics",
  description: "Common Rubik's Cube patterns and triggers.",
};

export default function Page() {
  return <Content />;
}
