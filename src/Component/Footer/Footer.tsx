import React from "react";
import { Logo } from "../Logo";
import { navLinks } from "@/Constants/navLinks";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "@/Icons/Icons";

export const Footer = () => {
  return (
    <footer className="rounded-t-[45px] pt-[55px] px-4 sm:px-8 lg:px-[60px] pb-[20px] lg:pb-[50px] bg-dark flex flex-col gap-y-[20px] lg:gap-y-[50px] text-white">
      <div className="flex flex-col gap-[30px] lg:gap-[66px]">
        {/* head */}
        <div className="h-auto lg:h-[30px] flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          <div className="text-white w-[180px] order-1 lg:order-none">
            <Logo />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10 order-3 lg:order-none">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-lg text-white underline underline-offset-3"
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
          <div className="flex flex-col items-start gap-[27px] w-full lg:w-auto">
            <div>
              <h4 className="px-[7px] rounded-[7px] bg-green !text-black">
                Contact us:
              </h4>
            </div>

            <div className="flex flex-col gap-5">
              <p className="leading-[100%]">Email: info@positivus.com</p>

              <p className="leading-[100%]">Phone: 555-567-8901</p>

              <span className="leading-[100%]">
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </span>
            </div>
          </div>
          <div className="bg-[#292A32] py-[58px] px-10 rounded-[14px] flex flex-col sm:flex-row justify-center items-center gap-5 w-full lg:w-auto">
            <input
              type="text"
              className="py-[22px] px-[35px] placeholder:text-white placeholder:text-lg border-[1px] border-white rounded-[14px] w-full sm:w-auto"
              placeholder="Email"
            />

            <button className="btn-primary !text-black !bg-green w-full  sm:w-auto">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="text-lg leading-[28px] border-t-[1px] border-white pt-[20px] lg:pt-[50px] flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p className="underline underline-offset-1">Privacy Policy</p>
      </div>
    </footer>
  );
};
