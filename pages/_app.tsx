import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Dashboard } from '../templates/dashboard/Dashboard';

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
                <Dashboard>
                    <Component {...pageProps} />
                </Dashboard>
            </>
        );
    }
}