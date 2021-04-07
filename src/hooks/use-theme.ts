import * as React from "react";

import { ThemeContext, SetThemeContext, Theme } from "../context/theme-context";

export function useTheme(): Theme {
  const theme = React.useContext(ThemeContext);

  return theme;
}

export function useToggleTheme(): () => void {
  const theme = useTheme();
  const setTheme = React.useContext(SetThemeContext);

  const toggleTheme = React.useCallback(() => {
    const nextTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme!(nextTheme);
  }, [theme]);

  return toggleTheme;
}
