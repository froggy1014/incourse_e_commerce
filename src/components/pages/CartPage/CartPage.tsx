import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { cloneDeep } from 'lodash';

import {
  Box,
  ChakraProps,
  Checkbox,
  Divider,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

import { clearUpCartState, toggleCartState } from '@features/cart/cartSlice';

import { ROUTES } from '@constants/routes';
import { Loading, SubmitButton } from '@shareComponents/index';
import { intComma } from '@utils/format';

import CartCard from './_fragment/CartCard';
import EmptyCart from './_fragment/EmptyCart';
import { useGetCart } from './_hook/useCartData';

interface CartPageProps extends ChakraProps {
  userId: string;
}

interface CartType {
  cartId: number;
  count: number;
  id: number;
  productId: number;
}
function CartPage({ ...props }: CartPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [prices, setPrices] = useState({
    total: 0,
    delivery: 0,
  });

  // 처음들어왔을때, redux에 isChecked를 다 false로 초기화 시켜줌
  useEffect(() => {
    dispatch(clearUpCartState());
    setPrices({ total: 0, delivery: 0 });
  }, [dispatch]);

  // Redux Store
  const state = useSelector((state: RootStateOrAny) => state.CART);
  // Cart 아이템 Get Hook
  const { isLoading, data: cart } = useGetCart(Number(props.userId));

  // 장바구니 아이템만큼의 Array를 만들어서 check 배열로 사용
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  // allChecked 버튼으로 일괄적 토글을 위한 변수
  const allChecked = checkedItems.every((b) => b === true);
  // 하나라도 체크가 되어있다면 표시 되게끔 체크박스 아이콘이 바뀜
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  // 체크박스 이벤트
  // 토글하게되면 해당되는 장바구니 Slice에 아이디를 넘겨서 isChecked를 true로 만들어줌
  // 해당 인덱스에 해당되는 check배열을 toggle해줌
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    cartItem: CartType,
  ) => {
    dispatch(toggleCartState(cartItem.id));
    const newArr = checkedItems.map((v, idx) =>
      idx === Number(e.target.value) ? !v : v,
    );
    setCheckedItems(newArr);
  };

  // 체크박스가 toggle되거나 count가 바뀌면 총 상품, 배송비 업데이트해줌
  useEffect(() => {
    if (cart && checkedItems.length !== cart.length && prices.total === 0) {
      setCheckedItems(Array(cart.length).fill(false));
    }
    let price = 0;
    let delivery = 0;
    state
      .filter((obj: any) => obj.isChecked === true)
      .map((item: any) => {
        price += item.totalPrice;
        delivery += item.deliveryFee;
      });
    setPrices({
      total: price,
      delivery: delivery,
    });
  }, [state, cart]);
  if (isLoading || cart === undefined) return <Loading />;
  if (cart[0].cartitem.length === 0) return <EmptyCart />;
  else
    return (
      <Box>
        <Stack divider={<Divider bg="gray.200" h="10px" />}>
          <HStack color="gray.600" justify="space-between">
            <Checkbox
              value={0}
              colorScheme="commerse"
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) => {
                if (checkedItems.every((b) => b === true)) {
                  setCheckedItems(cloneDeep(checkedItems.fill(false)));
                } else {
                  setCheckedItems(cloneDeep(checkedItems.fill(true)));
                }
                dispatch(toggleCartState(e.target.value));
              }}
            >
              모두선택
            </Checkbox>
            <Text>선택삭제</Text>
          </HStack>
          {cart[0].cartitem.map((cartItem: CartType, i: number) => {
            return (
              <HStack key={cartItem.id} align="start">
                <Checkbox
                  value={i}
                  isChecked={checkedItems[i]}
                  colorScheme="commerse"
                  onChange={(e) => handleChange(e, cartItem)}
                ></Checkbox>
                <CartCard
                  cartItem={cartItem}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              </HStack>
            );
          })}
          <Stack h="auto" spacing="4" pb="70px">
            <HStack color="gray.600" justify="space-between">
              <Text>총 상품금액</Text>
              <Text>{prices.total}원</Text>
            </HStack>
            <HStack color="gray.600" justify="space-between">
              <Text>총 배송비</Text>
              <Text>{prices.delivery}원</Text>
            </HStack>
            <Divider />
            <HStack justify="space-between">
              <Text>결제금액</Text>
              <Text variant="boldcommerse">
                {intComma(prices.total + prices.delivery)}원
              </Text>
            </HStack>
            <SubmitButton
              disabled={checkedItems.every((b) => b === false)}
              title="결제하기"
              size="btnlg"
              variant="btncommerse"
              onClick={() => {
                const cartItems = state
                  .map((item: any, i: number) => {
                    if (item.isChecked === true) return state[i].id;
                  })
                  .filter((v: boolean | undefined) => v !== undefined);
                router.push(ROUTES.PURCHASE.MAIN + `/?items=${cartItems}`);
              }}
            />
          </Stack>
        </Stack>
      </Box>
    );
}

export default CartPage;
