import router from 'next/router';

import { getCookie, setCookie } from 'cookies-next';

import { getCartInfo, getMe } from '@apis/_axios/axiosGet';
import { postCreateCart } from '@apis/_axios/axiosPost';

import { ROUTES } from '@constants/routes';

interface ICartInfo {
  id: number;
  cartitem: any;
  userId: number;
}

async function registerIds() {
  const myinfo = getMe();
  myinfo.then((data) => {
    setCookie('userId', data.id);
    const cartInfo = getCartInfo(data.id);
    registerCartId(cartInfo);
  });
}

async function registerCartId(cartInfo: Promise<ICartInfo[]>) {
  cartInfo.then((data: ICartInfo[]) => {
    if (data.length !== 0) {
      setCookie('cartId', data[0].id);
      router.replace(ROUTES.MAIN);
    } else {
      const response = postCreateCart(Number(getCookie('userId')));
      response.then((data) => setCookie('cartId', data.id));
    }
  });
}

export default registerIds;
