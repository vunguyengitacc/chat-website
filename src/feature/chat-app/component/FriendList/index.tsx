import { Box } from "@mui/material";
import React from "react";
import FriendHeader from "../FriendHeader";
import useFriendListStyle from "./style";

const FriendList = () => {
  const style = useFriendListStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <FriendHeader />
      </Box>
      <Box className={style.list}>List here</Box>
    </Box>
  );
};

export default FriendList;
