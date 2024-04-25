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
    <>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
    </>
  );
};

export default Page;
