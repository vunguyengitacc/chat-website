import { Box } from "@mui/material";
import React from "react";
import GroupItem from "../../SearchItem/GroupItem";
import useGroupResultStyle from "./style";

const GroupResult = () => {
  //const rooms = useSelector((state: RootState) => state.searchReducer.rooms);

  const style = useGroupResultStyle();

  return (
    <Box className={style.surface}>
      {/* {rooms.map((i, index) => (
        <GroupItem value={i} key={index} />
      ))} */}
    </Box>
  );
};

export default GroupResult;
