import axios from 'axios';

export const reviewFetch = axios.create({
  baseURL: 'https://api.commerce.incourse.run/v1/review/',
  headers: {
    accept: 'application/json',
  },
});

export const productFetch = axios.create({
  baseURL: 'https://api.commerce.incourse.run/v1/product/?page_size=5',
  headers: {
    accept: 'application/json',
  },
});
