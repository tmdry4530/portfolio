import React from "react";
import classNames from "classnames";
import styles from "@/public/css/style.module.css";

const AboutSection = ({ darkMode }) => {
  const skills = [
    { name: "HTML 5", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Typescript", icon: "devicon-typescript-plain colored" },
    {
      name: "Next.js",
      icon: darkMode ? "devicon-nextjs-plain" : "devicon-nextjs-plain colored",
    },
    {
      name: "Solidity",
      icon: darkMode
        ? "devicon-solidity-plain"
        : "devicon-solidity-plain colored",
    },
    { name: "Hardhat, Ethers.js", icon: "devicon-hardhat-plain colored" },
  ];

  return (
    <section
      id="about"
      className={classNames(
        "section min-h-screen flex flex-col items-center justify-center px-4 md:px-0 py-16 transition-all duration-500 ease-in-out",
        darkMode ? "bg-[#0A101E] text-white" : "bg-[#F0F0F0] text-black"
      )}
    >
      <h1 className="text-4xl text-yellow-500 mb-24 text-center">About me</h1>
      <div className="w-full md:w-4/5 mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center mb-12">
          <div
            className={`p-6 text-center xl:text-left border rounded-xl transition-all duration-500 ease-in-out ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            최신 웹 개발 기술에 열정을 가지고, 자잘한 것이라도 직접 만들어보는
            것을 즐기는 개발자입니다.
          </div>
        </div>
        <div className="skill-container w-full">
          <h2 className="text-center text-2xl mb-8 text-yellow-500">Skills</h2>
          <ul className="flex flex-wrap justify-center gap-4 transition-all duration-500">
            {skills.map(({ name, icon }, index) => (
              <li
                key={index}
                className={`${styles.skillIcon} flex flex-col items-center justify-center w-32 h-32 rounded-lg shadow-lg p-4 text-center transition-all duration-500 ease-in-out`}
                style={{
                  backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                }}
              >
                <i className={`${icon} text-6xl`} />
                <p className="text-base mt-1">{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
