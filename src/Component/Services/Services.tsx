import React, { memo } from "react";
import Image from "next/image";
import { ArrowTopRight } from "@/Icons/Icons";
import { services } from "@/Constants/services";

export const Services = memo(() => {
  return (
    <div className="flex flex-col gap-y-20">
      {/* head */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-10 w-fit">
        <h2 className="bg-green rounded-[7px] px-[7px]">Services</h2>
        <p className="text-balance leading-[100%]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* services list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div key={index} className={`card ${service.cardBg}`}>
            <div className="info">
              {" "}
              <div className={`title ${service.titleBg} inline-block`}>
                <h3 className="w-fit">{service.title1}</h3>
                <h3 className="w-fit">{service.title2}</h3>
              </div>
              <div className="learn-more">
                <div className={`icon ${service.iconBg}`}>
                  <span className={service.iconColor}>
                    <ArrowTopRight />
                  </span>
                </div>
                <span className={`text-xl leading-[28px] ${service.textColor}`}>
                  Learn more
                </span>
              </div>
            </div>
            <div className="image">
              <Image
                src={`/${service.image}`}
                alt={service.title1}
                width={210}
                height={166}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Services.displayName = "Services";
