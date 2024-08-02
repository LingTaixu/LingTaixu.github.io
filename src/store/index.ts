import { configureStore } from '@reduxjs/toolkit';
import userAddressReducer from '@/store/slices/userAddressSlice';

const store = configureStore({
  reducer: {
    userAddress: userAddressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
