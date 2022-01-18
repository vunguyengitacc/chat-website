import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import { AppDispatch, RootState } from "app/reduxStore";
import { friendsSelector, removeFriend } from "feature/auth/authSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import ProfileFormBox from "feature/chat-app/page/User/component/ProfileFormBox";
import userApi from "api/userApi";

const FriendReview = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isLoadRemove, setIsLoadRemove] = useState<boolean>(false);
  const [isLoadBlock, setIsLoadBlock] = useState<boolean>(false);

  const { friendId } = useParams();
  const friend = useSelector((state: RootState) =>
    friendsSelector.selectById(state, Number(friendId))
  );

  const dispatch = useDispatch<AppDispatch>();
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

  const removeFriendHandler = async () => {
    try {
      if (friend === undefined) return;
      setIsLoadRemove(true);
      await userApi.removeFriend(friend.id);
      navigator("/app/friend");
      dispatch(removeFriend(friend));
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
      <Box marginBottom="20px">
        <ProfileFormBox name="Profiles" desc="User's base information">
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
        </ProfileFormBox>
      </Box>

      <Box marginBottom="20px">
        <ProfileFormBox name="Activities" desc="Remove or block this user">
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
              <LoadingButton
                startIcon={<PersonRemoveIcon />}
                variant="contained"
                color="error"
                disableElevation
                className={style.btnAction}
                loading={isLoadRemove}
                onClick={removeFriendHandler}
              >
                Remove
              </LoadingButton>
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
        </ProfileFormBox>
      </Box>
    </Box>
  );
};

export default FriendReview;
