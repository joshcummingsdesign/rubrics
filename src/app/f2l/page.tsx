import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "F2L — Rubrics",
  description: "F2L patterns and solutions.",
};

export default function Patterns() {
  return <Content />;
}
