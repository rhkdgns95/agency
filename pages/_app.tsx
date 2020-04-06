import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from '../src/aws-exports';
import Amplify, { Auth } from 'aws-amplify';

import '@aws-amplify/ui/dist/style.css';

import { Layout } from '../components/Layout';

Amplify.configure(awsconfig);

class RootApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    getSession = async (): Promise<void> => {
        console.log('currentSession: ', await Auth.currentSession())
    }
    render() {
        console.log(this.props);
        this.getSession();
        
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Static Website</title>
                </Head>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />    
                </Layout>
            </>
        );
    }
};

export default withAuthenticator(RootApp, true);