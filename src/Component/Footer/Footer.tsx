import Image from "next/image";
import React from "react";
import { Logo } from "../Logo";
import { navLinks } from "@/Constants/navLinks";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "@/Icons/Icons";

export const Footer = () => {
  return (
    <footer className="rounded-t-[45px] pt-[55px] px-4 sm:px-8 lg:px-[60px] pb-[50px] bg-dark flex flex-col justify-between text-white">
      {/* head */}
      <div className="h-auto lg:h-[29px] flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        <div className="text-white w-[180px] order-1 lg:order-none">
          <Logo />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10 order-3 lg:order-none">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hero-text text-white underline underline-offset-3"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 order-2 lg:order-none">
          <Link
            href="https://www.linkedin.com/company/positivus"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.facebook.com/positivus"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook />
          </Link>
          <Link
            href="https://twitter.com/positivus"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter />
          </Link>
        </div>
      </div>

      {/* middle */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-[66px] mb-[50px] gap-8 lg:gap-0">
        <div className="flex flex-col items-start gap-[27px] w-full lg:w-auto">
          <h4 className="px-[7px] rounded-[7px] bg-green">Contact us:</h4>

          <p>Email: info@positivus.com</p>

          <p>Phone: 555-567-8901</p>

          <p>
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="bg-[#292A32] py-8 sm:py-[58px] px-4 sm:px-10 rounded-[14px] flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full lg:w-auto">
          <input
            type="text"
            className="py-[22px] px-[35px] placeholder:text-white placeholder:text-lg border-[1px] border-white rounded-[14px] w-full sm:w-auto"
            placeholder="Email"
          />

          <button className="btn-primary !text-black !bg-green w-full sm:w-auto">
            Subscribe to news
          </button>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t-[1px] border-white pt-[50px] flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p className="underline underline-offset-2">Privacy Policy</p>
      </div>
    </footer>
  );
};
