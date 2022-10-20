import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { RootStateOrAny, useSelector } from 'react-redux';

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
  useDisclosure,
} from '@chakra-ui/react';

import { useGetItemInfo } from '@components/CartPage/_hook/useCartData';
import { FormHelper, Loading, SubmitButton } from '@components/common';
import { CardPayIcon } from '@components/common/@Icons/UI';

import { axiosInstance } from '@utils/axios';
import { addHyphenPhone, intComma } from '@utils/format';

import AddressModal from './_fragment/AddressModal';
import { FormDataType } from './_hooks/useFormValidate';
import { useGetme } from './_hooks/useQueries';

interface priceType {
  total: number;
  delivery: number;
  productId: number[];
  count: number[];
}
interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
  prices: priceType;
  setPrices: Dispatch<SetStateAction<priceType>>;
  products: any[];
  setProducts: Dispatch<SetStateAction<any[]>>;
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
    getValues,
  },
  onSubmit,
  prices,
  setPrices,
  products,
  setProducts,
  ...basisProps
}: FormPageProps) => {
  const checkBoxTrigger = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [btn, setBtn] = useState(true);
  const [copy, setCopy] = useState(true);
  const SearchTrigger = useRef<HTMLButtonElement>(null);
  const state = useSelector((state: RootStateOrAny) => state.CART);
  const { data } = useGetme();

  const changeHandler = () => {
    setCopy(!copy);
    const { username, phone, address, addressDetail } = getValues();
    setValue('orderUsername', copy ? username : '', { shouldValidate: true });
    setValue('orderPhone', copy ? phone : '', { shouldValidate: true });
    setValue('orderAddress', copy ? address : '', { shouldValidate: true });
    setValue('orderAddressDetail', copy ? addressDetail : '', {
      shouldValidate: true,
    });
  };
  useEffect(() => {
    if (data) {
      state.map((item: any) => {
        if (item.isChecked === true) {
          setPrices((prices) => ({
            total: prices.total + item.totalPrice,
            delivery: prices.delivery + item.deliveryFee,
            productId: [...prices.productId, item.productId],
            count: [...prices.count, item.count],
          }));
          const newProduct = { ...item.product, count: item.count };
          setProducts((products) => [...products, newProduct]);
        }
        setValue('username', data?.name);
        setValue('phone', addHyphenPhone(data.phone));
      });
    }
  }, [data]);

  if (!products) return <Loading />;
  return (
    <>
      <Box as="form" onSubmit={onSubmit} {...basisProps}>
        <Text variant="pageTitle">주문결제</Text>
        <Stack divider={<Divider variant="fullthin" />}>
          <Text fontWeight="bold">주문 상품</Text>
          <Stack>
            {products.map((product) => {
              console.log(product);
              return (
                <HStack w="100%" py="10px" key={product.id}>
                  <Img boxSize="60px" src="/images/ReviewImage.png" />
                  <Box fontSize="12px">
                    <Text fontWeight="bold">{product.name}</Text>
                    <Text textColor="gray.600">{`${product.name} | ${product.capacity}ml`}</Text>
                    <Text variant="boldcommerse" fontWeight="bold">
                      {`${product.price}원 ${product.count}개`}
                    </Text>
                  </Box>
                </HStack>
              );
            })}
          </Stack>
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
              errorText={errors.address?.message}
            >
              <Flex gap=".7rem" mb=".7rem">
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('address')}
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
                  onClick={onOpen}
                >
                  우편번호 검색
                </Button>
              </Flex>
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('addressDetail')}
                autoComplete="off"
                placeholder="주소 상세"
              />
            </FormHelper>
          </Box>
          {/* e: 주문자 정보 */}

          {/* s: 베송지 정보 */}
          <Box>
            <HStack
              justify="space-between"
              align="center"
              textAlign="center"
              mt="35px"
            >
              <Text fontWeight="bold">배송지 정보</Text>
              <Checkbox
                colorScheme="commerse"
                color="gray.600"
                onChange={changeHandler}
              >
                주문자 정보와 동일
              </Checkbox>
            </HStack>
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
              errorText={errors.orderAddress?.message}
            >
              <Flex gap=".7rem" mb=".7rem">
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderAddress')}
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
                {...register('orderAddressDetail')}
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
              <Text>{intComma(prices.total)}원</Text>
            </Flex>
            <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
              <Text>총 배송비</Text>
              <Spacer />
              <Text>{intComma(prices.delivery)}원</Text>
            </Flex>
          </Stack>
          <Flex my="1.3rem">
            <Text>결제금액</Text>
            <Spacer />
            <Text variant="bold20commerse">
              {intComma(prices.total + prices.delivery)}원
            </Text>
          </Flex>
          <Box mt="10px">
            <Controller
              control={control}
              name="personalConsent"
              render={({ field: { onChange } }) => (
                <FormHelper errorText={errors.personalConsent?.message}>
                  <Flex>
                    <Checkbox
                      colorScheme="commerse"
                      size="lg"
                      mr="10px"
                      ref={checkBoxTrigger}
                      onChange={() => {
                        onChange();
                        setBtn(!btn);
                      }}
                    />
                    <Text
                      textColor="gray.600"
                      onClick={() => {
                        if (checkBoxTrigger.current !== null)
                          checkBoxTrigger.current.click();
                      }}
                    >
                      개인정보 수집 이용 동의(필수)
                    </Text>
                  </Flex>
                </FormHelper>
              )}
            />
            {/* Submit Button */}
            <SubmitButton
              isDisabled={btn}
              title="결제하기"
              size="btnlg"
              variant="btncommerse"
              mt="40px"
              mb="80px"
            />
          </Box>
        </Stack>
        {/* e: 최종 결제 금액 */}
        {/* <TestComponent /> */}
      </Box>
      <AddressModal isOpen={isOpen} onClose={onClose} setValue={setValue} />
    </>
  );
};

export default FormPageView;
