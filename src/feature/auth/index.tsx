import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import logoAuth from "static/logoAuth.png";
import useAuthStyle from "./style";

const AuthFeature = () => {
  const style = useAuthStyle();
  return (
    <Box className={style.surface}>
      <Paper elevation={3} className={style.content}>
        <Box className={style.logoField}>
          <img alt="Authentication" src={logoAuth} style={{ width: "80%" }} />
        </Box>
        <Box width="50%">
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthFeature;
