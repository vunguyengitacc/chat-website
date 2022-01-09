import { Box, Typography } from "@mui/material";
import React from "react";
import AccountReview from "../AccountReview";
import useUserSidebarStyle from "./style";

const UserSidebar = () => {
  const style = useUserSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <Typography variant="h6">Profile</Typography>
        <Typography variant="subtitle1">
          Personal Information & Settings
        </Typography>
      </Box>
      <Box className={style.review}>
        <AccountReview />
      </Box>
    </Box>
  );
};

export default UserSidebar;
