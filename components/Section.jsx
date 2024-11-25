import React from "react";
import { Element } from "react-scroll";
import HomeSection from "@/components/Home";
import ProjectSection from "@/components/Project";
import ExperienceSection from "@/components/Experience";
import SkillsSection from "@/components/Skills";

const Section = ({ darkMode, sidebarVisible }) => {
  const bgColor = darkMode ? "bg-[#070D1B]" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <main
      className={`
      flex transition-all duration-500 ease-in-out
      ${bgColor} ${textColor}
    `}
    >
      <div
        className={`flex-1 min-h-screen overflow-y-auto transition-all duration-500 ${
          sidebarVisible ? "md:ml-72 ml-0" : "ml-0"
        }`}
        style={{ fontFamily: "Pretendard, sans-serif" }}
      >
        <Element name="home">
          <HomeSection darkMode={darkMode} />
        </Element>
        <Element name="about">
          <SkillsSection darkMode={darkMode} />
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
