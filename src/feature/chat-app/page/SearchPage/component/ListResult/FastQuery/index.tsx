import { Box } from "@mui/material";
import searchApi from "api/searchApi";
import userApi from "api/userApi";
import { IRoom } from "model/Room";
import { IUser } from "model/User";
import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import UserItem from "../../SearchItem/UserItem";
import useFastQueryStyle from "./style";

const FastQuery = () => {
  const { type } = useParams();
  const [users, setUsers] = useState<IUser[]>([]);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const style = useFastQueryStyle();

  useEffect(() => {
    (async () => {
      try {
        setIsSearching(true);
        let res;
        switch (type) {
          case "wait":
            res = await userApi.getWait();
            setUsers(res.data);
            break;
          case "suggest":
            res = await searchApi.suggest();
            setUsers(res.data);
            break;
          case "request":
            res = await userApi.getRequest();
            setUsers(res.data);
            break;
          default:
            break;
        }
        setIsSearching(false);
      } catch (error: any) {
        setIsSearching(false);
        console.log(error.message);
      }
    })();
  }, [type]);

  return (
    <Box className={style.surface}>
      {users.map((i, index) => (
        <UserItem value={i} key={index} />
      ))}
    </Box>
  );
};

export default FastQuery;
