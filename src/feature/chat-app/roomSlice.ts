import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import roomApi from "api/roomApi";
import { RootState } from "app/reduxStore";
import { IRoom } from "model/Room";

export const getMyRoom = createAsyncThunk("room/getMyRoom", async () => {
  const res = await roomApi.getMyRooms();
  return res.data;
});

export const roomAdapter = createEntityAdapter({
  selectId: (room: IRoom) => room.id.toString(),
});

export const roomSelector = roomAdapter.getSelectors(
  (state: RootState) => state.roomReducer.rooms
);

const roomSlice = createSlice({
  name: "room",
  initialState: {
    rooms: roomAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyRoom.rejected, (state) => {});
    builder.addCase(getMyRoom.pending, (state) => {});
    builder.addCase(
      getMyRoom.fulfilled,
      (state, { payload }: PayloadAction<IRoom[]>) => {
        roomAdapter.setAll(state.rooms, payload);
      }
    );
  },
});
const { reducer: roomReducer, actions } = roomSlice;

export const {} = actions;
export default roomReducer;
