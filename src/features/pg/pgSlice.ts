import { createSlice } from '@reduxjs/toolkit';

interface pgTypes {
  productList: any;
  price: number;
  total: number;
  id: number;
  name: string;
  count: number;
}

const initialState = {
  productList: [],
  price: 0,
  id: 0,
  name: '',
  count: 1,
  total: 0,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    storeProduct: (_state: pgTypes, { payload }) => {
      _state.productList = payload;
    },
    incProduct: (_state: pgTypes) => {
      _state.count = _state.count + 1;
      _state.total = _state.total + _state.price;
    },
    decProduct: (_state: pgTypes) => {
      if (_state.count > 1) {
        _state.count = _state.count - 1;
        _state.total = _state.total - _state.price;
      }
    },
    focusProduct: (_state: pgTypes, { payload }) => {
      _state.id = payload[0];
      _state.price = payload[1];
      _state.name = payload[2];
      _state.total = _state.price;
      _state.count = 1;
    },
  },
});

export const { incProduct, storeProduct, focusProduct, decProduct } =
  productSlice.actions;

export const {
  actions: productSliceAction, //
  reducer: productSliceReducer,
} = productSlice;

export default productSlice;
