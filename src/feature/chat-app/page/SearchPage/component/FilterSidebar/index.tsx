import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useFilterSidebarStyle, { activeStyle } from "./style";

const FilterSidebar = () => {
  const style = useFilterSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="subtitle1">
          <b>Filters option</b>
        </Typography>
      </Box>
      <NavLink
        style={(isActive) => (isActive ? activeStyle : {})}
        to="all"
        className={style.link}
      >
        <Box padding="10px">
          <Typography variant="h6">All</Typography>
        </Box>
      </NavLink>
      <NavLink
        style={(isActive) => (isActive ? activeStyle : {})}
        to="user"
        className={style.link}
      >
        <Box padding="10px">
          <Typography variant="h6">User</Typography>
        </Box>
      </NavLink>
      <NavLink
        style={(isActive) => (isActive ? activeStyle : {})}
        to="group"
        className={style.link}
      >
        <Box padding="10px">
          <Typography variant="h6">Group</Typography>
        </Box>
      </NavLink>
    </Box>
  );
};

export default FilterSidebar;
