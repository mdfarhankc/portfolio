import About from "@/components/home/about";
import CTA from "@/components/home/cta";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Separator />
      <Services />
      <Separator />
      <CTA />
    </>
  );
}
