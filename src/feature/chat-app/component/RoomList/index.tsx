import { Box } from "@mui/material";
import React from "react";
import Header from "../ChatHeader";
import useRoomListStyle from "./style";

const RoomList = () => {
  const style = useRoomListStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Header />
      </Box>
      <Box className={style.list}>List here</Box>
    </Box>
  );
};

export default RoomList;
