import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import { IRoom } from "model/Room";
import React from "react";
import useChatBoxHeaderStyle from "./style";
import SettingsIcon from "@mui/icons-material/Settings";
import getAvatar from "utility/avatar";

interface IProps {
  room?: IRoom;
  setOpenDrawer: (value: boolean) => void;
}

const ChatBoxHeader: React.FC<IProps> = ({ room, setOpenDrawer }) => {
  const style = useChatBoxHeaderStyle();
  return (
    <Box className={style.surface}>
      <Stack flexDirection="row" alignItems="center" gap="15px">
        <Badge overlap="circular" variant="dot" color="success">
          <Avatar src={getAvatar(room?.coverImage[0], room?.name)} />
        </Badge>
        <Stack>
          <Typography variant="subtitle1">{room?.name}</Typography>
          <Typography variant="subtitle2">Online</Typography>
        </Stack>
      </Stack>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default ChatBoxHeader;
