import React from "react";
import { Element } from "react-scroll";
import HomeSection from "@/components/Home";
import AboutSection from "@/components/About";
import ProjectSection from "@/components/Project";
import ExperienceSection from "@/components/Experience";

const Section = ({ darkMode, sidebarVisible }) => {
  return (
    <main
      className={`section-container transition-all ease-in-out ${
        sidebarVisible ? "ml-64 md:ml-72" : "ml-0"
      }`}
    >
      <div
        className="flex-1 md:px-0"
        style={{ fontFamily: "Pretendard, sans-serif" }}
      >
        <Element name="home">
          <HomeSection darkMode={darkMode} />
        </Element>
        <Element name="about">
          <AboutSection darkMode={darkMode} />
        </Element>
        <Element name="project">
          <ProjectSection darkMode={darkMode} />
        </Element>
        <Element name="experience">
          <ExperienceSection darkMode={darkMode} />
        </Element>
      </div>
    </main>
  );
};

export default Section;
