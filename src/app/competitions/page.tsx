import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Competitions — Rubrics",
  description: "Competitions I've participated in.",
};

export default function Page() {
  return <Content />;
}
