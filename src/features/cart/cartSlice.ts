import { createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  totalPrice: number;
  count: number;
  id: number;
  deliveryFee: number;
  product: any;
  isChecked: boolean | null;
  productId: number;
  cartId: number;
}

const initialState: UserStateType[] = [];

const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
    initCartState: (state, { payload }) => {
      if (payload.product === undefined) return;
      const idx = state.findIndex((e) => e.id === payload.cartItem.id);
      const data = {
        count: payload.cartItem.count,
        id: payload.cartItem.id,
        deliveryFee:
          payload.product.price * payload.cartItem.count >= 30000 ? 0 : 2500,
        product: payload.product,
        isChecked: false,
        totalPrice: payload.product.price * payload.cartItem.count,
        productId: payload.cartItem.productId,
        cartId: payload.cartItem.cartId,
      };
      if (idx === -1) state.push(data);
      else state[idx] = data;
    },
    incCartState: (state, { payload }) => {
      const idx = state.findIndex((e) => e.id === payload.id);
      state[idx] = {
        ...state[idx],
        count: state[idx].count + 1,
        totalPrice: state[idx].totalPrice + state[idx].product.price,
        deliveryFee:
          state[idx].totalPrice + state[idx].product.price >= 30000 ? 0 : 2500,
      };
    },
    decCartState: (state, { payload }) => {
      const idx = state.findIndex((e) => e.id === payload.id);
      state[idx] = {
        ...state[idx],
        count: state[idx].count - 1,
        totalPrice: state[idx].totalPrice - state[idx].product.price,
        deliveryFee:
          state[idx].totalPrice + state[idx].product.price >= 30000 ? 0 : 2500,
      };
    },
    delCartState: (state, { payload }) => {
      const idx = state.findIndex((e) => e.id === payload);
      state[idx] = {
        ...state[idx],
        isChecked: null,
        totalPrice: 0,
        deliveryFee: 0,
        count: 0,
      };
    },
    toggleCartState: (state, { payload }) => {
      console.log(payload);
      if (payload !== '0') {
        const idx = state.findIndex((e) => e.id === Number(payload));
        state[idx] = {
          ...state[idx],
          isChecked: !state[idx]?.isChecked,
        };
      } else {
        if (state.every((b) => b.isChecked === false)) {
          for (let i = 0; i < state.length; i++) {
            state[i] = {
              ...state[i],
              isChecked: true,
            };
          }
        } else {
          for (let i = 0; i < state.length; i++) {
            state[i] = {
              ...state[i],
              isChecked: false,
            };
          }
        }
      }
    },
    clearUpCartState: (state) => {
      for (let i = 0; i < state.length; i++) {
        state[i].isChecked = false;
      }
    },
  },
});

export const {
  initCartState,
  incCartState,
  decCartState,
  delCartState,
  toggleCartState,
  clearUpCartState,
} = cartSlice.actions;

export const {
  actions: cartSliceActions, //
  reducer: cartSliceReducer,
} = cartSlice;

export default cartSlice;
