"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Section";

const Page = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");
    setDarkMode(localDarkMode === "false");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    window.localStorage.setItem("darkMode", String(newMode));
    setDarkMode(newMode);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
