import { useState, useEffect } from "react";
import LoadingScreen from "@/components/Loading";

const useLoadingScreen = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [startSlideOut, setStartSlideOut] = useState(false);

  useEffect(() => {
    const slideOutTimer = setTimeout(() => {
      setStartSlideOut(true);
    }, 2000);

    const completeTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);

    return () => {
      clearTimeout(slideOutTimer);
      clearTimeout(completeTimer);
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
