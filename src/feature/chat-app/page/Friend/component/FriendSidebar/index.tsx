import { Box, Typography } from "@mui/material";
import { RootState } from "app/reduxStore";
import { friendsSelector } from "feature/auth/authSlice";
import { IUser } from "model/User";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FlexObject } from "utility/flex-object";
import { listUserGroupByFirstChar } from "utility/list";
import FriendHeader from "../FriendHeader";
import FriendItem from "../FriendItem";
import useFriendSidebarStyle from "./style";

const FriendSidebar = () => {
  const [renderValue, setRenderValue] = useState<FlexObject<IUser>>({});
  const [isAlone, setIsAlone] = useState<boolean>(true);

  const friends = useSelector((state: RootState) =>
    friendsSelector.selectAll(state)
  );

  useEffect(() => {
    setRenderValue(listUserGroupByFirstChar(friends));
  }, [friends]);

  useEffect(() => {
    setIsAlone(
      !(
        Object.entries(renderValue).filter((item) => item[1].length > 0)
          .length > 0
      )
    );
  }, [renderValue]);

  const style = useFriendSidebarStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.header}>
        <FriendHeader />
      </Box>
      <Box className={style.list}>
        {!isAlone &&
          Object.entries(renderValue).map((item) => {
            return item[1].length == 0 ? null : (
              <Box key={item[0]} className={style.lstBox}>
                <Typography variant="h5" className={style.boxHeader}>
                  {item[0]}
                </Typography>
                <Box display="flex" flexDirection="column" gap="15px">
                  {item[1].map((user, index) => (
                    <FriendItem value={user} key={index} />
                  ))}
                </Box>
              </Box>
            );
          })}
        {isAlone && <>You don't have any friend</>}
      </Box>
    </Box>
  );
};

export default FriendSidebar;
