import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useLinkSearchStyle, { activeCSS } from "./style";

interface IProps {
  to: string;
  text: string;
}

const LinkSearch: React.FC<IProps> = ({ to, text }) => {
  const style = useLinkSearchStyle();
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeCSS : {})}
      to={to}
      className={style.link}
    >
      <Box padding="10px">
        <Typography variant="subtitle1">
          <b>{text}</b>
        </Typography>
      </Box>
    </NavLink>
  );
};

export default LinkSearch;
