import { Box, Button } from "@mui/material";
import useLoginPageStyle from "./style";

const Login = () => {
  const style = useLoginPageStyle();
  return (
    <Box className={style.surface}>
      <Box width="80%" display="flex" flexDirection="column" gap="20px">
        <input></input>
        <input></input>
        <Button fullWidth>Login</Button>
      </Box>
    </Box>
  );
};

export default Login;
