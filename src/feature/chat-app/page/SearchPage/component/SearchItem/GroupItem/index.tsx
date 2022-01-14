import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useGroupSearchItemStyle from "./style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { IRoom } from "model/Room";

interface IProps {
  value: IRoom;
}

const GroupItem: React.FC<IProps> = ({ value }) => {
  const style = useGroupSearchItemStyle();
  return (
    <Card className={style.surface}>
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <Stack direction="row" gap="20px" flexGrow={1}>
          <Avatar className={style.avatar} src={"as"} />
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
