// import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import { AppProps } from "next/app";
import * as React from "react";

import {
  darkThemeClassName,
  SetThemeContext,
  Theme,
  ThemeContext,
  themeKey,
} from "../src/context/theme-context";

function getCurrentTheme(): Theme {
  const currentMode: Theme =
    typeof window === "object" &&
    (localStorage.theme === Theme.DARK ||
      (!(themeKey in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))
      ? Theme.DARK
      : Theme.LIGHT;

  return currentMode;
}

function saveCurrentTheme(theme: Theme): void {
  localStorage.setItem(themeKey, theme);
}

function updateTheme(theme: Theme): void {
  if (theme === Theme.DARK) {
    if (!document.documentElement.classList.contains(darkThemeClassName)) {
      document.documentElement.classList.add(darkThemeClassName);
    }
  } else {
    document.documentElement.classList.remove(darkThemeClassName);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setThemeState] = React.useState<Theme>(getCurrentTheme());

  const setTheme = React.useCallback((nextTheme: Theme) => {
    updateTheme(nextTheme);
    setThemeState!(nextTheme);
    saveCurrentTheme(nextTheme);
  }, []);

  React.useLayoutEffect(() => {
    setTheme(theme);
  }, []);

  const darkThemeClass = theme === Theme.DARK ? darkThemeClassName : "";

  return (
    <>
      <Head>
        <script></script>
      </Head>
      {/* <body className={darkThemeClass + " dark:bg-gray-800"}> */}
      <ThemeContext.Provider value={theme}>
        <SetThemeContext.Provider value={setTheme}>
          <Component {...pageProps} />
        </SetThemeContext.Provider>
      </ThemeContext.Provider>
      {/* </body> */}
    </>
  );
}

export default MyApp;
