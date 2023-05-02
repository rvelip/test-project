import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
             {/* add external css file using script link code and meta tag and title */}
        </Head>
      <body className='font-serif' >
        <Main />
        <NextScript />
      {/* add external script file using script code */}
      </body>
    </Html>
  )
}
