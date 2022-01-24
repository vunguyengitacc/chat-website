import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useToolBarStyle, { activeStyle } from "./style";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/reduxStore";
import { logout } from "feature/auth/authSlice";
import SearchIcon from "@mui/icons-material/Search";
import useSocket from "hook/useSocket";

const ToolBar = () => {
  const style = useToolBarStyle();
  const { disconnect } = useSocket();
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();

  const logoutHandler = async () => {
    await dispatch(logout());
    await disconnect();
    navigator("/app");
  };

  return (
    <Box className={style.surface}>
      <Box display="flex" flexDirection="column">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={style.link}
          to="/app/chat"
        >
          <ChatIcon />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={style.link}
          to="/app/search"
        >
          <SearchIcon />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={style.link}
          to="/app/friend"
        >
          <GroupIcon />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={style.link}
          to="/app/me"
        >
          <AccountCircleIcon />
        </NavLink>
      </Box>
      <Box sx={{ borderTop: "solid .5px #e7e7e7" }}>
        <Button onClick={logoutHandler} className={style.link}>
          <LogoutIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ToolBar;
