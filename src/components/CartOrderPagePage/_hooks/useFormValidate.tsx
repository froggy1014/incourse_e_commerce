import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

// type username = { user: string; order: string; message: string };

export type FormDataType = {
  username: string;
  phone: string;
  address: string;
  addressDetail: string;
  orderUsername: string;
  orderPhone: string;
  orderAddress: string;
  orderAddressDetail: string;
  orderRequest: string;
  paymentMethod: string;
  personalConsent: string;
};

/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */

export const signupFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('이름을 꼭 넣어주세요')
    .min(2, '성과 이름 다 기입해주세요,.'),
  phone: yup
    .string()
    .required('핸드폰 번호는 넣어주세요')
    .matches(
      /^\d{2,3}-\d{3,4}-\d{3,4}$/,
      " '-' 기호도 넣어주시고, 번호를 다시한번 확인해주세요.",
    ),
  address: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '정확한 주소를 입력해주세요.'),
  addressDetail: yup.string(),
  orderUsername: yup
    .string()
    .required('이름을 꼭 넣어주세요')
    .min(2, '성과 이름 다 기입해주세요,.'),
  orderPhone: yup
    .string()
    .required('핸드폰 번호는 넣어주세요')
    .matches(
      /^\d{2,3}-\d{3,4}-\d{3,4}$/,
      " '-' 기호도 넣어주시고, 번호를 다시한번 확인해주세요.",
    ),
  orderAddress: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '정확한 주소를 입력해주세요.'),
  orderAddressDetail: yup.string(),
  orderRequest: yup.string(),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(signupFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useFormValidate;
