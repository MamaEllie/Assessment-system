import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <ColorSchemeScript defaultColorScheme='auto' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className=' font-inter'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
