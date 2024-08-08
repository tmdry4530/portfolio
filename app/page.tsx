"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Section";
import ClipLoader from "react-spinners/ClipLoader";

const Page = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(true);
  const [message, setMessage] = useState("Loading data...");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");
    if (localDarkMode !== "true") {
      window.localStorage.setItem("darkMode", "true");
    }
    setDarkMode(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      setMessage("Loading complete!");
      const messageTimer = setTimeout(() => {
        setFading(false);
        const fadeTimer = setTimeout(() => {
          setLoading(false);
        }, 500);
        return () => clearTimeout(fadeTimer);
      }, 1000);
      return () => clearTimeout(messageTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    window.localStorage.setItem("darkMode", String(newMode));
    setDarkMode(newMode);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          transition: "opacity 0.5s ease-out",
          opacity: fading ? 1 : 0,
        }}
      >
        {showLoader ? (
          <ClipLoader color={"#123abc"} loading={fading} size={50} />
        ) : null}
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div
      className={`flex ${darkMode ? "dark-mode-class" : "light-mode-class"}`}
    >
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
