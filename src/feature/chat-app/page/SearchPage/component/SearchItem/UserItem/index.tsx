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
import useUserSearchItemStyle from "./style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { IUser } from "model/User";

interface IProps {
  value: IUser;
}

const UserItem: React.FC<IProps> = ({ value }) => {
  const style = useUserSearchItemStyle();
  return (
    <Card className={style.surface}>
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <Stack direction="row" gap="20px" flexGrow={1}>
          <Avatar className={style.avatar} src={value.avatarURI} />
          <Stack direction="column" flexGrow={1}>
            <Typography variant="h6">{value.name}</Typography>
            <Typography variant="body1">{value.name}</Typography>
            <Typography variant="body1">{value.bio}</Typography>
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

export default UserItem;
