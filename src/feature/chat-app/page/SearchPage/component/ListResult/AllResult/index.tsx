import { Box, Typography } from "@mui/material";
import searchApi from "api/searchApi";
import { IRoom } from "model/Room";
import { IUser } from "model/User";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GroupItem from "../../SearchItem/GroupItem";
import UserItem from "../../SearchItem/UserItem";
import useAllResultStyle from "./style";

const AllResult = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const [searchParams] = useSearchParams();

  const style = useAllResultStyle();

  useEffect(() => {
    (async () => {
      let term = searchParams.get("term");
      if (term === null || term === "") {
        setIsSearching(false);
        return;
      }
      try {
        setIsSearching(true);
        let res = await searchApi.search({ term });
        setIsSearching(false);
        setUsers(res.data.users);
        setRooms(res.data.rooms);
      } catch (error: any) {
        setIsSearching(false);
      }
    })();
  }, [searchParams]);

  return (
    <Box className={style.surface}>
      {users.length > 0 && <Typography variant="h6">User</Typography>}
      {users.length > 0 &&
        users.map((i, index) => <UserItem value={i} key={index} />)}
      {rooms.length > 0 && <Typography variant="h6">Room</Typography>}
      {rooms.length > 0 &&
        rooms.map((i, index) => <GroupItem value={i} key={index} />)}
    </Box>
  );
};

export default AllResult;
