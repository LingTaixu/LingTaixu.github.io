import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAddressState {
  address: string;
}

const initialState: UserAddressState = {
  address: '',
};

const userAddressSlice = createSlice({
  name: 'userAddress',
  initialState,
  reducers: {
    // 添加用户地址
    addAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    // 清空用户地址
    removeAddress: (state) => {
      state.address = '';
    },
  },
});

export const { addAddress, removeAddress } = userAddressSlice.actions;
export default userAddressSlice.reducer;
