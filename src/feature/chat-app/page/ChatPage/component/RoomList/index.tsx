import { Box } from "@mui/material";
import { RootState } from "app/reduxStore";
import { roomSelector } from "feature/chat-app/roomSlice";
import React from "react";
import { useSelector } from "react-redux";
import RoomItem from "../RoomItem";
import useRoomListStyle from "./style";

const RoomList = () => {
  const rooms = useSelector((state: RootState) =>
    roomSelector.selectAll(state)
  );
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
