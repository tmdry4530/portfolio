"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Section";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");
    setDarkMode(localDarkMode === "true");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    window.localStorage.setItem("darkMode", String(newMode));
    setDarkMode(newMode);
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="flex-grow">
        <Home darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Page;
