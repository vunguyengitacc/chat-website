import { Box } from "@mui/material";
import searchApi from "api/searchApi";
import userApi from "api/userApi";
import { IUser } from "model/User";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserItem from "../../SearchItem/UserItem";
import useUserResultStyle from "./style";

const UserResult = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const style = useUserResultStyle();

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
        let res = await searchApi.searchUser({ term });
        setIsSearching(false);
        setUsers(res.data);
      } catch (error: any) {
        setIsSearching(false);
        console.log(error.message);
      }
    })();
  }, [searchParams]);

  return (
    <Box className={style.surface}>
      {users.map((i, index) => (
        <UserItem value={i} key={index} />
      ))}
    </Box>
  );
};

export default UserResult;
