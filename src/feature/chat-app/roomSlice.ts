import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import messageApi from "api/messageApi";
import roomApi from "api/roomApi";
import { RootState } from "app/reduxStore";
import { IMessage } from "model/Message";
import { IRoom } from "model/Room";

export const getMyRoom = createAsyncThunk("room/getMyRoom", async () => {
  const res = await roomApi.getMyRooms();
  return res.data;
});

export const getMessageInRoom = createAsyncThunk(
  "room/getMessageInRoom",
  async (payload: { id: Number }) => {
    console.log("fetching");
    const res = await messageApi.getByRoom(payload);
    return { id: payload.id, data: res.data };
  }
);

interface IChatState {
  roomFilter: string;
  alreadyFetch: Number[];
  rooms: EntityState<IRoom>;
  messages: EntityState<IMessage>;
}

export const roomAdapter = createEntityAdapter({
  selectId: (room: IRoom) => room.id.toString(),
});

export const messageAdapter = createEntityAdapter({
  selectId: (message: IMessage) => message.id.toString(),
});

export const roomSelector = roomAdapter.getSelectors(
  (state: RootState) => state.roomReducer.rooms
);

export const messageSelector = messageAdapter.getSelectors(
  (state: RootState) => state.roomReducer.messages
);

const initialState: IChatState = {
  roomFilter: "",
  alreadyFetch: [],
  messages: messageAdapter.getInitialState(),
  rooms: roomAdapter.getInitialState(),
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addOneRoom: (state, { payload }: PayloadAction<IRoom>) => {
      roomAdapter.addOne(state.rooms, payload);
    },
    removeOneRoom: (state, { payload }: PayloadAction<Number>) => {
      roomAdapter.removeOne(state.rooms, payload.toString());
    },
    addMessage: (state, { payload }: PayloadAction<IMessage>) => {
      if (
        state.rooms.ids.filter(
          (i) => i.valueOf().toString() === payload.roomId.toString()
        ).length > 0
      ) {
        messageAdapter.addOne(state.messages, payload);
      }
    },
    setRoomFilter: (state, { payload }: PayloadAction<string>) => {
      state.roomFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMyRoom.rejected, (state) => {});
    builder.addCase(getMyRoom.pending, (state) => {});
    builder.addCase(
      getMyRoom.fulfilled,
      (state, { payload }: PayloadAction<IRoom[]>) => {
        roomAdapter.setAll(state.rooms, payload);
      }
    );
    builder.addCase(getMessageInRoom.rejected, (state) => {});
    builder.addCase(getMessageInRoom.pending, (state) => {});
    builder.addCase(
      getMessageInRoom.fulfilled,
      (state, { payload }: PayloadAction<{ data: IMessage[]; id: Number }>) => {
        messageAdapter.addMany(state.messages, payload.data);
        state.alreadyFetch.push(payload.id);
      }
    );
  },
});
const { reducer: roomReducer, actions } = roomSlice;

export const { addOneRoom, removeOneRoom, addMessage, setRoomFilter } = actions;
export default roomReducer;
