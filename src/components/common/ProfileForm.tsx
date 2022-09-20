import React from 'react';
import { useForm } from 'react-hook-form';

import { Box, Input, Stack } from '@chakra-ui/react';

import FormHelper from './FormHelper';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
