import { useRouter } from 'next/router';

import { Box, ChakraProps } from '@chakra-ui/react';

import ProfileFormPage from '@components/SignupPage/_fragments/ProfileForm';

import { addHyphenPhone } from '@utils/format';

interface MypageModifyprofilePageProps extends ChakraProps {}

function MypageModifyprofilePage({
  ...basisProps
}: MypageModifyprofilePageProps) {
  const router = useRouter();
  const query = router.query;
  const meInfo = {
    ages: Number(query.age),
    email: String(query.email),
    gender: String(query.gender),
    id: Number(query.id),
    name: String(query.name),
    nickname: String(query.nickname),
    phone: addHyphenPhone(String(query.phone)),
    profile: String(query.profile),
  };

  console.log(meInfo);
  return (
    <Box {...basisProps}>
      <ProfileFormPage userInfo={meInfo} />
    </Box>
  );
}

export default MypageModifyprofilePage;
