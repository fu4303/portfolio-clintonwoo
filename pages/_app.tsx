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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-74904849-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}
gtag("js", new Date());
gtag("config", "UA-74904849-1");`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
