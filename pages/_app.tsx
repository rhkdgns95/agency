import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';

export default class RootApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Static Website</title>
                </Head>
                <CssBaseline />
                <Component {...pageProps} />
            </>
        );
    }
}