import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

import { socialLoginReq } from '@utils/axios';

interface SocialloginCallbackPageProps extends ChakraProps {}

function SocialloginCallbackPage({
  ...basisProps
}: SocialloginCallbackPageProps) {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { code, state } = router.query;
    const data = { code: code, state: state };
    socialLoginReq.post('/', data).then((response) => console.log(response));
  }, [router.isReady]);

  return (
    <Box {...basisProps}>
      <Text>SocialloginCallbackPage</Text>
    </Box>
  );
}

export default SocialloginCallbackPage;
