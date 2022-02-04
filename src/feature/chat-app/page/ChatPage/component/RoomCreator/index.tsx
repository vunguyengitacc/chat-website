import { Avatar, Box, Typography } from "@mui/material";
import { Button, InputBase, Paper } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/reduxStore";
import { friendsSelector } from "feature/auth/authSlice";
import { createRoom } from "feature/chat-app/roomSlice";
import { IRoom } from "model/Room";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomType from "utility/enum/roomType";
import useRoomCreatorStyle from "./style";

interface IProps {
  onClose: (input: boolean) => void;
}

const RoomCreator: React.FC<IProps> = ({ onClose }) => {
  const [friendIds, setFriendIds] = useState<Number[]>([]);
  const [filterTerm, setFilterTerm] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const friends = useSelector((state: RootState) =>
    friendsSelector.selectAll(state)
  );
  const dispatch = useDispatch<AppDispatch>();

  const style = useRoomCreatorStyle();

  const friendSelectionHandler = (id: Number) => {
    if (friendIds.filter((i) => i === id).length > 0) {
      setFriendIds(friendIds.filter((i) => i !== id));
    } else {
      setFriendIds([...friendIds, id]);
    }
  };

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.currentTarget.value);
  };

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.currentTarget.value);
  };

  const createRoomHandler = async () => {
    try {
      let data: Pick<IRoom, "memberIds" | "name" | "type"> = {
        name: roomName,
        memberIds: friendIds,
        type: RoomType.PRIVATE,
      };
      console.log(data);
      await dispatch(createRoom(data)).then(unwrapResult);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      {step === 1 && (
        <Paper className={style.frmSelectMember}>
          <Box className={style.surface}>
            <Box>
              <Typography variant="h5">Select Member</Typography>
            </Box>
            <Box>
              <InputBase
                sx={{
                  border: "solid 2px #e7e7e7",
                  padding: "5px",
                  borderRadius: "3px",
                }}
                onChange={filterHandler}
                fullWidth
                placeholder="Type to search..."
              />
            </Box>
            <Box className={style.lstFriend}>
              {friends
                .filter((i) =>
                  i.name.toLowerCase().includes(filterTerm.toLowerCase())
                )
                .map((i, index) => (
                  <Box
                    component="div"
                    className={style.itemFriend}
                    onClick={() => friendSelectionHandler(i.id)}
                    key={index}
                    bgcolor={
                      friendIds.filter((it) => it === i.id).length > 0
                        ? "#1976d2"
                        : "#f5f5f5"
                    }
                  >
                    <Avatar src={i.avatarURI} />
                    <Typography
                      color={
                        friendIds.filter((it) => it === i.id).length > 0
                          ? "white"
                          : "black"
                      }
                      variant="subtitle2"
                    >
                      {i.name}
                    </Typography>
                  </Box>
                ))}
            </Box>
            <Box className={style.btnGroup} justifyContent="space-between">
              <Button
                onClick={() => onClose(false)}
                color="inherit"
                variant="contained"
                disableElevation
              >
                Cancel
              </Button>
              <Button
                onClick={() => setStep(2)}
                variant="contained"
                disableElevation
                disabled={friendIds.length === 0}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
      {step === 2 && (
        <Paper className={style.frmCreate}>
          <Box className={style.surface}>
            <Box>
              <Typography variant="h5">Room Information</Typography>
            </Box>
            <Box className={style.lstFriend}>
              <Typography variant="subtitle2">Name</Typography>
              <InputBase
                sx={{
                  border: "solid 2px #e7e7e7",
                  padding: "5px",
                  borderRadius: "3px",
                }}
                onChange={getName}
                fullWidth
                placeholder="Type room name..."
              />
            </Box>
            <Box className={style.btnGroup} justifyContent="space-between">
              <Button
                onClick={() => onClose(false)}
                color="inherit"
                variant="contained"
                disableElevation
              >
                Cancel
              </Button>
              <Box className={style.btnGroup} justifyContent="flex-end">
                <Button
                  onClick={() => setStep(1)}
                  color="inherit"
                  variant="contained"
                  disableElevation
                >
                  Back
                </Button>
                <Button
                  onClick={createRoomHandler}
                  variant="contained"
                  disableElevation
                >
                  Confirm
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default RoomCreator;
