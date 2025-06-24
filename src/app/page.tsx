import { Contact } from "@/Component/Contact/Contact";
import { Footer } from "@/Component/Footer/Footer";
import { Header } from "@/Component/Header/Header";
import { Hero } from "@/Component/Hero/Hero";
import { Services } from "@/Component/Services/Services";
import { TrustedBy } from "@/Component/TrustedBy";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      {/* placeHolder */}
      <section />
      <Services />
      <Contact />
      <section />
    </>
  );
}
