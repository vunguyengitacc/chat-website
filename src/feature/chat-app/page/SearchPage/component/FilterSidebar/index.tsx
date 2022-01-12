import { Box, Button, Typography } from "@mui/material";
import RoomItem from "feature/chat-app/page/ChatPage/component/RoomItem";
import React from "react";
import { NavLink } from "react-router-dom";
import LinkSearch from "../LinkSearch";
import useFilterSidebarStyle from "./style";

const FilterSidebar = () => {
  const style = useFilterSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="subtitle1">
          <b>Filters option</b>
        </Typography>
      </Box>

      <LinkSearch to="all" text="All result" />
      <LinkSearch to="user" text="User only" />
      <LinkSearch to="group" text="Group only" />
    </Box>
  );
};

export default FilterSidebar;
