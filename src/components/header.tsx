import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

import Link from "next/link";

import { updateTheme, Theme, getTheme, saveTheme } from "../utils/theme";

export function Header(): JSX.Element {
  const toggleTheme = React.useCallback(() => {
    const currentTheme = getTheme();
    const nextTheme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    updateTheme(nextTheme);
    saveTheme(nextTheme);
  }, []);

  return (
    <header className="flex justify-between px-8">
      <div className="flex">
        <Link href="/">
          <a className="animate-pulse dark:hover:bg-gray-700 flex font-bold hover:bg-gray-100 items-center p-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Clinton D'Annolfo
            </span>
          </a>
        </Link>
        <Link href="/blog">
          <a className="dark:hover:bg-gray-700 flex items-center px-6 py-4 hover:bg-gray-100 hover:underline focus:underline">
            Blog
          </a>
        </Link>
      </div>
      <div className="flex">
        <span className="cursor-pointer flex p-0.5">
          <FontAwesomeIcon className="mr-2 text-lg hidden" icon={faBars} />
        </span>
        <div className="p-4">
          <button
            className="bg-gray-600 dark:bg-white dark:ring-gray-300 focus:border-none focus:outline-none hover:shadow px-2 py-1 rounded focus:ring-2 ring-gray-500 text-white"
            onClick={toggleTheme}
          >
            <span className="dark:text-yellow-300 text-lg">
              <FontAwesomeIcon className="dark:inline hidden" icon={faSun} />
              <FontAwesomeIcon className="dark:hidden" icon={faMoon} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
