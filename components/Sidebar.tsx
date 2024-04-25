// Sidebar.tsx
import React, { FC } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import "@/public/css/toggle.css";

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: FC<SidebarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header
      className={`fixed top-0 left-0 h-screen w-full md:w-64 text-white p-5 border-r-2 ${
        darkMode ? "bg-[#070D1B]" : "bg-white"
      } border-r-[2px] border-[#101624] transition-colors duration-500`}
    >
      <div id="profile" className="mb-5">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className={`rounded-full mx-auto shadow-lg border-2  ${
            darkMode ? "border-white" : "border-black"
          }`}
          width={200}
          height={200}
          layout="fixed"
        />
      </div>
      <hr className="border-[2px] border-[#101624]" />
      <div id="section" className="mt-5 space-y-6 text-lg font-bold uppercase">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="text-yellow-500 dark:text-yellow-500"
          className={`block my-2 hover:opacity-70 cursor-pointer ${
            darkMode ? "" : "text-black"
          }`}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="text-yellow-500 dark:text-yellow-500"
          className={`block my-2 hover:opacity-70 cursor-pointer ${
            darkMode ? "" : "text-black"
          }`}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="project"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="text-yellow-500 dark:text-yellow-500"
          className={`block my-2 hover:opacity-70 cursor-pointer ${
            darkMode ? "" : "text-black"
          }`}
        >
          Project
        </ScrollLink>
        <ScrollLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="text-yellow-500 dark:text-yellow-500"
          className={`block my-2 hover:opacity-70 cursor-pointer ${
            darkMode ? "" : "text-black"
          }`}
        >
          Experience
        </ScrollLink>
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={darkMode}
          size={80}
        />
      </div>
    </header>
  );
};

export default Sidebar;
