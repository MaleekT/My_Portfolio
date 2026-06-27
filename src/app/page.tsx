"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Navigation />

        <Hero />

        <SelectedWork />

        <Skills />

        <Process />

        <Contact />

        <Footer />
      </SmoothScroll>

      <Chatbot />
    </>
  );
}
