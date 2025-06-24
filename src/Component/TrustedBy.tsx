import Image from "next/image";
import React from "react";

export const TrustedBy = () => {
  return (
    <div className="min-h-12 flex flex-col lg:flex-row items-center justify-between gap-y-6  flex-wrap lg:flex-nowrap">
      <div>
        <Image
          src="./amazon.svg"
          alt={"amazon logo"}
          className="w-full h-full grayscale"
          width={0}
          height={0}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          src="./dribbble.svg"
          alt={"Dribbble logo"}
          className="w-full h-full grayscale"
          width={0}
          height={0}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          src="./hubspot.svg"
          alt={"Hubspot logo"}
          className="w-full h-full grayscale"
          width={0}
          height={0}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          src="./notion.svg"
          alt={"Notion logo"}
          className="w-full h-full grayscale"
          width={0}
          height={0}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          src="./netflix.svg"
          alt={"Netflex logo"}
          className="w-full h-full grayscale"
          width={0}
          height={0}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          src="./zoom.svg"
          alt={"Zoom logo"}
          className="w-full h-full grayscale"
          width={0}
          height={0}
          loading="lazy"
        />
      </div>
    </div>
  );
};
