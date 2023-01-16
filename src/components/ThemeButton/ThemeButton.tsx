import { useState, useEffect } from "react";
import "./ThemeButton.css";

export const ThemeButton = () => {
  const THEME_TOKEN = "theme";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const preferredDarkMode =
      window.localStorage.getItem(THEME_TOKEN) === "dark" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(preferredDarkMode);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        window.localStorage.setItem(
          THEME_TOKEN,
          event.matches ? "dark" : "light"
        );
        setIsDark(event.matches);
      });
  }, []);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    document.getElementById("love")!.innerHTML = isDark ? "💚" : "💜";
  }, [isDark]);

  return (
    <button
      className="theme-button"
      onClick={() => {
        setIsDark((isDark) => {
          window.localStorage.setItem(THEME_TOKEN, !isDark ? "dark" : "light");
          return !isDark;
        });
      }}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};
