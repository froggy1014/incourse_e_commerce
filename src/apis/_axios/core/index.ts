import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

request.defaults.headers.post['Content-Type'] = 'application/json';

export default request;
