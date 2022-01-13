import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import LinkSearch from "../LinkSearch";
import useFastSearchSidebarStyle from "./style";

const FastSearchSidebar = () => {
  const style = useFastSearchSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="subtitle1">
          <b>Fast searchs</b>
        </Typography>
      </Box>
      <LinkSearch to="user" text="Waiting friend request" />
      <LinkSearch to="user" text="Waiting accept join" />
      <LinkSearch to="user" text="Ask to be friend" />
    </Box>
  );
};

export default FastSearchSidebar;
