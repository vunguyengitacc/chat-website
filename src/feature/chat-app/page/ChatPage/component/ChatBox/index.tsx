import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { AppDispatch, RootState } from "app/reduxStore";
import { getMessageInRoom, roomSelector } from "feature/chat-app/roomSlice";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ChatBoxHeader from "../ChatBoxHeader";
import useChatBoxStyle from "./style";
import MessageBox from "../MessageBox";
import MessageSender from "../MessageSender";
import RoomProfile from "../RoomProfile";

const ChatBox = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const { id } = useParams();
  const navigator = useNavigate();
  const style = useChatBoxStyle();
  const dispatch = useDispatch<AppDispatch>();
  const room = useSelector((state: RootState) =>
    roomSelector.selectById(state, Number(id))
  );
  const isFetch = useSelector(
    (state: RootState) =>
      state.roomReducer.alreadyFetch.filter((i) => i === Number(id)).length > 0
  );

  useEffect(() => {
    if (isFetch === false) dispatch(getMessageInRoom({ id: Number(id) }));
  }, [isFetch]);

  return (
    <Box className={style.surface}>
      <Box height="80px" width="100%">
        <ChatBoxHeader setOpenDrawer={setIsOpenDrawer} room={room} />
      </Box>
      <Box className={style.messageBox}>
        {room && <MessageBox roomId={room.id} />}
      </Box>
      <Box className={style.sender}>
        {room && <MessageSender roomId={room.id} />}
      </Box>
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
        <Box className={style.content}>
          {room && <RoomProfile roomId={room.id} />}
        </Box>
      </Drawer>
    </Box>
  );
};

export default ChatBox;
