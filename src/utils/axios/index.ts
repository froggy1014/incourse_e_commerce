import axios from 'axios';

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';
axios.defaults.headers.common['accept'] = 'application/json';

export const reviewFetch = axios.create({});

export const productFetch = axios.create({});

export const socialLoginReq = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});
