import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Testimonials } from "@/components/Testimonials";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ProcessStatement } from "@/components/ProcessStatement";
import { WhyUs } from "@/components/WhyUs";
import { Founders } from "@/components/Founders";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Curriculum } from "@/components/Curriculum";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ClientsMarquee />
        <Testimonials />
        <WhatYouGet />
        <ProcessStatement />
        <WhyUs />
        <Founders />
        <WhoIsItFor />
        <Curriculum />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
