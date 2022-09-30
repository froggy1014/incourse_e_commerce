import React, { useEffect, useRef } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Img,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';

import { FormHelper, SubmitButton } from '@components/common';
import { CardPayIcon } from '@components/common/@Icons/UI';

import { FormDataType } from './_hooks/useFormValidate';

interface userInfoType {
  name: string;
  phone: string;
}
interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
  userInfo: userInfoType;
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
  },
  onSubmit,
  userInfo,
  ...basisProps
}: FormPageProps) => {
  const SearchTrigger = useRef<HTMLButtonElement>(null);
  const addressSearchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('hi');
  };

  useEffect(() => {
    setValue('username', userInfo.name || '');
    setValue('phone', userInfo.phone || '');
  }, []);
  return (
    <>
      <Box as="form" onSubmit={onSubmit} {...basisProps}>
        <Text variant="pageTitle">주문결제</Text>
        <Stack divider={<Divider variant="fullthin" />}>
          <Text fontWeight="bold">주문 상품</Text>
          <HStack py="10px">
            <Img boxSize="60px" src="/images/ReviewImage.png" />
            <Box fontSize="12px">
              <Text fontWeight="bold">바스 & 샴푸</Text>
              <Text textColor="gray.600">바스 & 샴푸 | 120ml</Text>
              <Text variant="boldcommerse" fontWeight="bold">
                27,000원&nbsp;/&nbsp;1개
              </Text>
            </Box>
          </HStack>
          {/* s: Form */}
          {/* s: 주문자 정보 */}
          <Box>
            <Text fontWeight="bold" mt="35px">
              주문자 정보
            </Text>
            <FormHelper
              mt="2.5rem"
              mb="3.125rem"
              label="이름"
              errorText={errors.username?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                autoComplete="off"
                placeholder="홍길동"
                {...register('username')}
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="핸드폰 번호"
              errorText={errors.phone?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('phone')}
                autoComplete="off"
                placeholder="010-1234-1234"
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="주소"
              errorText={errors.adress?.message}
            >
              <Flex gap=".7rem" mb=".7rem">
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('adress')}
                  autoComplete="off"
                  placeholder="주소"
                  onClick={() => {
                    if (
                      SearchTrigger !== null &&
                      SearchTrigger.current !== null
                    )
                      SearchTrigger.current.click();
                  }}
                />
                <Button
                  h="40px"
                  size="sm"
                  fontWeight="bold"
                  borderRadius="5px"
                  colorScheme="commerse"
                  type="button"
                  ref={SearchTrigger}
                  onClick={addressSearchHandler}
                >
                  우편번호 검색
                </Button>
              </Flex>
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('adressDetail')}
                autoComplete="off"
                placeholder="주소 상세"
              />
            </FormHelper>
          </Box>
          {/* e: 주문자 정보 */}

          {/* s: 베송지 정보 */}
          <Box>
            <Text fontWeight="bold" mt="35px">
              배송지 정보
            </Text>
            <FormHelper
              mt="2.5rem"
              mb="3.125rem"
              label="이름"
              errorText={errors.orderUsername?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('orderUsername')}
                autoComplete="off"
                placeholder="홍길동"
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="핸드폰 번호"
              errorText={errors.orderPhone?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('orderPhone')}
                autoComplete="off"
                placeholder="010-1234-1234"
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="주소"
              errorText={errors.orderAdress?.message}
            >
              <Flex gap=".7rem" mb=".7rem">
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderAdress')}
                  autoComplete="off"
                  placeholder="주소"
                />
                <Button
                  h="40px"
                  size="sm"
                  fontWeight="bold"
                  borderRadius="5px"
                  colorScheme="commerse"
                  type="button"
                >
                  우편번호 검색
                </Button>
              </Flex>
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('orderAdressDetail')}
                autoComplete="off"
                placeholder="주소 상세"
              />
            </FormHelper>
            <FormHelper mb="3.125rem" label="배송요청사항">
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('orderRequest')}
                autoComplete="off"
              />
            </FormHelper>
          </Box>
          {/* s: 베송지 정보 */}

          {/* s: 결제 수단 */}
          <Text variant="bold16" mt="30px">
            결제수단
          </Text>
          <Flex>
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field: { onChange } }) => (
                <FormHelper my="20px" errorText={errors.paymentMethod?.message}>
                  <RadioGroup onChange={onChange} defaultValue="card">
                    <Radio value="card" colorScheme="commerse">
                      <Flex alignItems="center">
                        <Box mx="5px">
                          <CardPayIcon boxSize="50px" />
                        </Box>
                        <Text>신용카드 결제</Text>
                      </Flex>
                    </Radio>
                  </RadioGroup>
                </FormHelper>
              )}
            />
          </Flex>
          {/* e: 결제 수단 */}

          {/* s: 최종 결제 금액 */}
          <Stack>
            <Text variant="bold16" my="30px">
              최종 결제금액
            </Text>
            <Flex textColor="gray.600" mt="2.5rem">
              <Text>총 상품금액</Text>
              <Spacer />
              <Text>108,000 원</Text>
            </Flex>
            <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
              <Text>총 배송비</Text>
              <Spacer />
              <Text>0 원</Text>
            </Flex>
          </Stack>
          <Flex my="1.3rem">
            <Text>결제금액</Text>
            <Spacer />
            <Text variant="bold20commerse">108,000 원</Text>
          </Flex>
          <Box mt="10px">
            <Controller
              control={control}
              name="personalConsent"
              render={({ field: { onChange } }) => (
                <FormHelper errorText={errors.personalConsent?.message}>
                  <Checkbox
                    // onChange={onChange}
                    colorScheme="commerse"
                    size="lg"
                  >
                    <Text textColor="gray.600">
                      개인정보 수집 이용 동의(필수)
                    </Text>
                  </Checkbox>
                </FormHelper>
              )}
            />
            {/* Submit Button */}
            <SubmitButton
              title="결제하기"
              sizes="btnlg"
              variant="btncommerse"
              mt="40px"
              mb="80px"
            />
          </Box>
        </Stack>
        {/* e: 최종 결제 금액 */}
      </Box>
    </>
  );
};

export default FormPageView;
