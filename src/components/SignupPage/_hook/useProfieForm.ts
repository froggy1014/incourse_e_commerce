import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type ProfileFormType = {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  gender: string;
  ages: string;
};

export const ProfileSchema = yup.object().shape({
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
  gender: yup.string().required('성별을 꼭 선택해주세요.'),
  ages: yup.string().required('연령대를 꼭 선택해주세요'),
});

const useProfileForm = (options?: UseFormProps<ProfileFormType>) => {
  return useForm<ProfileFormType>({
    resolver: yupResolver(ProfileSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useProfileForm;
