import router from 'next/router';

import { getCookie, setCookie } from 'cookies-next';

import { getCartInfo, getMe } from '@apis/_axios/get/axiosGet';
import { postCreateCart } from '@apis/_axios/post/axiosPost';

import { ROUTES } from '@constants/routes';

interface ICartInfo {
  id: number;
  cartitem: string[];
  userId: number;
}

// Cookie에 User ID를 저장합니다.
async function registerIds() {
  const myinfo = await getMe();
  setCookie('userId', myinfo.id);
  const cartInfo = await getCartInfo(myinfo.id);
  registerCartId(cartInfo);
}

// 앞서 가져온 cartInfo를 이용해서 cartId를 새로 생성 혹은 Cookie에 저장합니다.
async function registerCartId(cartInfo: ICartInfo[]) {
  if (cartInfo.length !== 0) {
    setCookie('cartId', cartInfo[0].id);
    router.replace(ROUTES.MAIN);
  } else {
    const response = await postCreateCart(Number(getCookie('userId')));
    setCookie('cartId', response.id);
  }
}

export default registerIds;
