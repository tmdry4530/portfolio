import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceSectionProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceSectionProps) => {
  const contentStyle = {
    background: darkMode ? "#1D2939" : "#F3F4F6",
    color: darkMode ? "white" : "black",
    transition: "background-color 0.5s, color 0.5s",
  };

  const contentArrowStyle = {
    borderRight: darkMode ? "7px solid #1D2939" : "7px solid #F3F4F6",
    transition: "border-color 0.5s",
  };

  const iconStyle = {
    background: darkMode ? "#4A5568" : "#2196F3",
    color: "white",
    transition: "background-color 0.5s, color 0.5s",
  };

  return (
    <section
      id="experience"
      className="section min-h-screen flex flex-col items-center justify-center py-12 md:py-24 transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#070D1B" : "#FFFFFF" }}
    >
      <h1 className="section-title text-4xl text-yellow-500 mb-12 md:mb-24">
        <span>Experience</span>
      </h1>
      <VerticalTimeline
        animate={false}
        lineColor={darkMode ? "#4A5568" : "#E5E7EB"}
        className="w-full md:w-4/5 transition-colors duration-500"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work transition-colors duration-500"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2023.06 ~ 2024.03"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title text-xl text-yellow-500 pb-2">
            경일게임아카데미
          </h3>
          <h4 className="vertical-timeline-element-subtitle pb-2">
            Frontend, Backend, Blockchain
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML5",
              "CSS3",
              "Javascript",
              "Linux",
              "Git",
              "Node.js",
              "Socket.io",
              "Mysql",
              "Express",
              "JWT",
              "React",
              "Redux",
              "Recoil",
              "Typescript",
              "Blockchain",
              "Solidity",
              "Truffle",
              "ethers.js",
            ].map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work transition-colors duration-500"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2024.03.29 ~ 2024.03.31"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title text-xl text-yellow-500 pb-2">
            ETH Seoul 해커톤
          </h3>
          <h4 className="vertical-timeline-element-subtitle pb-2">
            Frontend, Blockchain
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Scaffold-eth-2"].map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work transition-colors duration-500"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2024.03 ~ present"
          iconStyle={iconStyle}
        >
          <h3 className="vertical-timeline-element-title text-xl text-yellow-500 pb-2">
            한국방송통신대학교
          </h3>
          <h4 className="vertical-timeline-element-subtitle pb-2">AI</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "R",
              "Python",
              "Java",
              "C",
              "Data Analysis",
              "Machine Learning",
              "Data engineering",
            ].map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
