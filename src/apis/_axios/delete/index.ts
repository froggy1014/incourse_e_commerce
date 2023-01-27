import request from '../core';
import { del } from '../request';

export async function delCartItem(pk: number): Promise<any> {
  return await del(`cart/item/${pk}/`);
}
