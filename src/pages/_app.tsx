import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import { mode } from '@theme/foundations/colors';

import store from '../features/store';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { ...pageProps } }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <meta property="og:image" content="/public/images/og_image.png" />

        <meta property="og:title" content="InCourse E-Commerce Web" />

        <meta
          property="og:description"
          content="Personal E-Commerce Project by Jeongmin Lee"
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="fastcampas-5-commerce-lk6lpq0e5-froggy1014.vercel.app"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
        >
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));
