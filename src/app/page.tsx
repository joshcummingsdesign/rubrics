import Link from "next/link";

const pages = [
  { name: "CFOP", href: "/cfop" },
  { name: "Patterns", href: "/patterns" },
  { name: "F2L", href: "/f2l" },
  { name: "OLL (2-Look)", href: "/oll" },
  { name: "PLL (2-Look)", href: "/pll" },
];

const misc = [
  { name: "Cubes", href: "/cubes" },
  { name: "Competitions", href: "/competitions" },
];

export default function Home() {
  return (
    <>
      <h1>Rubrics</h1>
      <p>
        Hi, 👋 I&apos;m Josh. Welcome to Rubrics, a practical guide to
        Rubik&apos;s Cube speedsolving. I&apos;m a software engineer and
        Rubik&apos;s Cube nerd 🤓. As a beginner, I found that there was so much
        information out there that it was hard to sort through it all, figure
        out what really worked for me, and actually retain and apply it. So I
        decided to create this guide. I hope you find it helpful. Happy cubing!
        🎉
      </p>
      <h2>Get Started</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <h2>About Me</h2>
      <ul>
        {misc.map((page) => (
          <li key={page.name}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
