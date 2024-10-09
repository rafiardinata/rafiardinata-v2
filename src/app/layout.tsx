import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navbar";
// import { Dot, Dribbble, Github, Instagram, Linkedin } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["500", "700", "800"]
});

export const metadata: Metadata = {
  title: "Rafi Ardinata Riskiansyah",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../app/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="../app/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../app/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../app/favicon-16x16.png" />
      </Head>
      <body className={(inter.variable, poppins.variable)}>
        <header className="flex flex-col size-full">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
