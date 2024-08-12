import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import styles from "@/public/css/style.module.css";

const Sidebar = ({
  darkMode,
  toggleDarkMode,
  sidebarVisible,
  toggleSidebar,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 컴포넌트가 마운트될 때 현재 화면 크기를 반영
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <aside
        className={`${styles.sidebar} ${
          sidebarVisible || !isMobile
            ? styles.sidebarVisible
            : styles.sidebarHidden
        } ${darkMode ? styles.dark : styles.light} transition-all ease-in-out 
        ${darkMode ? "border-r border-gray-700" : "border-r border-gray-300"}`}
      >
        <div id="profile" className="mb-5 p-5">
          <Image
            src="/profile.jpg"
            alt="Profile"
            className={`transition-all ease-in-out rounded-full mx-auto shadow-lg border-2 ${
              darkMode ? "border-white" : "border-black"
            }`}
            width={250}
            height={250}
            layout="fixed"
          />
        </div>
        <hr className="border-gray-700 transition-colors ease-in-out" />
        <nav
          id="section"
          className="mt-5 space-y-4 text-lg font-bold uppercase p-5 transition-colors ease-in-out flex flex-col gap-4"
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="text-yellow-500"
            className="hover:opacity-70 cursor-pointer transition-colors ease-in-out"
            onClick={toggleSidebar}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="text-yellow-500"
            className="hover:opacity-70 cursor-pointer transition-colors ease-in-out"
            onClick={toggleSidebar}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="text-yellow-500"
            className="hover:opacity-70 cursor-pointer transition-colors ease-in-out"
            onClick={toggleSidebar}
          >
            Project
          </ScrollLink>
          <ScrollLink
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="text-yellow-500"
            className="hover:opacity-70 cursor-pointer transition-colors ease-in-out"
            onClick={toggleSidebar}
          >
            Experience
          </ScrollLink>
          <div className="mt-5 transition-all ease-in-out">
            <DarkModeToggle
              onChange={toggleDarkMode}
              checked={darkMode}
              size={80}
              className="transition-colors ease-in-out"
            />
          </div>
        </nav>
      </aside>

      {isMobile && (
        <button
          className={`md:hidden fixed top-4 left-4 z-50 text-2xl focus:outline-none ${
            darkMode ? "text-white" : "text-black"
          } transition-colors ease-in-out`}
          onClick={toggleSidebar}
        >
          {sidebarVisible ? "×" : "☰"}
        </button>
      )}
    </>
  );
};

export default Sidebar;
