import Link from "next/link";

const pages = [
  { name: "CFOP", href: "/cfop" },
  { name: "Patterns", href: "/patterns" },
  { name: "F2L", href: "/f2l" },
  { name: "OLL (2-Look)", href: "/oll" },
  { name: "PLL (2-Look)", href: "/pll" },
];

export default function Home() {
  return (
    <>
      <h1>Rubrics</h1>
      <p>A useful guide for Rubik's Cube speedsolving.</p>
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
