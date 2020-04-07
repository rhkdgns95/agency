import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import { withAuthenticator } from 'aws-amplify-react';
import AppSyncConfig from '../src/aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';

import { Layout } from '../components/Layout';

Amplify.configure(AppSyncConfig);

// 참고: https://aws-amplify.github.io/docs/js/api
// const client = new AWSAppSyncClient({
//     url: AppSyncConfig.aws_appsync_graphqlEndpoint,
//     region: AppSyncConfig.aws_appsync_region, 
//     auth: {
//         type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//         jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
//         // type: AppSyncConfig.aws_appsync_authenticationType as AUTH_TYPE | any,
//         // apiKey: AppSyncConfig.aws_appsync_apiKey,
//         // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
//     }
// });
  
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