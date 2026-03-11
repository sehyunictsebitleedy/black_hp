import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Features from "@/components/Features";
import Works from "@/components/Works";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { defaultContent } from "@/lib/cms-store";

export default function Home() {
  const c = defaultContent;
  return (
    <main>
      <Nav />
      <Hero content={c.hero} />
      <MarqueeStrip />
      <Features features={c.features} />
      <Works works={c.works} />
      <Process steps={c.process} />
      <CTA content={c.cta} />
      <Footer content={c.footer} />
    </main>
  );
}
