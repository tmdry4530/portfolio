import React, { FC, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import "@/public/css/toggle.css";

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: FC<SidebarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sidebar fixed top-0 left-0 h-screen w-full md:w-64 text-white p-5 border-r-2 ${
          darkMode ? "bg-[#070D1B]" : "bg-white"
        } border-r-[2px] border-[#101624] md:block ${
          isMobileMenuOpen ? "block z-50" : "hidden"
        } transition-all duration-500`}
      >
        <div id="profile" className="mb-5">
          <Image
            src="/profile.jpg"
            alt="Profile"
            className={`rounded-full mx-auto shadow-lg border-2 ${
              darkMode ? "border-white" : "border-black"
            }`}
            width={250}
            height={250}
            layout="fixed"
          />
        </div>
        <hr className="border-[2px] border-[#101624]" />
        <div
          id="section"
          className="mt-5 space-y-4 text-lg font-bold uppercase transition-colors duration-500"
        >
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
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
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
      <button
        className={`md:hidden fixed top-4 right-4 z-50 text-2xl focus:outline-none ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "×" : "☰"}
      </button>
    </>
  );
};

export default Sidebar;
