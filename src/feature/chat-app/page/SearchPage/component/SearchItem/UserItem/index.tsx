import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useUserSearchItemStyle from "./style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { IUser } from "model/User";
import toast from "react-hot-toast";
import userApi from "api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/reduxStore";
import CancelIcon from "@mui/icons-material/Cancel";
import UserItemReview from "../../ItemReivew/User";
import CheckIcon from "@mui/icons-material/Check";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { addFriend, removeFriend } from "feature/auth/authSlice";

interface IProps {
  value: IUser;
}

const UserItem: React.FC<IProps> = ({ value }) => {
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );
  const [isRequest, setIsRequest] = useState<boolean>(
    value?.requests.filter((i) => i === currentUser?.id).length > 0
  );
  const [isWait, setIsWait] = useState<boolean>(
    value?.waits?.filter((i) => i === currentUser?.id).length > 0
  );
  const [isFriend, setIsFriend] = useState<boolean>(
    value?.friends?.filter((i) => i === currentUser?.id).length > 0
  );
  const [openReview, setOpenReview] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const style = useUserSearchItemStyle();

  const sendRequestHandler = async () => {
    let toastId = toast.loading("Loading");
    try {
      await userApi.sendRequest(value.id);
      setIsRequest(true);
      setIsFriend(false);
      setIsWait(false);
      toast.success("Success", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  const cancelRequestHandler = async () => {
    let toastId = toast.loading("Loading");
    try {
      await userApi.cancelRequest(value.id);
      setIsRequest(false);
      setIsFriend(false);
      setIsWait(false);
      toast.success("Success", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  const acceptRequestHandler = async () => {
    let toastId = toast.loading("Loading");
    try {
      await userApi.acceptRequest(value.id);
      setIsRequest(false);
      setIsFriend(true);
      setIsWait(false);
      dispatch(addFriend(value));
      toast.success("Success", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  const removeFriendHandler = async () => {
    let toastId = toast.loading("Loading");
    try {
      await userApi.removeFriend(value.id);
      setIsRequest(false);
      setIsFriend(false);
      setIsWait(false);
      dispatch(removeFriend(value));
      toast.success("Success", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };
  const denyRequestHandler = async () => {
    let toastId = toast.loading("Loading");
    try {
      await userApi.denyRequest(value.id);
      setIsRequest(false);
      setIsFriend(false);
      setIsWait(false);
      toast.success("Success", { id: toastId });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <Card className={style.surface}>
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <Stack
          direction="row"
          gap="20px"
          flexGrow={1}
          onClick={() => {
            setOpenReview(true);
          }}
        >
          <Avatar className={style.avatar} src={value.avatarURI} />
          <Stack direction="column" flexGrow={1}>
            <Typography variant="h6">{value.name}</Typography>
            <Typography variant="body1">{value.name}</Typography>
            <Typography variant="body1">{value.bio}</Typography>
            {isWait && (
              <Typography variant="body1">
                <i>This user is request to be friend with you</i>
              </Typography>
            )}
            {isFriend && (
              <Typography variant="body1">
                <i>This user is your friend</i>
              </Typography>
            )}
          </Stack>
        </Stack>

        <Stack justifyContent="center" flexDirection="row">
          {isWait ? (
            <>
              <IconButton color="error" onClick={denyRequestHandler}>
                <DoDisturbIcon />
              </IconButton>
              <IconButton color="success" onClick={acceptRequestHandler}>
                <CheckIcon />
              </IconButton>
            </>
          ) : isRequest ? (
            <IconButton color="error" onClick={cancelRequestHandler}>
              <CancelIcon />
            </IconButton>
          ) : isFriend ? (
            <IconButton color="error" onClick={removeFriendHandler}>
              <PersonRemoveIcon />
            </IconButton>
          ) : (
            <IconButton color="secondary" onClick={sendRequestHandler}>
              <PersonAddAltIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
      <Modal open={openReview} onClose={() => setOpenReview(false)}>
        <Paper className={style.modalReview}>
          <UserItemReview
            value={value}
            isFriend={isFriend}
            setIsFriend={setIsFriend}
            isRequest={isRequest}
            setIsRequest={setIsRequest}
            isWait={isWait}
            setIsWait={setIsWait}
          />
        </Paper>
      </Modal>
    </Card>
  );
};

export default UserItem;
