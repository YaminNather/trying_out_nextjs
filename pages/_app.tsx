import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.js"

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(
  //   () => {
  //     typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.js') : null
  //   }, 
  //   []
  // );

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        
        <meta name="viewport" content="with=device-width, initial-scale=1.0" />


        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />

      <Script id="bootstrap" strategy="beforeInteractive" src="/javascripts/bootstrap.js" onLoad={() => console.log("Loaded")} />
    </>
  );
}
export default MyApp
