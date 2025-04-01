import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from "@/containers";
import { projectArray } from "@/assets/projects/projectsArray";
import CopyCmd from "@/components/CopyCmd";
import Card from "@/components/projects/card";
// import Contact from "@/components/shared/Contact";
// import Skills from "@/components/skills/Skills";
import Terminalcomp from "@/components/terminal/Terminalcomp";
import TypingAnimation from "@/components/TypingAnimation";

import type { NextPage } from "next";

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
      
    </>
  );
};

export default Home;
