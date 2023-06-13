import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import Layout from '@/components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react'

//Add layout page and main entry page for next js

//store.subscribe(()=>console.log('IIIIIII', store.getState()))//to check inital state

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </PersistGate>
      </Provider>
      <Toaster />
    </>
  )
}
