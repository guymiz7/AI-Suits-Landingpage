import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ProcessStatement } from "@/components/ProcessStatement";
import { Founders } from "@/components/Founders";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { WhyUs } from "@/components/WhyUs";
import { Curriculum } from "@/components/Curriculum";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatYouGet />
        <ProcessStatement />
        <Founders />
        <ClientsMarquee />
        <WhoIsItFor />
        <WhyUs />
        <Curriculum />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
