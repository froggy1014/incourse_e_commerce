import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

import { ROUTES } from '@constants/routes';

import { postRequestToken } from '../axiosPost';
import { JWTType } from './core';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

request.defaults.headers.post['Content-Type'] = 'application/json';

// request 요청 인터셉터
request.interceptors.request.use(
  (request) => request,
  (error) => {
    return Promise.reject(error);
  },
);

// request 응답 인터셉터
request.interceptors.response.use(
  (response) => {
    console.log('No error');
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const accessToken = getCookie('access');
    const refreshToken = getCookie('refresh');
    switch (error.response.status) {
      case 401:
        if (!accessToken && !refreshToken) {
          window.location.replace(ROUTES.LOGIN);
        }

        // access 토큰이 존재한다면 만료가 되었는지 확인 후 진행
        if (accessToken) {
          // jwt token 디코딩
          console.log('accessToekn');
          const user: JWTType = jwt_decode(String(getCookie('access')));
          // 현재 시간과 해당 토큰의 expiration날짜를 비교해서 만료되었는지 boolean 반환
          const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
          if (!isExpired) {
            request.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${getCookie('access')}`;
            return request(originalRequest);
          }
        }

        // access 토큰는 없는데 refresh 토큰이 있다면 토큰 재 요청
        if (refreshToken) {
          console.log('Toekn Refresh');
          // 만료가 되었으니까 refresh해달라고 요청을 한다.
          const { access, refresh } = await postRequestToken();
          // 새로 받은 토큰들 저장 후 기존 req 헤더에 넣어 재 요청
          setCookie('access', access);
          setCookie('refresh', refresh);
          request.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${getCookie('access')}`;
          return request(originalRequest);
        }
        break;
      case 404:
        if (accessToken) {
          request.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${accessToken}`;
          return request(originalRequest);
        } else if (refreshToken) {
          // 만료가 되었으니까 refresh해달라고 요청을 한다.
          const { access, refresh } = await postRequestToken();
          // 새로 받은 토큰들 저장 후 기존 req 헤더에 넣어 재 요청
          setCookie('access', access);
          setCookie('refresh', refresh);
          request.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${getCookie('access')}`;
          return request(originalRequest);
        }
        break;
      case 0:
        window.location.replace(ROUTES.LOGIN);
        break;
      default:
        console.log('다없음');
        return Promise.reject(error);
    }
  },
);

export default request;
