import { del } from '../request';

export async function delCartItem(pk: number) {
  return await del(`cart/item/${pk}/`);
}
