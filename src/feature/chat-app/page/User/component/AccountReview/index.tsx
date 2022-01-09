import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import useAccountReviewStyle from "./style";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/reduxStore";
import ReviewItem from "../ReviewItem";
import AbcIcon from "@mui/icons-material/Abc";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";

const AccountReview = () => {
  const style = useAccountReviewStyle();
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );
  console.log(currentUser);
  return (
    <Box className={style.surface}>
      <Card variant="outlined" className={style.card}>
        <Avatar
          className={style.avatar}
          src={
            currentUser?.avatarURI !== undefined
              ? currentUser.avatarURI
              : `https://avatars.dicebear.com/4.5/api/initials/${currentUser?.name}.svg`
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
        <ReviewItem
          label="Name"
          value={currentUser?.name !== undefined ? currentUser.name : "None"}
        >
          <AbcIcon />
        </ReviewItem>
        <ReviewItem
          label="Email"
          value={currentUser?.email !== undefined ? currentUser?.email : "None"}
        >
          <EmailIcon />
        </ReviewItem>
      </Card>
    </Box>
  );
};

export default AccountReview;
