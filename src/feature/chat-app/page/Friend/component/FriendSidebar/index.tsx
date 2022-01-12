import { Box } from "@mui/material";
import { RootState } from "app/reduxStore";
import { friendsSelector } from "feature/auth/authSlice";
import React from "react";
import { useSelector } from "react-redux";
import FriendHeader from "../FriendHeader";
import FriendItem from "../FriendItem";
import useFriendSidebarStyle from "./style";

const FriendSidebar = () => {
  const friends = useSelector((state: RootState) =>
    friendsSelector.selectAll(state)
  );

  const style = useFriendSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <FriendHeader />
      </Box>
      <Box className={style.list}>
        {friends.map((item, index) => (
          <FriendItem value={item} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default FriendSidebar;
