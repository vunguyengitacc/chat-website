import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import userApi from "../../api/userApi";
import { IUser } from "../../model/User";

interface AuthState {
  currentUser: IUser | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  isAuth: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { username: string; password: string }) => {
    let frm = new FormData();
    frm.append("username", payload.username);
    frm.append("password", payload.password);
    const res = await authApi.login(frm);
    return res.data;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload: Partial<IUser>) => {
    const res = await authApi.register(payload);
    return res.data;
  }
);

export const getMe = createAsyncThunk("auth/getMe", async () => {
  const res = await userApi.getMe();
  return res.data;
});

export const updateMe = createAsyncThunk(
  "auth/updateMe",
  async (payload: Partial<IUser>) => {
    const res = await userApi.updateMe(payload);
    return res.data;
  }
);
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (payload: { currentPassword: string; newPassword: string }) => {
    const res = await userApi.updatePassword(payload);
    console.log(res);
    return res.data;
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.currentUser = null;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state) => {
      state.currentUser = null;
      state.isAuth = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isAuth = false;
    });
    builder.addCase(
      login.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        localStorage.setItem("access_token", payload.access_token);
      }
    );
    builder.addCase(register.rejected, (state) => {
      state.currentUser = null;
      state.isAuth = false;
    });
    builder.addCase(register.pending, (state) => {
      state.isAuth = false;
    });
    builder.addCase(
      register.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        localStorage.setItem("access_token", payload.access_token);
      }
    );
    builder.addCase(getMe.rejected, (state) => {
      state.currentUser = null;
      state.isAuth = false;
    });
    builder.addCase(getMe.pending, (state) => {});
    builder.addCase(
      getMe.fulfilled,
      (state, { payload }: PayloadAction<IUser>) => {
        console.log(payload);
        state.currentUser = payload;
        state.isAuth = true;
      }
    );
    builder.addCase(updateMe.rejected, (state) => {});
    builder.addCase(updateMe.pending, (state) => {});
    builder.addCase(
      updateMe.fulfilled,
      (state, { payload }: PayloadAction<IUser>) => {
        state.currentUser = payload;
      }
    );
    builder.addCase(updatePassword.rejected, (state) => {});
    builder.addCase(updatePassword.pending, (state) => {});
    builder.addCase(
      updatePassword.fulfilled,
      (state, { payload }: PayloadAction<IUser>) => {
        state.currentUser = payload;
        state.isAuth = true;
      }
    );
  },
});

const { reducer: authReducer, actions } = authSlice;

export const { logout } = actions;
export default authReducer;
