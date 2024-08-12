import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "@/public/css/style.module.css"; // 모듈 CSS 사용

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
      { threshold: 0.1 } // 더 작은 값으로 설정하여 애니메이션이 일찍 트리거되도록 함
    );

    document.querySelectorAll(".vertical-timeline-element").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  const contentStyle = {
    background: darkMode ? "#1D2939" : "#F3F4F6",
    color: darkMode ? "white" : "black",
  };

  return (
    <section
      id="experience"
      className="section min-h-screen flex flex-col items-center justify-center py-12 md:py-24 transition-all duration-500 ease-in-out"
      style={{ backgroundColor: darkMode ? "#070D1B" : "#FFFFFF" }}
    >
      <h1 className="section-title text-4xl text-yellow-500 mb-12 md:mb-24">
        Experience
      </h1>
      <VerticalTimeline
        animate={false}
        lineColor={darkMode ? "#4A5568" : "#E5E7EB"}
        className="w-full md:w-4/5"
      >
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            id={`experience-${index}`}
            contentStyle={contentStyle}
            contentArrowStyle={{
              borderRight: `7px solid ${darkMode ? "#1D2939" : "#F3F4F6"}`,
            }}
            date={exp.date}
            iconStyle={{
              background: darkMode ? "#4A5568" : "#2196F3",
              color: "white",
            }}
            className={`vertical-timeline-element transition-all duration-500 ease-in-out ${
              visibleSections.includes(`experience-${index}`)
                ? styles.fadeInUp
                : ""
            }`}
          >
            <h3 className="vertical-timeline-element-title text-xl text-yellow-500 pb-2">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle pb-2">
              {exp.subtitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.techs.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 rounded-full transition-all duration-500 ease-in-out ${
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
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
