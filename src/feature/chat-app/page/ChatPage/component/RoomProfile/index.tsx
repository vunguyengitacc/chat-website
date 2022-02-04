import { Avatar, Box, Typography } from "@mui/material";
import memberApi from "api/memberApi";
import { IMember } from "model/Member";
import React, { useEffect, useState } from "react";
import useRoomProfileStyles from "./style";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MemberRole from "utility/enum/memberRole";

interface IProps {
  roomId: Number;
}

const RoomProfile: React.FC<IProps> = ({ roomId }) => {
  const [members, setMembers] = useState<IMember[]>([]);

  const style = useRoomProfileStyles();

  useEffect(() => {
    (async () => {
      try {
        const res = await memberApi.getByRoom({ id: roomId });
        setMembers(res.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <Box className={style.surface}>
      <Box className={style.memberField}>
        <Typography variant="subtitle1">
          <b>Members</b>
        </Typography>
        <Box className={style.memberList}>
          {members.map((i, index) => (
            <Box key={index} className={style.memberItem}>
              <Box className={style.memberItemInfor}>
                <Avatar src={i.user.avatarURI} />
                <Typography>{i.user.name}</Typography>
              </Box>
              {i.role === MemberRole.ADMIN && <SupervisorAccountIcon />}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={style.memberField}>
        <Typography variant="subtitle1">
          <b>Ask to join</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default RoomProfile;
