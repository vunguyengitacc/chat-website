import { Box } from "@mui/material";
import searchApi from "api/searchApi";
import { IRoom } from "model/Room";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GroupItem from "../../SearchItem/GroupItem";
import useGroupResultStyle from "./style";

const GroupResult = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const style = useGroupResultStyle();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      let term = searchParams.get("term");
      if (!term) {
        setIsSearching(false);
        return;
      }
      try {
        setIsSearching(true);
        let res = await searchApi.searchRoom({ term });
        setIsSearching(false);
        setRooms(res.data);
      } catch (error: any) {
        setIsSearching(false);
        console.log(error.message);
      }
    })();
  }, [searchParams]);

  return (
    <Box className={style.surface}>
      {rooms.map((i, index) => (
        <GroupItem value={i} key={index} />
      ))}
    </Box>
  );
};

export default GroupResult;
