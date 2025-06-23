import { Contact } from "@/Component/Contact/Contact";
import { Footer } from "@/Component/Footer/Footer";
import { Header } from "@/Component/Header/Header";
import { Hero } from "@/Component/Header/Hero";
import { Services } from "@/Component/Services/Services";
import { TrustedBy } from "@/Component/TrustedBy";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedBy />

      <Services />

      <Contact />

      <Footer />
    </>
  );
}
