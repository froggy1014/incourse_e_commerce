import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isLogin: boolean;
  address: string | null;
  age: number | null;
  email: string | null;
  gender: string | null;
  id: number | null;
  name: string | null;
  nickname: string | null;
  phone: string | null;
  profile: string | null;
}

const initialState: UserStateType = {
  isLogin: false,
  address: null,
  age: null,
  email: null,
  gender: null,
  id: null,
  name: null,
  nickname: null,
  phone: null,
  profile: null,
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserInfo: (state, { payload }) => {
      const {
        address,
        age,
        email,
        gender,
        id,
        name,
        nickname,
        phone,
        profile,
      } = payload;
      state.isLogin = true;
      state.address = address;
      state.age = age;
      state.email = email;
      state.gender = gender;
      state.id = id;
      state.name = name;
      state.nickname = nickname;
      state.phone = phone;
      state.profile = profile;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export const {
  actions: userSliceActions, //
  reducer: userSliceReducer,
} = userSlice;

export default userSlice;
