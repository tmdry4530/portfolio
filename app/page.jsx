"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import useLoadingScreen from "@/hooks/useLoadingScreen";
import useDarkMode from "@/hooks/useDarkMode";
import styles from "@/public/css/style.module.css";

const Page = () => {
  const { loadingComplete, startSlideOut, LoadingScreenComponent } =
    useLoadingScreen();
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (startSlideOut) {
      setShowSidebar(true); // 로딩 화면 슬라이드 아웃 시작과 동시에 사이드바를 나타나게 함
    }
  }, [startSlideOut]);

  useEffect(() => {
    // 페이지 로드 시 항상 첫 번째 섹션으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // 사이드바의 상태를 토글
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
