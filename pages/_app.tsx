// import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import { AppProps } from "next/app";
import * as React from "react";

import { getTheme, updateTheme } from "../src/utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    updateTheme(getTheme());
  }, []);

  return (
    <>
      <Head>
        <script></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
