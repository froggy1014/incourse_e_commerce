import request from './core';

export async function get(url: string) {
  return await request
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function post(url: string, body: any) {
  return await request
    .post(url, body)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function patch(url: string, body: any) {
  return await request
    .patch(url, body)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function del(url: string) {
  return await request
    .delete(url)
    // .then((res) => res.data)
    .catch((error) => console.log(error));
}
