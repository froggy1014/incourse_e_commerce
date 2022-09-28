import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
  Box,
  ChakraProps,
  Divider,
  FormControl,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

interface MypageWithdrawalPageProps extends ChakraProps {}

interface FormData {
  reasonWhy: string;
  isRobot: string;
  detailReason?: string;
}

function MypageWithdrawalPage({ ...basisProps }: MypageWithdrawalPageProps) {
  const router = useRouter();
  const [etc, setEtc] = useState('');
  const [flag, setFlag] = useState(true);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: string) => {
    if (e === '기타') {
      setFlag(false);
      inputRef.current?.focus();
    } else setFlag(true);
  };

  const onSubmit = handleSubmit((data) => {
    if (data.reasonWhy === '기타') {
      data = {
        ...data,
        detailReason: etc,
      };
      console.log(data);
    } else console.log(data);
  });

  return (
    <Stack as="form" onSubmit={onSubmit} {...basisProps}>
      <Text pt="50px" pb="80px" variant="bold20">
        회원탈퇴
      </Text>
      <Text
        bg="gray.100"
        py="18px"
        px="16px"
        w="375px"
        transform={'translateX(-16px)'}
      >
        회원 탈퇴 시 개인 정보 및 인코스런에서 만들어진 모든 데이터는
        삭제됩니다. 한 번 삭제된 정보는 복구가 불가능합니다.
      </Text>
      <Stack
        divider={
          <Divider
            w="375px"
            bg="gray.100"
            h="10px"
            transform={'translateX(-16px)'}
          />
        }
      >
        <Box>
          <Text fontWeight="bold" py="14px">
            회원정보
          </Text>
          <HStack>
            <Stack mr="24px">
              <Text>이름</Text>
              <Text>핸드폰 번호</Text>
              <Text>이메일 주소</Text>
            </Stack>
            <Stack color="gray.700">
              <Text>김인코스런</Text>
              <Text>010-1234-1234</Text>
              <Text>incourse.run@gmail.com</Text>
            </Stack>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight="bold" py="14px">
            탈퇴사유
          </Text>
          <FormControl as="fieldset">
            <Controller
              control={control}
              name="reasonWhy"
              render={({ field: { onChange } }) => {
                return (
                  <RadioGroup
                    {...register('reasonWhy', { required: true })}
                    onChange={(e) => {
                      onChange();
                      handleChange(e);
                    }}
                    colorScheme={'commerse'}
                    mb="20px"
                  >
                    <Stack>
                      <Radio {...register('reasonWhy')} value="아이디 변경">
                        아이디 변경(재가입)
                      </Radio>
                      <Radio {...register('reasonWhy')} value="낮은 구매 빈도">
                        낮은 구매 빈도
                      </Radio>
                      <Radio
                        {...register('reasonWhy')}
                        value="서비스 및 고객지원 불만족"
                      >
                        서비스 및 고객지원 불만족
                      </Radio>
                      <Radio {...register('reasonWhy')} value="타 브랜드 이용">
                        타 브랜드 이용
                      </Radio>
                      <Radio {...register('reasonWhy')} value="기타">
                        기타
                      </Radio>
                      <Input
                        isRequired
                        ref={inputRef}
                        disabled={flag}
                        onChange={(e) => setEtc(e.target.value)}
                        type="text"
                        placeholder="사유를 입력해주세요."
                      />
                      {!flag && errors.detailReason?.type === 'min' && (
                        <Text color="warning.500">사유를 꼭 입력해주세요.</Text>
                      )}
                    </Stack>
                  </RadioGroup>
                );
              }}
            />
          </FormControl>
        </Box>
        <Stack mb="80px">
          <Text mt="10px" variant="bold16">
            인코스런을 입력해주세요.
          </Text>
          <Input
            {...register('isRobot', {
              required: true,
              pattern: {
                value: /인코스런/,
                message: '정확히 입력해주세요.',
              },
            })}
            autoComplete="off"
          />
          {errors.isRobot?.message && (
            <Text color="warning.500">{errors.isRobot?.message}</Text>
          )}
        </Stack>
      </Stack>

      <HStack justify="space-between" pb="30px">
        <SubmitButton
          title="취소"
          variant="btnwhite"
          sizes="btnsm"
          mb="0px"
          type="button"
          onClick={() => router.back()}
        />
        <SubmitButton title="탈퇴하기" variant="btncommerse" sizes="btnsm" />
      </HStack>
    </Stack>
  );
}

export default MypageWithdrawalPage;
