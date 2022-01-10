import { Box } from "@mui/material";
import React from "react";
import Header from "../ChatHeader";
import RoomList from "../RoomList";
import useRoomListSidebarStyle from "./style";

const RoomListSidebar = () => {
  const style = useRoomListSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Header />
      </Box>
      <Box className={style.list}>
        <RoomList />
      </Box>
    </Box>
  );
};

export default RoomListSidebar;
