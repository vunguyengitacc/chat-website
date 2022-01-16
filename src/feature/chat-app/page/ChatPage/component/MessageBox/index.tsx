import { Box, Typography } from "@mui/material";
import { RootState } from "app/reduxStore";
import { messageSelector } from "feature/chat-app/roomSlice";
import React from "react";
import { useSelector } from "react-redux";
import MyMessage from "../Message/MyMessage";
import OtherMessage from "../Message/OtherMessage";
import useMessageBoxStyle from "./style";

interface IProps {
  roomId: Number;
}

const MessageBox: React.FC<IProps> = ({ roomId }) => {
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );
  const messages = useSelector((state: RootState) =>
    messageSelector.selectAll(state).filter((i) => i.roomId === Number(roomId))
  );

  const style = useMessageBoxStyle();
  return (
    <Box className={style.surface}>
      {messages.map((i, index) => {
        if (i.owner.id === currentUser?.id)
          return <MyMessage key={index} value={i} />;
        else return <OtherMessage key={index} value={i} />;
      })}
    </Box>
  );
};

export default MessageBox;
