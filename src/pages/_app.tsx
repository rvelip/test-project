import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from '@/components/Layout/Layout';
//Add layout page and main entry page for next js

//store.subscribe(()=>console.log('IIIIIII', store.getState()))//to check inital state

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
