import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import RoomListSidebar from "./component/RoomListSidebar";

const ChatPage = () => {
  return (
    <Box display="flex">
      <Box width="35%" height="100vh">
        <RoomListSidebar />
      </Box>
      <Box width="65%" height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
};

export default ChatPage;
