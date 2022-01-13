import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "app/reduxStore";
import authApi from "../../api/authApi";
import userApi from "../../api/userApi";
import { IUser } from "../../model/User";

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
  const meRes = await userApi.getMe();
  const friendsRes = await userApi.getMyFriend();
  return { me: meRes.data, friends: friendsRes.data };
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
    return res.data;
  }
);

export const friendsAdapter = createEntityAdapter({
  selectId: (friend: IUser) => friend.id.valueOf(),
});

export const friendsSelector = friendsAdapter.getSelectors(
  (state: RootState) => state.authReducer.friends
);

interface AuthState {
  currentUser: IUser | null;
  isAuth: boolean;
  friends: EntityState<IUser>;
}

const initialState: AuthState = {
  currentUser: null,
  isAuth: false,
  friends: friendsAdapter.getInitialState(),
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.currentUser = null;
      localStorage.removeItem("access_token");
    },
    addFriend: (state, { payload }: PayloadAction<IUser>) => {
      friendsAdapter.addOne(state.friends, payload);
    },
    removeFriend: (state, { payload }: PayloadAction<IUser>) => {
      friendsAdapter.removeOne(state.friends, payload.id.toString());
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
      (state, { payload }: PayloadAction<{ me: IUser; friends: IUser[] }>) => {
        console.log(payload.me);
        state.currentUser = payload.me;
        friendsAdapter.setAll(state.friends, payload.friends);
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

export const { logout, addFriend, removeFriend } = actions;
export default authReducer;
