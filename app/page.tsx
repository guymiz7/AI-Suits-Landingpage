import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandEssence } from "@/components/BrandEssence";
import { Promise } from "@/components/Promise";
import { ValueProp } from "@/components/ValueProp";
import { ThreeWorlds } from "@/components/ThreeWorlds";
import { Products } from "@/components/Products";
import { Founders } from "@/components/Founders";
import { Values } from "@/components/Values";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <BrandEssence />
      <Promise />
      <ValueProp />
      <ThreeWorlds />
      <Products />
      <Founders />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
}
