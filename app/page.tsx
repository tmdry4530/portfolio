"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Section";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");
    setDarkMode(localDarkMode === "true");
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 로딩 상태를 변경합니다.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2초 후에 로딩 상태를 false로 변경합니다. 필요에 따라 시간을 조정하세요.

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    window.localStorage.setItem("darkMode", String(newMode));
    setDarkMode(newMode);
  };

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 보여줄 화면을 반환합니다.
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
