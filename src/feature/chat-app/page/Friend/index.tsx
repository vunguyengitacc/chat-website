import { Box } from "@mui/material";
import React from "react";
import FriendList from "feature/chat-app/component/FriendList";

const FriendPage = () => {
  return (
    <Box display="flex">
      <Box width="35%" height="100vh">
        <FriendList />
      </Box>
      <Box width="65%" height="100vh">
        Hello
      </Box>
    </Box>
  );
};

export default FriendPage;
