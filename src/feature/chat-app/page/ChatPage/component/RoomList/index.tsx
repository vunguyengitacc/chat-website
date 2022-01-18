import { Box } from "@mui/material";
import { RootState } from "app/reduxStore";
import { roomSelector } from "feature/chat-app/roomSlice";
import React from "react";
import { useSelector } from "react-redux";
import RoomItem from "../RoomItem";
import useRoomListStyle from "./style";

const RoomList = () => {
  const filter = useSelector(
    (state: RootState) => state.roomReducer.roomFilter
  );
  const rooms = useSelector((state: RootState) => {
    let rs = roomSelector.selectAll(state);
    if (filter === "") return rs;
    return rs.filter((i) =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
  });
  const style = useRoomListStyle();
  return (
    <Box className={style.surface}>
      {rooms.map((i, index) => (
        <Box key={index} className={style.itemSpace}>
          <RoomItem value={i} />
        </Box>
      ))}
    </Box>
  );
};

export default RoomList;
