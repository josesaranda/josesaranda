export const THEME_STORAGE_KEY = "theme";
export const THEME_DARK_CLASS = "dark";
export const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

function isDark(): boolean {
  return document.documentElement.classList.contains(THEME_DARK_CLASS);
}

export function setDark(): void {
  document.documentElement.classList.add(THEME_DARK_CLASS);
}

export function setLight(): void {
  document.documentElement.classList.remove(THEME_DARK_CLASS);
}

export function toggle(): void {
  document.documentElement.classList.toggle(THEME_DARK_CLASS);
  localStorage.setItem(THEME_STORAGE_KEY, isDark() ? "dark" : "light");
}

export function watchSystemPreference(): void {
  window.matchMedia(THEME_MEDIA_QUERY).addEventListener("change", (e) => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (!stored) {
      if (e.matches) {
        setDark();
      } else {
        setLight();
      }
    }
  });
}
