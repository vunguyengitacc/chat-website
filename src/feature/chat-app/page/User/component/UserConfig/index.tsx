import { Box, Typography } from "@mui/material";
import React from "react";
import useUserConfigStyle from "./style";

const UserConfig = () => {
  const style = useUserConfigStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="h6">Settings</Typography>
        <Typography variant="subtitle1">
          Update Personal Information & Settings
        </Typography>
      </Box>
      <Box className={style.config}>Sett</Box>
    </Box>
  );
};

export default UserConfig;
