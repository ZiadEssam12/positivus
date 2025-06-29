import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/Component/Header/Header";
import { Footer } from "@/Component/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description:
    "Positivus is a digital marketing agency that helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased px-[10px] md:px-[30px] lg:px-[100px] pt-5 lg:pt-[60px] flex flex-col gap-[20px] lg:gap-[70px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
