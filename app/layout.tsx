import type { Metadata } from "next";
import { Urbanist} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/navbar"
import {Header} from "@/components/header"


const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio made by Sebastian Beller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <Header/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
