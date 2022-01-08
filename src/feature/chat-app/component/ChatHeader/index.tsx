import {
  Box,
  IconButton,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useChatHeaderStyle from "./style";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Header = () => {
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
          <OutlinedInput />
        </Box>
        <Box width="60%">
          <TextField fullWidth />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
