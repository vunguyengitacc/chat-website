import React, { useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { IUser } from "model/User";
import useUserItemReviewStyle from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/reduxStore";
import toast from "react-hot-toast";
import userApi from "api/userApi";
import { addFriend, removeFriend } from "feature/auth/authSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { LoadingButton } from "@mui/lab";

interface IProps {
  value: IUser;
  isFriend: boolean;
  isRequest: boolean;
  isWait: boolean;
  setIsFriend: (value: boolean) => void;
  setIsRequest: (value: boolean) => void;
  setIsWait: (value: boolean) => void;
}

const UserItemReview: React.FC<IProps> = ({
  value,
  setIsFriend,
  setIsRequest,
  setIsWait,
  isFriend,
  isWait,
  isRequest,
}) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const style = useUserItemReviewStyle();

  const dispatch = useDispatch<AppDispatch>();

  const sendRequestHandler = async () => {
    try {
      setIsLoad(true);
      await userApi.sendRequest(value.id);
      setIsRequest(true);
      setIsFriend(false);
      setIsWait(false);
      setIsLoad(false);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };
  const cancelRequestHandler = async () => {
    try {
      setIsLoad(true);
      await userApi.cancelRequest(value.id);
      setIsRequest(false);
      setIsFriend(false);
      setIsWait(false);
      setIsLoad(false);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };

  const acceptRequestHandler = async () => {
    try {
      setIsLoad(true);
      await userApi.acceptRequest(value.id);
      setIsRequest(false);
      setIsFriend(true);
      setIsWait(false);
      dispatch(addFriend(value));
      setIsLoad(false);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };

  const removeFriendHandler = async () => {
    try {
      setIsLoad(true);
      await userApi.removeFriend(value.id);
      setIsRequest(false);
      setIsFriend(false);
      setIsWait(false);
      dispatch(removeFriend(value));
      setIsLoad(false);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };
  const denyRequestHandler = async () => {
    try {
      setIsLoad(true);
      await userApi.denyRequest(value.id);
      setIsRequest(false);
      setIsFriend(false);
      setIsWait(false);
      setIsLoad(false);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };
  return (
    <Box className={style.surface}>
      <Avatar
        src={
          value.avatarURI ??
          `https://avatars.dicebear.com/4.5/api/initials/${value.name}.svg`
        }
        className={style.avatar}
      />
      <Typography variant="h3">{value.name}</Typography>
      <Typography>
        {isWait ? (
          <>{value.name} send ask you to become friend</>
        ) : isRequest ? (
          <>You sent a friend request to {value.name} </>
        ) : isFriend ? (
          <>You two are friend</>
        ) : (
          <>You two are not friend! Send a friend request?</>
        )}
      </Typography>

      <Box className={style.grpButton}>
        {isWait ? (
          <>
            <LoadingButton
              loading={isLoad}
              color="error"
              onClick={denyRequestHandler}
              variant="contained"
              disableElevation
              startIcon={<DoDisturbIcon />}
            >
              Deny
            </LoadingButton>
            <LoadingButton
              loading={isLoad}
              color="success"
              onClick={acceptRequestHandler}
              variant="contained"
              disableElevation
              startIcon={<CheckIcon />}
            >
              Accept
            </LoadingButton>
          </>
        ) : isRequest ? (
          <LoadingButton
            loading={isLoad}
            startIcon={<CancelIcon />}
            color="error"
            onClick={cancelRequestHandler}
            variant="contained"
            disableElevation
          >
            Cancel
          </LoadingButton>
        ) : isFriend ? (
          <LoadingButton
            loading={isLoad}
            color="error"
            onClick={removeFriendHandler}
            variant="contained"
            disableElevation
            startIcon={<PersonRemoveIcon />}
          >
            Remove friend
          </LoadingButton>
        ) : (
          <LoadingButton
            loading={isLoad}
            color="secondary"
            onClick={sendRequestHandler}
            variant="contained"
            disableElevation
            startIcon={<PersonAddAltIcon />}
          >
            Add friend
          </LoadingButton>
        )}
      </Box>
    </Box>
  );
};

export default UserItemReview;
