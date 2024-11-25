import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ darkMode }) => {
  const [visibleSections, setVisibleSections] = useState([]);

  const experiences = [
    {
      date: "2023.06 ~ 2024.03",
      title: "경일게임아카데미",
      subtitle: "Frontend, Backend, Blockchain",
      techs: [
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
      ],
    },
    {
      date: "2024.03.29 ~ 2024.03.31",
      title: "ETH Seoul 해커톤",
      subtitle: "Frontend, Blockchain",
      techs: ["Next.js", "Scaffold-eth-2"],
    },
    {
      date: "2024.03 ~ present",
      title: "한국방송통신대학교",
      subtitle: "AI",
      techs: [
        "R",
        "Python",
        "Java",
        "C",
        "Data Analysis",
        "Machine Learning",
        "Data engineering",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !visibleSections.includes(entry.target.id)
          ) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".vertical-timeline-element").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <section
      className={`flex flex-col items-center justify-center py-12 md:py-24 transition-all duration-500 ease-in-out ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h1 className="text-center text-4xl md:text-5xl text-yellow-500 mb-24">
        Experience
      </h1>
      <VerticalTimeline
        animate={false}
        lineColor={darkMode ? "#4A5568" : "#E5E7EB"}
        className="w-full md:w-4/5"
      >
        {experiences.map((exp, index) => (
          <ExperienceElement
            key={index}
            index={index}
            experience={exp}
            darkMode={darkMode}
            visibleSections={visibleSections}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
};

const ExperienceElement = ({
  index,
  experience,
  darkMode,
  visibleSections,
}) => {
  const { date, title, subtitle, techs } = experience;
  const contentStyle = {
    background: darkMode ? "#1D2939" : "#F3F4F6",
    color: darkMode ? "#FFFFFF" : "#000000",
  };

  return (
    <VerticalTimelineElement
      id={`experience-${index}`}
      contentStyle={contentStyle}
      contentArrowStyle={{
        borderRight: `7px solid ${darkMode ? "#1D2939" : "#F3F4F6"}`,
      }}
      date={date}
      iconStyle={{
        background: darkMode ? "#4A5568" : "#2196F3",
        color: "white",
      }}
      className={`vertical-timeline-element transition-all duration-500 ease-in-out ${
        visibleSections.includes(`experience-${index}`)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      <h3 className="text-xl text-yellow-500 pb-2">{title}</h3>
      <h4 className="pb-2">{subtitle}</h4>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, idx) => (
          <TechBadge key={idx} tech={tech} darkMode={darkMode} />
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const TechBadge = ({ tech, darkMode }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full transition-all duration-500 ease-in-out ${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {tech}
    </span>
  );
};

export default Experience;
