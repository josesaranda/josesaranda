import { useEffect, useState } from "react";
import "./ThemeButton.scss";

export const ThemeButton = () => {
  const THEME_TOKEN = "theme";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let preferredDarkMode;
    if (window.localStorage.getItem(THEME_TOKEN) !== null) {
      preferredDarkMode = window.localStorage.getItem(THEME_TOKEN) === "dark";
    } else {
      preferredDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      window.localStorage.setItem(
        THEME_TOKEN,
        preferredDarkMode ? "dark" : "light"
      );
    }
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
