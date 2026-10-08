"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Contact from "@/components/Contact";
import About from "@/components/About";
import OpenSource from "@/components/OpenSource";

const Home = () => {
  return (
    <main className="relative mb-0 bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <About />
        <RecentProjects />
        <OpenSource />
        <Clients />
        <Experience />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
