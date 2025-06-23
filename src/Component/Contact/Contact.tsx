import Image from "next/image";
import React from "react";

export const Contact = () => {
  return (
    <div className="h-auto lg:h-[347px] rounded-[25px] sm:rounded-[35px] lg:rounded-[45px] px-4 sm:px-8 lg:px-[60px] gap-6 sm:gap-12 lg:gap-[100px] bg-grey flex flex-col lg:flex-row justify-between items-center overflow-visible py-8 lg:py-0">
      {/* left */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 lg:gap-[26px] w-full lg:h-full">
        <h3>Let&apos;s make things happen</h3>
        <p className="max-w-md lg:max-w-none">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <button className="btn-primary w-full sm:w-auto">
          Get your free proposal
        </button>
      </div>

      {/* right */}
      <div className="relative flex-1 w-full lg:w-auto order-first lg:order-last">
        <Image
          src="./Illustration.svg"
          alt="Contact"
          width={0}
          height={0}
          className="object-contain w-full h-auto max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[359px] lg:max-h-[359px] mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};
