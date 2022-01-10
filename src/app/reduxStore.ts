import { configureStore } from "@reduxjs/toolkit";
import authReducer from "feature/auth/authSlice";
import searchReducer from "feature/chat-app/page/SearchPage/searchSlice";

const rootReducer = {
  authReducer,
  searchReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
