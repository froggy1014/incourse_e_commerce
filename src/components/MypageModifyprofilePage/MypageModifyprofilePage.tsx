import React from 'react';

import { Box, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

import ProfileFormPage from '@components/SignupPage/_fragments/ProfileForm';

interface MypageModifyprofilePageProps extends ChakraProps {}

function MypageModifyprofilePage({
  ...basisProps
}: MypageModifyprofilePageProps) {
  return (
    <Box {...basisProps}>
      <ProfileFormPage />
    </Box>
  );
}

export default MypageModifyprofilePage;
