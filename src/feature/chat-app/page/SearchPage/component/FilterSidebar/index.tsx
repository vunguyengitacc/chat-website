import { Box, Button, Typography } from "@mui/material";
import RoomItem from "feature/chat-app/page/ChatPage/component/RoomItem";
import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import LinkSearch from "../LinkSearch";
import useFilterSidebarStyle from "./style";

const FilterSidebar = () => {
  const style = useFilterSidebarStyle();

  const [searchParams] = useSearchParams();

  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="subtitle1">
          <b>Search types</b>
        </Typography>
      </Box>

      <LinkSearch
        to={`all?term=${searchParams.get("term")}`}
        text="All result"
      />
      <LinkSearch
        to={`user?term=${searchParams.get("term")}`}
        text="User only"
      />
      <LinkSearch
        to={`group?term=${searchParams.get("term")}`}
        text="Group only"
      />
    </Box>
  );
};

export default FilterSidebar;
