import '@/styles/globals.css';
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { AppProvider } from '@/components/appContext';

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </MantineProvider>
  );
}
