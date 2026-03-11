import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { defaultContent } from "@/lib/cms-store";

export default function Home() {
  const c = defaultContent;
  return (
    <main>
      <Nav />
      <Hero content={c.hero} />
      <Features features={c.features} />
      <Works products={c.products} />
      <Process steps={c.process} />
      <Projects projects={c.projects} />
      <CTA content={c.cta} />
      <Footer content={c.footer} />
    </main>
  );
}
