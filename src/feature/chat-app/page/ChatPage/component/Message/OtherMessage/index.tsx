import { Avatar, Box, Typography } from "@mui/material";
import { IMessage } from "model/Message";
import React, { useState } from "react";
import { getTimeDistance, getTimeWithDistance } from "utility/msg-date";
import useOtherMessageStyle from "./style";

interface IProps {
  value: IMessage;
  nextMsg?: IMessage;
  oldMsg?: IMessage;
}

const OtherMessage: React.FC<IProps> = ({ value, nextMsg, oldMsg }) => {
  const style = useOtherMessageStyle();

  const getTime = () => {
    let date = new Date(value.createdDate);
    if (nextMsg !== undefined && nextMsg.owner.id === value.owner.id) {
      return getTimeWithDistance(date, new Date(nextMsg?.createdDate));
    } else return getTimeDistance(date);
  };

  const isRenderAvatar =
    oldMsg !== undefined
      ? oldMsg.owner.id === value.owner.id
        ? new Date(value.createdDate).getTime() -
            new Date(oldMsg.createdDate).getTime() >
          1000 * 60 * 10
        : true
      : true;
  const isMarginBottom =
    nextMsg !== undefined
      ? new Date(nextMsg.createdDate).getTime() -
          new Date(value.createdDate).getTime() >
        1000 * 60 * 10
      : true;

  return (
    <Box
      className={style.surface}
      marginBottom={isMarginBottom ? "0" : "-12px"}
    >
      {isRenderAvatar && (
        <Avatar
          className={style.avatar}
          src={
            value.owner.avatarURI ??
            `https://avatars.dicebear.com/4.5/api/initials/${value.owner.name}.svg`
          }
        />
      )}
      <Box
        className={style.messageBox}
        marginLeft={isRenderAvatar ? "0" : "60px"}
      >
        <Box className={style.messsage}>{value.content}</Box>
        <Typography variant="subtitle2">{getTime()}</Typography>
      </Box>
    </Box>
  );
};

export default OtherMessage;
