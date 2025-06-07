"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import useLoadingScreen from "@/hooks/useLoadingScreen";
import useDarkMode from "@/hooks/useDarkMode";

const Page = () => {
  const { loadingComplete, startSlideOut, LoadingScreenComponent } =
    useLoadingScreen();
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (startSlideOut) {
      // Show sidebar by default only on desktop screens
      setShowSidebar(window.innerWidth > 768);
    }
  }, [startSlideOut]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // 사이드바 열기/닫기
  };

  return (
    <>
      <div className={`pageContent ${showSidebar ? "with-sidebar" : ""}`}>
        <Sidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          sidebarVisible={showSidebar}
          toggleSidebar={toggleSidebar}
        />
        <Section darkMode={darkMode} sidebarVisible={showSidebar} />
      </div>
      {LoadingScreenComponent}
    </>
  );
};

export default Page;
