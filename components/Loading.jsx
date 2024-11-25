import React, { useEffect } from "react";

const LoadingScreen = ({ slideOut, onLoadingComplete }) => {
  useEffect(() => {
    if (slideOut) {
      // 로딩화면이 슬라이드 아웃되도록 설정
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 1000); // 애니메이션 지속 시간 후에 로딩 완료

      return () => clearTimeout(timer);
    }
  }, [slideOut, onLoadingComplete]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#d85c47] z-[9999] transition-transform duration-1000 ease-in-out ${
        slideOut ? "transform translate-x-full" : ""
      }`}
    ></div>
  );
};

export default LoadingScreen;
