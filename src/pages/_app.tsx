import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { mode } from '@theme/foundations/colors';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    // Provide the client to your App
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    >
      <ToggleColorModeButton />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));
