import {
  Box,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useChatHeaderStyle from "./style";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/reduxStore";
import { setRoomFilter } from "feature/chat-app/roomSlice";
import RoomCreator from "../RoomCreator";

const Header = () => {
  const [openCreator, setOpenCreator] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRoomFilter(e.currentTarget.value));
  };

  const style = useChatHeaderStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.headerField}>
        <Box>
          <Typography variant="h5">
            <b>Chats</b>
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton onClick={() => setOpenCreator(true)}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={style.searchField}>
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
      <Modal open={openCreator} onClose={() => setOpenCreator(false)}>
        <RoomCreator onClose={setOpenCreator} />
      </Modal>
    </Box>
  );
};

export default Header;
