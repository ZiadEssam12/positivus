"use client";

import { navLinks } from "@/Constants/navLinks";
import Link from "next/link";
import React, { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {" "}
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="relative flex flex-col justify-center items-center w-8 h-8"
        aria-label="Toggle menu"
      >
        <span
          className={`absolute block w-6 h-[0.5px] bg-black transition-all duration-300 ${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`absolute block w-6 h-[0.5px] bg-black transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`absolute block w-6 h-[0.5px] bg-black transition-all duration-300 ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </button>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={toggleMenu}
        ></div>
      )}{" "}
      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-black rotate-45 absolute"></span>
            <span className="block w-6 h-0.5 bg-black -rotate-45 absolute"></span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col px-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hero-text py-3 border-b border-gray-200"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}

          <button className="border-[1px] flex items-center justify-center border-dark mt-6 py-3 px-4">
            Request a quote
          </button>
        </div>
      </nav>
    </div>
  );
};
