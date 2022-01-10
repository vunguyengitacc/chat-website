import { Box } from "@mui/material";
import React from "react";
import RoomItem from "../RoomItem";
import useRoomListStyle from "./style";

const RoomList = () => {
  const style = useRoomListStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.itemSpace}>
        <RoomItem roomId="1" />
      </Box>
      <Box className={style.itemSpace}>
        <RoomItem roomId="2" />
      </Box>
      <Box className={style.itemSpace}>
        <RoomItem roomId="3" />
      </Box>
      <Box className={style.itemSpace}>
        <RoomItem roomId="4" />
      </Box>
    </Box>
  );
};

export default RoomList;
