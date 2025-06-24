import { navLinks } from "@/Constants/navLinks";
import Link from "next/link";
import React from "react";
import { Logo } from "../Logo";
import { MobileNavWrapper } from "./MobileNavWrapper";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link
          href="/"
          className="w-[120px] h-[20px] lg:w-[220px] lg:h-[36px] relative block text-black"
        >
          <Logo />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center gap-10">
        {navLinks.map((link, index) => (
          <Link className="text" key={index} href={link.link}>
            {link.name}
          </Link>
        ))}

        <button className="border-[1px] border-dark">Request a quote</button>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavWrapper />
    </header>
  );
};
