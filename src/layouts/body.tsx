// import * as React from "react";
// import { Main, NextScript } from "next/document";

// import {
//   ThemeContext,
//   SetThemeContext,
//   Theme,
//   darkThemeClassName,
//   themeKey,
// } from "../context/theme-context";

// export function Body(): JSX.Element {
//   const [theme, setThemeState] = React.useState<Theme>(getCurrentTheme());

//   const setTheme = React.useCallback((nextTheme: Theme) => {
//     setThemeState!(nextTheme);
//     saveCurrentTheme(nextTheme);
//   }, []);

//   const darkThemeClass = theme === Theme.DARK ? darkThemeClassName : "";

//   return <body className={darkThemeClass + " dark:bg-gray-800"}></body>;
// }
