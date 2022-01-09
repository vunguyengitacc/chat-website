import { Box, Card, Typography } from "@mui/material";
import React from "react";
import useProfileFormBoxStyle from "./style";

interface IProps {
  desc: string;
  name: string;
}

const ProfileFormBox: React.FC<IProps> = ({ desc, name, children }) => {
  const style = useProfileFormBoxStyle();
  return (
    <Card className={style.surface}>
      <Box className={style.header}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="subtitle2" sx={{ color: "grey !important" }}>
          {desc}
        </Typography>
      </Box>
      <Box className={style.content}>{children}</Box>
    </Card>
  );
};

export default ProfileFormBox;
