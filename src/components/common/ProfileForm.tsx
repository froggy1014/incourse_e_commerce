import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { Box, Input, Stack } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';

import FormHelper from './FormHelper';

const ProfileSchema = yup.object().shape({
  name: yup
    .string()
    .required('이름을 꼭 넣어주세요')
    .min(2, '성과 이름 다 기입해주세요,.'),
  nickname: yup
    .string()
    .required('닉네임을 꼭 입력해주세요')
    .min(
      2,
      '잘못된 닉네임 형식입니다. 한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.',
    )
    .max(
      10,
      '잘못된 닉네임 형식입니다. 한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.',
    ),
  phone: yup
    .string()
    .required('핸드폰 번호는 넣어주세요')
    .matches(
      /^\d{2,3}-\d{3,4}-\d{3,4}$/,
      " '-' 기호도 넣어주시고, 번호를 다시한번 확인해주세요.",
    ),
  email: yup
    .string()
    .required('이메일을 넣어주세요')
    .email('잘못된 이메일주소 형식입니다. 이메일주소를 정확하게 입력해주세요.'),
});

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
  });

  type ProfileFormType = {
    [key: string]: string;
  };

  const submitForm = (data: ProfileFormType) => {
    console.log(data);
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(submitForm)}>
        <Stack spacing="9">
          <FormHelper mt="40px" label="이름" errorText={errors.name?.message}>
            <Input
              type="text"
              autoComplete="off"
              placeholder="홍길동"
              {...register('name')}
            />
          </FormHelper>
          <FormHelper
            mb="40px"
            label="닉네임"
            errorText={errors.nickname?.message}
          >
            <Input
              type="text"
              autoComplete="off"
              placeholder="전우치"
              {...register('nickname')}
            />
          </FormHelper>
          <FormHelper
            mb="40px"
            label="핸드폰 번호"
            errorText={errors.phone?.message}
          >
            <Input
              type="text"
              autoComplete="off"
              placeholder="010-XXXX-XXXX"
              {...register('phone')}
            />
          </FormHelper>
          <FormHelper
            mb="40px"
            label="이메일 주소"
            errorText={errors.email?.message}
          >
            <Input
              type="email"
              autoComplete="off"
              placeholder="test@example.com"
              {...register('email')}
            />
          </FormHelper>
        </Stack>

        <Input type="submit" mt="50px" />
      </Box>
    </>
  );
};

export default ProfileForm;
