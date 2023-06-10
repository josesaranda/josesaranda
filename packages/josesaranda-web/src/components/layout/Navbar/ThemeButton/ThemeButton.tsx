import React, { useEffect, useState } from "react";

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
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <button
      className="theme-button button square"
      onClick={() => {
        setIsDark((isDark) => {
          window.localStorage.setItem(THEME_TOKEN, !isDark ? "dark" : "light");
          return !isDark;
        });
      }}
    >
      {isDark && <span className="icon icon-small icon-sun secondary"></span>}
      {!isDark && <span className="icon icon-small icon-moon secondary"></span>}
    </button>
  );
};
