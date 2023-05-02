import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from "../store/store";
import { Provider } from "react-redux";
//Add layout page and main entry page for next js

store.subscribe(()=>console.log('IIIIIII', store.getState()))//to check inital state

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>

  )
}
