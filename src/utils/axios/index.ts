import axios from 'axios';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

interface JWTType {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
}

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const reviewFetch = axios.create({});

export const productFetch = axios.create({});

export const getProduct = async ({ pageParam = null }) => {
  let response;
  if (!pageParam) response = await axios.get('/product/');
  else response = await axios.get(`/product/?cursor=${pageParam}`);
  return response.data;
};

export const refreshReq = axios.create({});

export const modifyReq = axios.create({
  headers: {
    Authorization: `Bearer ${getCookie('access')}`,
  },
});

export const axiosInstance = axios.create({});

// axiosInstance 요청 인터셉터
axiosInstance.interceptors.request.use(
  async (req) => {
    const accessToken = getCookie('access');
    const refreshToken = getCookie('refresh');

    // access 토큰이 존재한다면 만료가 되었는지 확인 후 진행
    if (accessToken) {
      // jwt token 디코딩
      const user: JWTType = jwt_decode(String(getCookie('access')));
      // 현재 시간과 해당 토큰의 expiration날짜를 비교해서 만료되었는지 boolean 반환
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
      if (!isExpired) {
        console.log('req 정상');
        req.headers = {
          Authorization: `Bearer ${getCookie('access')}`,
        };
        return req;
      }
    }

    // access 토큰는 없는데 refresh 토큰이 있다면 토큰 재 요청
    if (refreshToken) {
      console.log('refresh 토큰');
      // 만료가 되었으니까 refresh해달라고 요청을 한다.
      const data = await refreshReq.post('/user/refresh/', {
        refresh: refreshToken,
      });
      // 새로 받은 토큰들 저장 후 기존 req 헤더에 넣어 재 요청
      const { access, refresh } = data.data;
      setCookie('access', access);
      setCookie('refresh', refresh);
      req.headers = {
        Authorization: `Bearer ${getCookie('access')}`,
      };
      return req;
    } else {
      return Promise.reject('login required');
    }
  },
  function (error) {
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
    console.log('res 비정상');
    console.log(error);
    if (error === 'login required') {
      window.location.href = `/login`;
    }
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
