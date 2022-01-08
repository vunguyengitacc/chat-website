import { Box } from "@mui/material";
import RoomList from "feature/chat-app/component/RoomList";
import React from "react";
import { Outlet } from "react-router-dom";

const ChatPage = () => {
  return (
    <Box display="flex">
      <Box width="35%" height="100vh">
        <RoomList />
      </Box>
      <Box width="65%" height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
};

export default ChatPage;
