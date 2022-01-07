import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";

const rootReducer = {
  authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
