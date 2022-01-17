import { Box, Typography } from "@mui/material";
import { IMessage } from "model/Message";
import React from "react";
import { getTimeDistance, getTimeWithDistance } from "utility/msg-date";
import useMyMessageStyle from "./style";

interface IProps {
  value: IMessage;
  nextMsg?: IMessage;
  oldMsg?: IMessage;
}

const MyMessage: React.FC<IProps> = ({ value, nextMsg }) => {
  const style = useMyMessageStyle();

  const getTime = () => {
    let date = new Date(value.createdDate);
    if (nextMsg !== undefined && nextMsg.owner.id === value.owner.id) {
      return getTimeWithDistance(date, new Date(nextMsg?.createdDate));
    } else return getTimeDistance(date);
  };

  const isMarginBottom =
    nextMsg !== undefined
      ? new Date(nextMsg.createdDate).getTime() -
          new Date(value.createdDate).getTime() >
        1000 * 60 * 10
      : true;

  return (
    <Box className={style.surface} marginBottom={isMarginBottom ? "" : "-10px"}>
      <Box className={style.messsage}>{value.content}</Box>
      <Typography variant="subtitle2">{getTime()}</Typography>
    </Box>
  );
};

export default MyMessage;
