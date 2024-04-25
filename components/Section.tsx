import { useEffect, useState, useRef } from "react";
import { Element, scroller, Events, scrollSpy } from "react-scroll";
import HomeSection from "@/components/Home";
import AboutSection from "@/components/About";
import ProjectSection from "@/components/Project";
import ExperienceSection from "@/components/Experience";

interface SectionProps {
  darkMode: boolean;
}

const Section = ({ darkMode }: SectionProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const isScrollingRef = useRef(false);
  const sectionNames = ["home", "about", "project", "experience"];

  const handleScroll = (e: any) => {
    if (isScrollingRef.current) return;

    e.preventDefault();

    if (e.deltaY > 0 && activeSection < sectionNames.length - 1) {
      setActiveSection((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeSection > 0) {
      setActiveSection((prev) => prev - 1);
    }

    isScrollingRef.current = true;
    setTimeout(() => (isScrollingRef.current = false), 500);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    Events.scrollEvent.register("begin", function (to, element) {
      setActiveSection(sectionNames.indexOf(to));
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("wheel", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, [activeSection]);

  useEffect(() => {
    scroller.scrollTo(sectionNames[activeSection], {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [activeSection]);

  return (
    <main className="flex">
      <div className="flex flex-col w-[calc(100%-16rem)] ml-64">
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
      <footer></footer>
    </main>
  );
};

export default Section;
