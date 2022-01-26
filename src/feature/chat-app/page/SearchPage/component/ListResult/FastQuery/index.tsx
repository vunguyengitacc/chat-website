import { Box } from "@mui/material";
import searchApi from "api/searchApi";
import userApi from "api/userApi";
import { IUser } from "model/User";
import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import UserItem from "../../SearchItem/UserItem";
import useFastQueryStyle from "./style";

const FastQuery = () => {
  const { type } = useParams();
  const [users, setUsers] = useState<IUser[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const style = useFastQueryStyle();

  useEffect(() => {
    (async () => {
      try {
        setIsSearching(true);
        let res;
        if (type === "wait") {
          res = await userApi.getWait();
          setUsers(res.data);
        } else if (type === "suggest") {
          res = await searchApi.suggest();
          setUsers(res.data);
        } else if (type === "request") {
          res = await userApi.getRequest();
          setUsers(res.data);
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
