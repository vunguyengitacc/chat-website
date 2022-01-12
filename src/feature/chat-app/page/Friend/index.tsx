import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import FriendSidebar from "./component/FriendSidebar";

const FriendPage = () => {
  return (
    <Box display="flex">
      <Box width="35%" height="100vh">
        <FriendSidebar />
      </Box>
      <Box width="65%" height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
};

export default FriendPage;
