import { Box } from "@mui/material";
import { IMessage } from "model/Message";
import React from "react";
import useMyMessageStyle from "./style";

interface IProps {
  value: IMessage;
}

const MyMessage: React.FC<IProps> = ({ value }) => {
  const style = useMyMessageStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.messsage}>{value.content}</Box>
    </Box>
  );
};

export default MyMessage;
