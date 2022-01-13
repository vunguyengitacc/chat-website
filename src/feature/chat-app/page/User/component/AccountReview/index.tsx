import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import useAccountReviewStyle from "./style";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/reduxStore";
import ReviewItem from "feature/chat-app/component/ReviewItem";
import AbcIcon from "@mui/icons-material/Abc";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const AccountReview = () => {
  const style = useAccountReviewStyle();
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );

  return (
    <Box className={style.surface}>
      <Card variant="outlined" className={style.card}>
        <Avatar
          className={style.avatar}
          src={
            currentUser?.avatarURI ??
            `https://avatars.dicebear.com/4.5/api/initials/${currentUser?.name}.svg`
          }
        />
        <Typography variant="h5">{currentUser?.name}</Typography>
        <Button
          className={style.btnLogout}
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Card>
      <Card variant="outlined" className={style.inforCard}>
        <ReviewItem label="Name" value={currentUser?.name ?? "None"}>
          <AbcIcon />
        </ReviewItem>
        <ReviewItem label="Email" value={currentUser?.email ?? "None"}>
          <EmailIcon />
        </ReviewItem>
        <ReviewItem label="Phone" value={currentUser?.phone ?? "None"}>
          <LocalPhoneIcon />
        </ReviewItem>
        <ReviewItem label="Address" value={currentUser?.address ?? "None"}>
          <HomeIcon />
        </ReviewItem>
      </Card>
    </Box>
  );
};

export default AccountReview;
