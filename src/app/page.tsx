import dynamic from "next/dynamic";
import { Hero } from "@/Component/Hero/Hero";
import { TrustedBy } from "@/Component/TrustedBy";

// Lazy load components below the fold
const Services = dynamic(
  () =>
    import("@/Component/Services/Services").then((mod) => ({ default: mod.Services })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded"></div>,
  }
);

const Contact = dynamic(
  () =>
    import("@/Component/Contact/Contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded"></div>,
  }
);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <section />
      <Services />
      <Contact />
      <section />
    </>
  );
}
