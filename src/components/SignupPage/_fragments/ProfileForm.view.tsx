import Link from 'next/link';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

// import * as yup from 'yup';
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';

import { FormHelper, SubmitButton } from '@components/common/index';
import { AddProfile, ProfileIcon } from '@icons/UI';

import { fileToBase64 } from '@utils/file';

import { ProfileFormType } from '../_hook/useProfieForm';
import AgreementCheck from './AgreementCheck';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<ProfileFormType>;
  signup?: boolean;
  userInfo?: {
    name?: string;
    nickname?: string;
    phone?: string;
    email?: string;
    gender?: string;
    ages?: number;
  };
  setProfile: Dispatch<SetStateAction<string | null | ArrayBuffer>>;
  profile: string | ArrayBuffer | null | undefined;
}

const ProfileFormView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
  },
  userInfo,
  onSubmit,
  setProfile,
  profile,
  ...basisProps
}: FormPageProps) => {
  const fileTrigger = useRef<HTMLInputElement>(null);
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file !== undefined) setCurrentFile(file);
  };
  useEffect(() => {
    async function setter() {
      if (!currentFile) return;
      setProfile(await fileToBase64(currentFile));
    }
    setter();
  }, [currentFile]);
  const [check, setCheck] = useState<string[]>([]);
  const [signup, setSignup] = useState(true);
  useEffect(() => {
    if (userInfo !== undefined) {
      setValue('name', userInfo.name || '');
      setValue('nickname', userInfo.nickname || '');
      setValue('phone', userInfo.phone || '');
      setValue('email', userInfo.email || '');
      setValue('gender', userInfo.gender || '');
      setValue('ages', userInfo.ages || 0);
      setSignup(false);
    }
  }, []);
  return (
    <Box as="form" onSubmit={onSubmit} {...basisProps}>
      {signup ? (
        <>
          <Heading as="h3" fontSize="26px" w="100%">
            회원가입
          </Heading>
          <Box w="343px" h="auto" mt="60px">
            <Heading as="h4" fontSize="md">
              회원정보입력
            </Heading>
            <Flex w="100%" justify="center" mt="40px">
              <Box m="10px" position="relative">
                <input
                  style={{ display: 'none' }}
                  type="file"
                  ref={fileTrigger}
                  onChange={fileSelectedHandler}
                />
                <Image
                  cursor="pointer"
                  boxSize="70px"
                  rounded={'full'}
                  objectFit="cover"
                  alt="upload img"
                  src={typeof profile === 'string' ? profile : undefined}
                  onClick={() => {
                    if (fileTrigger !== null && fileTrigger.current !== null)
                      fileTrigger.current.click();
                  }}
                />
                <AddProfile position="absolute" right="0" bottom="0" />
              </Box>
            </Flex>
          </Box>
        </>
      ) : (
        <Box w="343px" h="auto" mt="60px">
          <Heading as="h4" fontSize="md">
            회원정보수정
          </Heading>
          <Flex w="100%" justify="center" mt="80px">
            <ProfileIcon />
          </Flex>
        </Box>
      )}

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

      <Text variant="bold16" mt="80px" mb="40px">
        추가정보입력(선택)
      </Text>
      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange } }) => (
          <FormHelper mb="40px" label="성별" errorText={errors.gender?.message}>
            <Select
              {...register('gender')}
              onChange={onChange}
              focusBorderColor="gray.500"
              placeholder="성별을 선택하세요."
              errorBorderColor="warning.500"
              variant="flushed"
            >
              <option value="male" color="black">
                남자
              </option>
              <option value="female">여자</option>
            </Select>
          </FormHelper>
        )}
      />

      <Controller
        control={control}
        name="ages"
        render={({ field: { onChange } }) => (
          <FormHelper mb="40px" label="연령대" errorText={errors.ages?.message}>
            <Select
              {...register('ages')}
              onChange={onChange}
              focusBorderColor="gray.500"
              defaultValue={0}
              placeholder="연령대를 선택하세요."
              errorBorderColor="warning.500"
              variant="flushed"
            >
              <option value={10}>10대</option>
              <option value={20}>20대</option>
              <option value={30}>30대</option>
              <option value={40}>40대</option>
              <option value={50}>50대 이상</option>
            </Select>
          </FormHelper>
        )}
      />
      {signup ? (
        <>
          <Stack spacing="9" mt="80px" mb="95px">
            <AgreementCheck setCheck={setCheck} check={check} />
          </Stack>
          <SubmitButton
            title="회원가입 완료"
            isDisabled={check.length !== 3 ? true : false}
            variant="btncommerse"
            size="btnlg"
          />
        </>
      ) : (
        <Flex justify="space-between" w="100%" align="center" mt="80px">
          <Link href="/mypage">
            <a>
              <SubmitButton
                title="취소"
                variant="btnwhite"
                size="btnsm"
                type="button"
              />
            </a>
          </Link>
          <SubmitButton title="저장" variant="btncommerse" size="btnsm" />
        </Flex>
      )}
    </Box>
  );
};

export default ProfileFormView;
