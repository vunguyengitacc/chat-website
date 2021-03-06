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
          <b>Convenient searchs</b>
        </Typography>
      </Box>
      <LinkSearch to="convenient/suggest" text="Suggest friend" />
      <LinkSearch to="convenient/request" text="Ask to be friend" />
      <LinkSearch to="convenient/wait" text="Waiting friend request" />
    </Box>
  );
};

export default FastSearchSidebar;
