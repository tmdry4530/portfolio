import React, { useEffect } from "react";
import styles from "@/public/css/style.module.css";

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
      className={`${styles.loadingScreen} ${slideOut ? styles.slideOut : ""}`}
    ></div>
  );
};

export default LoadingScreen;
