import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import "@/assets/styles/global.scss";
import { Main } from "@/components/Main";

interface Props {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Rubrics",
  description: "A practical guide to Rubik's Cube speedsolving.",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const fontVariables = `${roboto.variable}`;

export default function RootLayout({ children }: Props) {
  return (
    <Providers>
      <html lang="en" className={fontVariables}>
        <body>
          <Navigation />
          <Main>{children}</Main>
        </body>
      </html>
    </Providers>
  );
}
