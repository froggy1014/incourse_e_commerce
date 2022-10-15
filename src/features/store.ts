// //@delete:line
import cartSlice from '@features/cart/cartSlice';
import counterSlice from '@features/counter/counterSlice';
import detailReviewsSlice from '@features/detailReview/detailReviewSlice';
// import modalSlice from '@features/modal/modalSlice';
import pgSlice from '@features/pg/pgSlice';
import userSlice from '@features/user/userSlice';

import { configureStore } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      // [modalSlice.name]: modalSlice.reducer,
      [pgSlice.name]: pgSlice.reducer,
      [detailReviewsSlice.name]: detailReviewsSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
    },
  });
}

const store = makeStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
