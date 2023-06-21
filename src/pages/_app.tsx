import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import Layout from '@/components/Layout/Layout';
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import SSORedirect from '@/components/SSORedirect';
import { AuthProvider } from '@/components/AuthProvider';

import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react'

import { msalConfig } from '@/components/auth';

//Add layout page and main entry page for next js

//store.subscribe(()=>console.log('IIIIIII', store.getState()))//to check inital state

const authInstance = new PublicClientApplication(msalConfig);

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <MsalProvider instance={authInstance}>
        {/* <AuthenticatedTemplate> */}
          <AuthProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </PersistGate>
            </Provider>
            <Toaster />
          </AuthProvider>
        {/* </AuthenticatedTemplate> */}
        {/* <UnauthenticatedTemplate>
          <SSORedirect />
        </UnauthenticatedTemplate> */}
      </MsalProvider>
    </>
  )
}
