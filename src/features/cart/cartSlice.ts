import { createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  totalPrice: number;
  count: number;
  id: number;
  deliveryFee: number;
  product: any;
  isChecked: boolean;
  productId: number;
}

const initialState: UserStateType[] = [];

const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
    initCartState: (state, { payload }) => {
      if (payload.product === undefined) return;
      const idx = state.findIndex((e) => e.id === payload.id);
      const data = {
        count: payload.count,
        id: payload.id,
        deliveryFee: payload.product.price * payload.count >= 30000 ? 0 : 2500,
        product: payload.product,
        isChecked: false,
        totalPrice: payload.product.price * payload.count,
        productId: payload.productId,
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
      const idx = state.findIndex((e) => e.id === payload.id);
      state.splice(idx, 1);
    },
    toggleCartState: (state, { payload }) => {
      const idx = state.findIndex((e) => e.id === payload);
      state[idx] = {
        ...state[idx],
        isChecked: !state[idx].isChecked,
      };
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
