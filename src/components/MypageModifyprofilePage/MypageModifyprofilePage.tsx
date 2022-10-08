import { useRouter } from 'next/router';

import { Box, ChakraProps } from '@chakra-ui/react';

import ProfileFormPage from '@components/SignupPage/_fragments/ProfileForm';

interface MypageModifyprofilePageProps extends ChakraProps {}

function MypageModifyprofilePage({
  ...basisProps
}: MypageModifyprofilePageProps) {
  const router = useRouter();
  const { name, nickname, phone, email, gender, age, profile, id } =
    router.query;

  const meInfo = {
    ages: Number(age),
    email: String(email),
    gender: String(gender),
    id: Number(id),
    name: String(name),
    nickname: String(nickname),
    phone: String(phone)
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
    profile: String(profile),
  };

  console.log(meInfo);
  return (
    <Box {...basisProps}>
      <ProfileFormPage userInfo={meInfo} />
    </Box>
  );
}

export default MypageModifyprofilePage;
