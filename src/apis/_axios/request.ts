import request from './core';
import { IPostOrder, IPostReturn } from './sharedType';

export async function get(url: string) {
  return await request
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function postOrderId(data: IPostOrder): Promise<IPostReturn> {
  return await request
    .post('order/', data)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
