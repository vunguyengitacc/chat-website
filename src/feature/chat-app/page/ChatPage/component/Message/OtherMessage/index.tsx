import { Avatar, Box } from "@mui/material";
import { IMessage } from "model/Message";
import React from "react";
import useOtherMessageStyle from "./style";

interface IProps {
  value: IMessage;
}

const OtherMessage: React.FC<IProps> = ({ value }) => {
  const style = useOtherMessageStyle();
  return (
    <Box className={style.surface}>
      <Avatar
        className={style.avatar}
        src={
          value.owner.avatarURI ??
          `https://avatars.dicebear.com/4.5/api/initials/${value.owner.name}.svg`
        }
      />
      <Box className={style.messsage}>{value.content}</Box>
    </Box>
  );
};

export default OtherMessage;
