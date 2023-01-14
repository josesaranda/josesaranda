import { useState, useEffect } from "react";
import "./ThemeButton.css";

export const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const preferredDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(preferredDarkMode);
  }, []);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    document.getElementById("love")!.innerHTML = isDark ? "💚" : "💜";
  }, [isDark]);

  return (
    <button className="theme-button" onClick={() => setIsDark(!isDark)}>
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};
