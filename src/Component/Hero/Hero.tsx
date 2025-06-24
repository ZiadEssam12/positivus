import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* content */}
        <div className="flex flex-col gap-[35px] flex-1 text-balance order-2 lg:order-1">
          <h1 className="text-center lg:text-left">
            Navigating the digital landscape for success
          </h1>
          <p className="text text-center lg:text-left text-balance">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, <br /> and content creation.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="btn-primary">Book a consultation</button>
          </div>
        </div>

        {/* illustration */}
        <div className="w-full h-64 sm:h-80 md:h-96 lg:flex-1 lg:w-[600px] lg:h-[515px] relative block order-1 lg:order-2 lg:flex-shrink-0">
          <Image
            src="./illustration1.svg"
            alt="hero illustration"
            fill
            loading="eager"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
