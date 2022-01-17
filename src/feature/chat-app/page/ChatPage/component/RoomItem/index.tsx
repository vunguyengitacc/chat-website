import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import useRoomItemStyle, { activeRoomCSS } from "./style";
import { toSimpleString } from "utility/string";
import { NavLink } from "react-router-dom";
import { IRoom } from "model/Room";
import { useSelector } from "react-redux";
import { RootState } from "app/reduxStore";
import { getTimeDistance } from "utility/msg-date";

interface IProps {
  value: IRoom;
}

const RoomItem: React.FC<IProps> = ({ value }) => {
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );

  const style = useRoomItemStyle();
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeRoomCSS : {})}
      to={`${value.id}`}
      className={style.surface}
    >
      <Box className={style.roomContent}>
        <Box className={style.avatarField}>
          <Avatar
            sx={{ height: "60px", width: "60px" }}
            src={
              value.coverImage ??
              `https://avatars.dicebear.com/4.5/api/initials/${value.name}.svg`
            }
          />
        </Box>

        <Box className={style.roomInfor}>
          <Box className={style.topField}>
            <Box className={style.nameField}>
              <Typography variant="subtitle1">
                <b>{value.name}</b>
              </Typography>
            </Box>
            <Box className={style.lastestActionTimeField}>
              <Typography variant="caption">
                {value.lastMessage !== undefined
                  ? getTimeDistance(new Date(value.lastMessage?.createdDate))
                  : "None"}
              </Typography>
            </Box>
          </Box>
          <Box className={style.bottomField}>
            {value.lastMessage?.owner.id === currentUser?.id
              ? "You"
              : value.lastMessage?.owner.name}
            : {value.lastMessage?.content}
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};

export default RoomItem;
