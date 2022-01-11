import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useFastSearchSidebarStyle, { activeStyle } from "./style";

const FastSearchSidebar = () => {
  const style = useFastSearchSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="subtitle1">
          <b>Fast searchs</b>
        </Typography>
      </Box>
      <NavLink
        style={(isActive) => (isActive ? activeStyle : {})}
        to="all"
        className={style.link}
      >
        <Box padding="10px">
          <Typography variant="h6">Waiting friend request</Typography>
        </Box>
      </NavLink>
      <NavLink
        style={(isActive) => (isActive ? activeStyle : {})}
        to="user"
        className={style.link}
      >
        <Box padding="10px">
          <Typography variant="h6">Waiting accept join</Typography>
        </Box>
      </NavLink>
      <NavLink
        style={(isActive) => (isActive ? activeStyle : {})}
        to="user"
        className={style.link}
      >
        <Box padding="10px">
          <Typography variant="h6">Ask to be friend</Typography>
        </Box>
      </NavLink>
    </Box>
  );
};

export default FastSearchSidebar;
