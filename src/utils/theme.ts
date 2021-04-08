/** DO NOT CHANGE THEMEKEY. It will be a breaking change in localStorage. */
export const themeKey = "theme";
export const darkThemeClassName = "dark";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

/** Returns the current theme */
export function getTheme(): Theme {
  const theme: Theme =
    typeof window === "object" &&
    (localStorage.theme === Theme.DARK ||
      (!(themeKey in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))
      ? Theme.DARK
      : Theme.LIGHT;

  return theme;
}

/** Saves the theme setting in localStorage  */
export function saveTheme(theme: Theme): void {
  localStorage.setItem(themeKey, theme);
}

/** Updates the HTML tag class to set the theme */
export function updateTheme(theme: Theme): void {
  if (theme === Theme.DARK) {
    if (!document.documentElement.classList.contains(darkThemeClassName)) {
      document.documentElement.classList.add(darkThemeClassName);
    }
  } else {
    document.documentElement.classList.remove(darkThemeClassName);
  }
}
