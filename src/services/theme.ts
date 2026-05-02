export const THEME_STORAGE_KEY = "theme";
export const THEME_DARK_CLASS = "dark";
export const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

class ThemeService {
  private static instance: ThemeService;

  private constructor() {}

  static getInstance(): ThemeService {
    if (!ThemeService.instance) {
      ThemeService.instance = new ThemeService();
    }
    return ThemeService.instance;
  }

  private getStoredTheme(): string | null {
    return localStorage.getItem(THEME_STORAGE_KEY);
  }

  private isDark(): boolean {
    return document.documentElement.classList.contains(THEME_DARK_CLASS);
  }

  setDark(): void {
    document.documentElement.classList.add(THEME_DARK_CLASS);
  }

  setLight(): void {
    document.documentElement.classList.remove(THEME_DARK_CLASS);
  }

  toggle(): void {
    document.documentElement.classList.toggle(THEME_DARK_CLASS);
    localStorage.setItem(THEME_STORAGE_KEY, this.isDark() ? "dark" : "light");
  }

  initFromSystemPreference(): void {
    if (window.matchMedia(THEME_MEDIA_QUERY).matches) {
      this.setDark();
    }
  }

  initFromStorage(): void {
    const theme = this.getStoredTheme();
    if (theme === "dark") {
      this.setDark();
    } else if (theme === "light") {
      this.setLight();
    } else {
      this.initFromSystemPreference();
    }
  }

  watchSystemPreference(): void {
    window.matchMedia(THEME_MEDIA_QUERY).addEventListener("change", (e) => {
      if (!this.getStoredTheme()) {
        if (e.matches) {
          this.setDark();
        } else {
          this.setLight();
        }
      }
    });
  }
}

export const themeService = ThemeService.getInstance();
