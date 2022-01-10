import { Box, Typography } from "@mui/material";
import { RootState } from "app/reduxStore";
import React from "react";
import { useSelector } from "react-redux";
import GroupItem from "../../SearchItem/GroupItem";
import UserItem from "../../SearchItem/UserItem";
import useAllResultStyle from "./style";

const AllResult = () => {
  const users = useSelector((state: RootState) => state.searchReducer.users);
  const rooms = useSelector((state: RootState) => state.searchReducer.rooms);

  const style = useAllResultStyle();

  return (
    <Box className={style.surface}>
      {users.length > 0 && <Typography variant="h6">User</Typography>}
      {users.length > 0 &&
        users.map((i, index) => <UserItem value={i} key={index} />)}
      {rooms.length > 0 && <Typography variant="h6">Room</Typography>}
      {rooms.length > 0 &&
        rooms.map((i, index) => <GroupItem value={i} key={index} />)}
    </Box>
  );
};

export default AllResult;
