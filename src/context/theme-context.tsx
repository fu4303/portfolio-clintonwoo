import * as React from "react";

/** DO NOT CHANGE THEMEKEY. It will be a breaking change in localStorage. */
export const themeKey = "theme";
export const darkThemeClassName = "dark";
export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export const ThemeContext = React.createContext<Theme>(Theme.LIGHT);
ThemeContext.displayName = "ThemeContext";

export const SetThemeContext = React.createContext<
  ((theme: Theme) => void) | undefined
>(undefined);
ThemeContext.displayName = "SetThemeContext";
