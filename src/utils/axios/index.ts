import router from 'next/router';

import axios from 'axios';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';

const baseURL = 'https://api.commerce.incourse.run/v1/';

export const reviewFetch = axios.create({});

export const productFetch = axios.create({});

export const refreshReq = axios.create({});

export const axiosInstance = axios.create({});

// axiosInstance 요청 인터셉터
axiosInstance.interceptors.request.use(
  async (req) => {
    console.log('req 정상');
    return req;
  },
  function (error) {
    console.log('req 비정상');
    return Promise.reject(error);
  },
);

// axiosInstance 응답 인터셉터
axiosInstance.interceptors.response.use(
  function (response) {
    console.log('res 정상');
    return response;
  },
  async function (error) {
    // error 코드 444 인경우 refresh POST 요청하여,
    // access, refresh 토큰 재 등록
    if (error.response.status === 444) {
      const refreshToken = getCookie('refresh');
      console.log('토큰 만료');
      console.log(refreshToken);
      const data = await refreshReq.post('/user/refresh/', {
        refresh: refreshToken,
      });
      const { access, refresh } = data.data;
      console.log('쿠키 새로 등록');
      setCookie('access', access);
      setCookie('refresh', refresh);
      return await axiosInstance('user/me/', {
        headers: { Authorization: `Bearer ${access}` },
      });
    }
    console.log('res 비정상');
    return Promise.reject(error);
  },
);

export const socialLoginReq = axios.create({
  headers: {
    'content-type': 'application/json',
    'X-CSRFTOKEN':
      'Xg4e4jPmoyIJlqvPz0UapDrVksjVSjY6yUGVPfZxA6zMMbNluGCfpWQl5sFBXL0C',
  },
});

export const withdrawalReq = axios.create({});

export const signupReq = axios.create({
  headers: {
    'content-type': 'application/json',
    'X-CSRFTOKEN':
      'Xg4e4jPmoyIJlqvPz0UapDrVksjVSjY6yUGVPfZxA6zMMbNluGCfpWQl5sFBXL0C',
  },
});
