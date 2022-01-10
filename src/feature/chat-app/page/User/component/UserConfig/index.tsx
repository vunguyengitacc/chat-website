import { Box, Typography } from "@mui/material";
import React from "react";
import ChangePasswordForm from "../ChangePasswordForm";
import ProfileFormBox from "../ProfileFormBox";
import UpdateInforForm from "../UpdateInforForm";
import UpdatePrivacyForm from "../UpdatePrivacyForm";
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
      <Box className={style.config}>
        <Box>
          <ProfileFormBox
            name="User information"
            desc="Update personal & contact information"
          >
            <UpdateInforForm />
          </ProfileFormBox>
        </Box>
        <Box marginTop="30px">
          <ProfileFormBox name="Password" desc="Update password">
            <ChangePasswordForm />
          </ProfileFormBox>
        </Box>
        <Box marginTop="30px">
          <ProfileFormBox
            name="Security"
            desc="Update your custom account privacy"
          >
            <UpdatePrivacyForm />
          </ProfileFormBox>
        </Box>
      </Box>
    </Box>
  );
};

export default UserConfig;
