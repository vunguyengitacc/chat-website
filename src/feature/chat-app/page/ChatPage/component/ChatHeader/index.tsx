import { Box, IconButton, InputBase, Typography } from "@mui/material";
import React from "react";
import useChatHeaderStyle from "./style";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/reduxStore";
import { setRoomFilter } from "feature/chat-app/roomSlice";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRoomFilter(e.currentTarget.value));
  };

  const style = useChatHeaderStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.headerField}>
        <Box>
          <Typography variant="h5">Chats</Typography>
        </Box>
        <Box>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={style.searchField}>
        <Box width="40%">
          <InputBase
            sx={{
              border: "solid .5px #e7e7e7",
              padding: "5px",
              borderRadius: "3px",
            }}
            fullWidth
          />
        </Box>
        <Box width="60%">
          <InputBase
            sx={{
              border: "solid .5px #e7e7e7",
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

export default Header;
