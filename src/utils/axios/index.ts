import axios from 'axios';

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';

export const reviewFetch = axios.create({});

export const productFetch = axios.create({});

export const myInfoFetch = axios.create({});

export const socialLoginReq = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});

export const signupReq = axios.create({
  headers: {
    'content-type': 'application/json',
    'X-CSRFTOKEN':
      'Xg4e4jPmoyIJlqvPz0UapDrVksjVSjY6yUGVPfZxA6zMMbNluGCfpWQl5sFBXL0C',
  },
});
