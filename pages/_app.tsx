import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.js"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(
    () => {
      typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.js') : null
    }, 
    []
  );

  return (
    <>            
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
