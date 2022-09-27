import React from 'react';

import { Box, ChakraProps } from '@chakra-ui/react';

import ProfileFormPage from '@components/SignupPage/_fragments/ProfileForm';

interface MypageModifyprofilePageProps extends ChakraProps {}

const dummyData = {
  name: '이정민',
  nickname: '사치키',
  phone: '010-8979-1169',
  email: 'clcl6084@gmail.com',
  gender: 'male',
  ages: '20',
};

function MypageModifyprofilePage({
  ...basisProps
}: MypageModifyprofilePageProps) {
  return (
    <Box {...basisProps}>
      <ProfileFormPage userInfo={dummyData} />
    </Box>
  );
}

export default MypageModifyprofilePage;
