import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import roomApi from "api/roomApi";
import userApi from "api/userApi";
import { IRoom } from "model/Room";
import { IUser } from "model/User";

interface ISearchProps {
  users: IUser[];
  rooms: IRoom[];
  term: string;
}

let initialState: ISearchProps = {
  rooms: [],
  users: [],
  term: "",
};

export const doSearch = createAsyncThunk(
  "search/doSearch",
  async (payload: { term: string }) => {
    const user = await userApi.search(payload);
    const room = await roomApi.search(payload);
    return { users: user.data, rooms: room.data, term: payload.term };
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.rooms = [];
      state.users = [];
      state.term = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doSearch.rejected, (state) => {
      state.term = "";
      state.users = [];
    });
    builder.addCase(doSearch.pending, () => {});
    builder.addCase(
      doSearch.fulfilled,
      (
        state,
        {
          payload,
        }: PayloadAction<{ users: IUser[]; rooms: IRoom[]; term: string }>
      ) => {
        console.log(payload);
        state.term = payload.term;
        state.users = payload.users;
        state.rooms = payload.rooms;
      }
    );
  },
});

const { reducer: searchReducer, actions } = searchSlice;

export const { reset } = actions;
export default searchReducer;
