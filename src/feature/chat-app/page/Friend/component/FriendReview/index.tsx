import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import { RootState } from "app/reduxStore";
import { friendsSelector } from "feature/auth/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFriendReviewStyle from "./style";
import AbcIcon from "@mui/icons-material/Abc";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ReviewItem from "feature/chat-app/component/ReviewItem";
import ChatIcon from "@mui/icons-material/Chat";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import BlockIcon from "@mui/icons-material/Block";
import toast from "react-hot-toast";
import roomApi from "api/roomApi";
import { LoadingButton } from "@mui/lab";

const FriendReview = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const { friendId } = useParams();
  const friend = useSelector((state: RootState) =>
    friendsSelector.selectById(state, Number(friendId))
  );

  const style = useFriendReviewStyle();
  const navigator = useNavigate();

  useEffect(() => {
    if (friend === undefined) navigator("/*");
  }, [friend]);

  const navigateToRoom = async () => {
    try {
      setIsLoad(true);
      if (friend === undefined) return;
      const room = await roomApi.getFriendRoomById({ userId: friend?.id });
      room.data !== null && navigator(`/app/chat/${room.data.id}`);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };

  return (
    <Box className={style.surface}>
      <Card variant="outlined" className={style.card}>
        <Avatar
          className={style.avatar}
          src={
            friend?.avatarURI ??
            `https://avatars.dicebear.com/4.5/api/initials/${friend?.name}.svg`
          }
        />
        <Typography variant="h5">{friend?.name}</Typography>
        <LoadingButton
          loading={isLoad}
          startIcon={<ChatIcon />}
          color="secondary"
          variant="contained"
          disableElevation
          onClick={navigateToRoom}
        >
          Let's Chat
        </LoadingButton>
      </Card>
      <Card variant="outlined" className={style.inforCard}>
        <ReviewItem label="Name" value={friend?.name ?? "None"}>
          <AbcIcon />
        </ReviewItem>
        <ReviewItem label="Email" value={friend?.email ?? "None"}>
          <EmailIcon />
        </ReviewItem>
        <ReviewItem label="Phone" value={friend?.phone ?? "None"}>
          <LocalPhoneIcon />
        </ReviewItem>
        <ReviewItem label="Address" value={friend?.address ?? "None"}>
          <HomeIcon />
        </ReviewItem>
      </Card>
      <Card variant="outlined" className={style.inforCard}>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          padding="10px"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2">
            <b>Remove friend</b>
          </Typography>
          <Button
            startIcon={<PersonRemoveIcon />}
            variant="contained"
            color="error"
            disableElevation
            className={style.btnAction}
          >
            Remove
          </Button>
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          padding="10px"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2">
            <b>Block user</b>
          </Typography>
          <Button
            startIcon={<BlockIcon />}
            variant="contained"
            color="error"
            disableElevation
            className={style.btnAction}
          >
            Block
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default FriendReview;
