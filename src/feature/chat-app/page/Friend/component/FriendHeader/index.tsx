import React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import useFriendHeaderStyle from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/reduxStore";
import { setFilterFriend } from "feature/auth/authSlice";

const FriendHeader = () => {
  const filterFriend = useSelector(
    (state: RootState) => state.authReducer.filterFriend
  );

  const style = useFriendHeaderStyle();

  const dispatch = useDispatch<AppDispatch>();

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterFriend(e.currentTarget.value));
  };

  return (
    <Box className={style.surface}>
      <Box className={style.headerField}>
        <Box>
          <Typography variant="h5">
            <b>Friends</b>
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box className={style.searchField}>
        <Box width="100%">
          <InputBase
            sx={{
              border: "solid 2px #e7e7e7",
              padding: "5px",
              borderRadius: "3px",
            }}
            fullWidth
            placeholder="Type to search..."
            onChange={filterHandler}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FriendHeader;
