import { useState, useEffect } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (
      darkMode === "dark" ||
      (darkMode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
