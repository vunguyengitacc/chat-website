import { Box } from "@mui/material";

import React from "react";
import UserSidebar from "./component/UserSidebar";
import UserConfig from "./component/UserConfig";
import useUserPageStyle from "./style";

const UserPage = () => {
  const style = useUserPageStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.sidebar}>
        <UserSidebar />
      </Box>
      <Box className={style.config}>
        <UserConfig />
      </Box>
    </Box>
  );
};

export default UserPage;
