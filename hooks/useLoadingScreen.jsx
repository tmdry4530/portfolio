import { useState, useEffect } from "react";
import LoadingScreen from "@/components/Loading";

const useLoadingScreen = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [startSlideOut, setStartSlideOut] = useState(false);

  useEffect(() => {
    const textAnimationTimer = setTimeout(() => {
      setStartSlideOut(true); // 2초 후 슬라이드 아웃 시작
    }, 2000);

    const backgroundAnimationTimer = setTimeout(() => {
      setLoadingComplete(true); // 슬라이드 아웃 1초 후 로딩 완료
    }, 3000);

    return () => {
      clearTimeout(textAnimationTimer);
      clearTimeout(backgroundAnimationTimer);
    };
  }, []);

  const LoadingScreenComponent = !loadingComplete ? (
    <LoadingScreen
      slideOut={startSlideOut}
      onLoadingComplete={setLoadingComplete}
    />
  ) : null;

  return { loadingComplete, startSlideOut, LoadingScreenComponent };
};

export default useLoadingScreen;
