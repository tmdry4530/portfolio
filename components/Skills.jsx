import React from "react";
import classNames from "classnames";
import Image from "next/image";

const SkillsSection = ({ darkMode }) => {
  const skillCategories = {
    frontend: [
      { name: "HTML 5", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Javascript", icon: "devicon-javascript-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
      {
        name: "Next.js",
        icon: darkMode
          ? "devicon-nextjs-plain"
          : "devicon-nextjs-plain colored",
      },
      { name: "webpack", icon: "devicon-webpack-plain colored" },
      { name: "babel", icon: "devicon-babel-plain colored" },
      {
        name: "styled-components",
        useCustomIcon: true,
        customIcon: "/styled-components.svg",
        width: 48,
        height: 48,
      },
    ],
    backend: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      {
        name: "AWS EC2",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
    ],
    blockchain: [
      { name: "Solidity", icon: "devicon-solidity-plain colored" },
      {
        name: "ethers.js",
        useCustomIcon: true,
        customIcon: "/ethers.svg",
        width: 48,
        height: 48,
      },
      {
        name: "Web3.js",
        useCustomIcon: true,
        customIcon: "/web3js.svg",
        width: 48,
        height: 48,
      },
    ],
    tools: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" },
    ],
  };

  const renderSkillCategory = (title, skills) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-yellow-500">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
                     transform hover:scale-105 hover:rotate-2"
            style={{
              backgroundColor: darkMode
                ? "rgba(34, 34, 43, 0.8)"
                : "rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="flex items-center justify-center h-[48px] mb-4">
              {skill.useCustomIcon ? (
                <Image
                  src={skill.customIcon}
                  alt={skill.name}
                  width={skill.width || 40}
                  height={skill.height || 40}
                  style={{
                    filter: darkMode ? "brightness(1)" : "brightness(0.8)",
                  }}
                />
              ) : (
                skill.icon && <i className={`${skill.icon} text-4xl`} />
              )}
            </div>
            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className={classNames(
        "min-h-screen flex flex-col items-center justify-center px-4 md:px-0 py-16 transition-all duration-500 ease-in-out",
        darkMode ? "bg-[#0A101E] text-white" : "bg-[#F0F0F0] text-black"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-bold text-center text-yellow-500 mb-16">
          Technical Skills
        </h2>

        {Object.entries(skillCategories).map(([category, skills]) =>
          renderSkillCategory(
            category.charAt(0).toUpperCase() + category.slice(1),
            skills
          )
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
