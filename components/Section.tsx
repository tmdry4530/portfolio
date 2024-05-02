import { Element } from "react-scroll";
import HomeSection from "@/components/Home";
import AboutSection from "@/components/About";
import ProjectSection from "@/components/Project";
import ExperienceSection from "@/components/Experience";
// import Footer from "@/components/Footer";

interface SectionProps {
  darkMode: boolean;
}

const Section = ({ darkMode }: SectionProps) => {
  return (
    <>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />
      <main className="flex flex-col md:flex-row w-full overflow-x-hidden">
        <div className="md:w-64 flex-shrink-0"></div>
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
          {/* <Footer darkMode={darkMode} /> */}
        </div>
      </main>
    </>
  );
};

export default Section;
