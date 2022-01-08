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

const ToolBar = () => {
  const style = useToolBarStyle();
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();

  const logoutHandler = async () => {
    await dispatch(logout());
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
          to="/app/friend"
        >
          <GroupIcon />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={style.linkMatch}
          to="/app/me"
        >
          <AccountCircleIcon />
        </NavLink>
      </Box>
      <Button onClick={logoutHandler} className={style.link}>
        <LogoutIcon />
      </Button>
    </Box>
  );
};

export default ToolBar;
