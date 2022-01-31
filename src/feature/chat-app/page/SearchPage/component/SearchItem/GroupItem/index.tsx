import {
  Avatar,
  Box,
  Card,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useGroupSearchItemStyle from "./style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { IRoom } from "model/Room";
import RoomAvatar from "feature/chat-app/component/RoomAvatar";

interface IProps {
  value: IRoom;
}

const GroupItem: React.FC<IProps> = ({ value }) => {
  const style = useGroupSearchItemStyle();
  return (
    <Card className={style.surface}>
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <Stack direction="row" gap="20px" flexGrow={1}>
          <Box width="20%">
            <RoomAvatar coverImage={value.coverImage} />
          </Box>
          <Stack direction="column" flexGrow={1}>
            <Typography variant="h6">{value.name}</Typography>
            <Typography variant="body1">{value.name}</Typography>
            <Typography variant="body1">
              {value.memberIds.length} member
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="center">
          <IconButton>
            <PersonAddAltIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default GroupItem;
