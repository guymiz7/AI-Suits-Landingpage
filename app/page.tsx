import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ProcessStatement } from "@/components/ProcessStatement";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ValueProp } from "@/components/ValueProp";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Differentiation } from "@/components/Differentiation";
import { Bootcamp } from "@/components/Bootcamp";
import { Founders } from "@/components/Founders";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <WhatYouGet />
      <ProcessStatement />
      <ClientsMarquee />
      <ValueProp />
      <WhoIsItFor />
      <Differentiation />
      <Bootcamp />
      <Founders />
      <CTA />
      <Footer />
    </main>
  );
}
