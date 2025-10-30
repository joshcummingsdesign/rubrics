import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Rubrics</h1>
      <p>A useful guide for Rubik's Cube speedsolving.</p>
      <ul>
        <li>
          <Link href="/cfop">CFOP</Link>
        </li>
        <li>
          <Link href="/patterns">Patterns</Link>
        </li>
      </ul>
    </>
  );
}
