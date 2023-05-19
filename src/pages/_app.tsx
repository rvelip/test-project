import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from '@/components/Layout/Layout';
import { ToastProvider } from 'react-toast-notifications'
import Toast from '@/components/Shared/Toast/Toast';

//Add layout page and main entry page for next js

//store.subscribe(()=>console.log('IIIIIII', store.getState()))//to check inital state

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={4000}
        components={{ Toast: Toast }}
        placement="top-right"
      >
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ToastProvider>
    </>
  )
}
