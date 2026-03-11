"use client";

import { useState, useEffect } from "react";
import { loadContent, defaultContent } from "@/lib/cms-store";
import Hero from "./Hero";
import Features from "./Features";
import Works from "./Works";
import Process from "./Process";
import Projects from "./Projects";
import CTA from "./CTA";
import Footer from "./Footer";

export default function ClientPage() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    setContent(loadContent());
  }, []);

  return (
    <>
      <Hero content={content.hero} />
      <Features features={content.features} clients={content.clients} />
      <Process steps={content.process} />
      <Works products={content.products} />
      <Projects projects={content.projects} />
      <CTA content={content.cta} />
      <Footer content={content.footer} />
    </>
  );
}
