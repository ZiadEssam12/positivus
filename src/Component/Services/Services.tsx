import React from "react";
import Image from "next/image";
import { ArrowTopRight } from "@/Icons/Icons";

const services = [
  {
    cardBg: "bg-grey",

    title1: "Search engine",
    title2: "optimization",
    titleBg: "bg-green",

    iconColor: "text-green",
    iconBg: "bg-black",

    image: "tokyo-magnifier-web-search-with-elements 2.svg",
    textColor: "text-black",
  },
  {
    cardBg: "bg-green",

    title1: "Pay-per-click",
    title2: "advertising",
    titleBg: "bg-white",

    iconColor: "text-green",
    iconBg: "bg-black",

    image: "tokyo-selecting-a-value-in-the-browser-window 1.png",
    textColor: "text-black",
  },
  {
    cardBg: "bg-dark",

    title1: "Social Media",
    title2: "Marketing",
    titleBg: "bg-green",

    iconColor: "text-black",
    iconBg: "bg-white",

    image: "tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png",
    textColor: "text-white",
  },
  {
    cardBg: "bg-grey",

    title1: "Email",
    title2: "Marketing",
    titleBg: "bg-green",

    iconColor: "text-green",
    iconBg: "bg-black",

    image: "tokyo-sending-messages-from-one-place-to-another 1.png",
    text: "text-white",
  },
  {
    cardBg: "bg-green",

    title1: "Content",
    title2: "Creation",
    titleBg: "bg-white",

    iconColor: "text-green",
    iconBg: "bg-black",

    image: "tokyo-magnifier-web-search-with-elements 2.svg",
    textColor: "text-black",
  },
  {
    cardBg: "bg-dark",

    title1: "Analytics and",
    title2: "Tracking",
    titleBg: "bg-green",

    iconColor: "text-green",
    iconBg: "bg-black",

    image:
      "tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png",
    textColor: "text-white",
  },
];

export const Services = () => {
  return (
    <div>
      {/* head */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-10 w-fit lg:w-2/3">
        <h2 className="bg-green rounded-[7px] px-[7px]">Services</h2>
        <p className="text-balance">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>{" "}
      {/* services list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[30px]">
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
                <span className={`text-lg leading-[28px] ${service.textColor}`}>
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
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
