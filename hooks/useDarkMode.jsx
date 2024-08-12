import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");
    if (localDarkMode !== "true") {
      window.localStorage.setItem("darkMode", "true");
    }
    setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    window.localStorage.setItem("darkMode", String(newMode));
    setDarkMode(newMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
