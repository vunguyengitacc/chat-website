import { configureStore } from "@reduxjs/toolkit";
import authReducer from "feature/auth/authSlice";
import roomReducer from "feature/chat-app/roomSlice";

const rootReducer = {
  authReducer,
  roomReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
