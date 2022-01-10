import { Box } from "@mui/material";
import { RootState } from "app/reduxStore";
import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../../SearchItem/UserItem";
import useUserResultStyle from "./style";

const UserResult = () => {
  const users = useSelector((state: RootState) => state.searchReducer.users);

  const style = useUserResultStyle();

  return (
    <Box className={style.surface}>
      {users.map((i, index) => (
        <UserItem value={i} key={index} />
      ))}
    </Box>
  );
};

export default UserResult;
