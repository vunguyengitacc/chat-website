import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { AppDispatch, RootState } from "app/reduxStore";
import {
  getMessageInRoom,
  messageSelector,
  roomSelector,
} from "feature/chat-app/roomSlice";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ChatBoxHeader from "../ChatBoxHeader";
import useChatBoxStyle from "./style";
import messageApi from "api/messageApi";

const ChatBox = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const { id } = useParams();
  const navigator = useNavigate();
  const style = useChatBoxStyle();
  const dispatch = useDispatch<AppDispatch>();
  const room = useSelector((state: RootState) =>
    roomSelector.selectById(state, Number(id))
  );
  const messages = useSelector((state: RootState) =>
    messageSelector.selectAll(state).filter((i) => i.roomId == Number(id))
  );
  const isFetch = useSelector(
    (state: RootState) =>
      state.roomReducer.alreadyFetch.filter((i) => i === Number(id)).length > 0
  );

  useEffect(() => {
    if (isFetch === false) dispatch(getMessageInRoom({ id: Number(id) }));
  }, [isFetch]);

  return (
    <Box>
      <Box height="80px" width="100%">
        <ChatBoxHeader setOpenDrawer={setIsOpenDrawer} room={room} />
      </Box>
      {messages.map((i) => (
        <Typography>{i.content}</Typography>
      ))}
      <Drawer
        variant="temporary"
        anchor="right"
        classes={{
          paper: style.paper,
        }}
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        hideBackdrop
      >
        <Box className={style.menu}>
          <Typography variant="h6">Room profiles</Typography>
          <IconButton onClick={() => setIsOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ChatBox;
