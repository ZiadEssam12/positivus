"use client";

import dynamic from "next/dynamic";

// Dynamically import MobileNav with loading state
const MobileNav = dynamic(
  () => import("./MobileNav").then((mod) => ({ default: mod.MobileNav })),
  {
    loading: () => (
      <div className="lg:hidden">
        <div className="relative flex flex-col justify-center items-center w-8 h-8">
          <span className="absolute block w-6 h-0.5 bg-black -translate-y-1.5"></span>
          <span className="absolute block w-6 h-0.5 bg-black"></span>
          <span className="absolute block w-6 h-0.5 bg-black translate-y-1.5"></span>
        </div>
      </div>
    ),
    ssr: false, // Disable SSR for client-side only component
  }
);

export const MobileNavWrapper = () => {
  return <MobileNav />;
};
