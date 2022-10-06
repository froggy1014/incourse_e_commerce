import axios from 'axios';

export const reviewFetch = axios.create({
  baseURL: 'https://api.commerce.incourse.run/v1/review/',
  headers: {
    accept: 'application/json',
  },
});

export const productFetch = axios.create({
  baseURL: 'https://api.commerce.incourse.run/v1/product',
  headers: {
    accept: 'application/json',
  },
});

export const socialLoginReq = axios.create({
  baseURL: 'https://api.commerce.incourse.run/v1/user/social_login/',
  headers: {
    'content-type': 'application/json',
  },
});
