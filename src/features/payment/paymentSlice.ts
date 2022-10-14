import { createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  totalPrice: number[];
  count: number[];
  id: number[];
  deliveryFee: number[];
  price: number[];
  isChecked: boolean[];
}

const initialState: UserStateType = {
  totalPrice: [],
  count: [],
  id: [],
  deliveryFee: [],
  price: [],
  isChecked: [],
};

const paymentSlice = createSlice({
  name: 'PAYMENT',
  initialState,
  reducers: {
    initPaymentState: (state, { payload }) => {
      if (payload.price === undefined) return;
      if (state.id.every((id) => id !== payload.id)) {
        state.price.push(payload.price);
        state.totalPrice.push(payload.price * payload.count);
        state.count.push(payload.count);
        state.id.push(payload.id);
        state.isChecked.push(false);
        state.deliveryFee.push(
          payload.price * payload.count >= 30000 ? 0 : 2500,
        );
      }
    },
    incPaymentState: (state, { payload }) => {
      const idx = state.id.indexOf(payload.id);
      state.count[idx] = state.count[idx] + 1;
      state.totalPrice[idx] = state.price[idx] * state.count[idx];
      state.deliveryFee[idx] = state.totalPrice[idx] >= 30000 ? 0 : 2500;
    },
    decPaymentState: (state, { payload }) => {
      const idx = state.id.indexOf(payload.id);
      if (state.count[idx] === 1) return;
      state.count[idx] = state.count[idx] - 1;
      state.totalPrice[idx] = state.price[idx] * state.count[idx];
      state.deliveryFee[idx] = state.totalPrice[idx] >= 30000 ? 0 : 2500;
    },
    togglePaymentState: (state, { payload }) => {
      const idx = state.id.indexOf(payload);
      state.isChecked[idx] = !state.isChecked[idx];
    },
    clearPaymentState: (state) => {
      for (let i = 0; i < state.isChecked.length; i++) {
        state.isChecked[i] = false;
      }
    },
    allTogglePaymentState: (state) => {
      for (let i = 0; i < state.isChecked.length; i++) {
        state.isChecked[i] = true;
      }
    },
    emptyPaymentState: (state, { payload }) => {
      const idx = state.id.indexOf(payload);
      state.price[idx] = 0;
      state.totalPrice[idx] = 0;
      state.count[idx] = 0;
      state.id[idx] = 0;
      state.isChecked[idx] = false;
      state.deliveryFee[idx] = 0;
    },
  },
});

export const {
  initPaymentState,
  incPaymentState,
  decPaymentState,
  togglePaymentState,
  clearPaymentState,
  allTogglePaymentState,
  emptyPaymentState,
} = paymentSlice.actions;

export const {
  actions: paymentSliceActions, //
  reducer: paymentSliceReducer,
} = paymentSlice;

export default paymentSlice;
