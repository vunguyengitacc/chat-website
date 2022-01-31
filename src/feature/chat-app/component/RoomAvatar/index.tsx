import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import useRoomAvatarStyle from "./style";

interface IProps {
  coverImage: string[];
}

const RoomAvatar: React.FC<IProps> = ({ coverImage }) => {
  const [size, setSize] = useState<string>("0px");
  const style = useRoomAvatarStyle();

  useEffect(() => {
    if (coverImage.length < 3) setSize("100%");
    else setSize("50%");
  }, [coverImage]);

  return (
    <Box className={style.surface}>
      {coverImage.map((i, index) => {
        if (index > 3) return <></>;
        if (index == 3)
          return (
            <Box display="inline-block" width={size} height={size}>
              <Avatar
                className={style.avatar}
                src={`https://avatars.dicebear.com/4.5/api/initials/${
                  coverImage.length - index
                }.svg?background=%23c9c9c9`}
              />
            </Box>
          );
        return (
          <Box display="inline-block" width={size} height={size}>
            <Avatar className={style.avatar} src={i} />
          </Box>
        );
      })}
    </Box>
  );
};

export default RoomAvatar;
