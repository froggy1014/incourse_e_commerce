import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';

import { mode } from '@theme/foundations/colors';

import store from '../features/store';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { ...pageProps } }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
      >
        <ToggleColorModeButton />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));
