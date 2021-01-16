import React from 'react';
import Head from 'next/Head';

import { Header } from 'UI';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Crypto Live</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
