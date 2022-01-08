import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import useLoginPageStyle from "./style";
import scheme from "./form";
import TextInput from "component/Input/TextInput";

const Login = () => {
  const style = useLoginPageStyle();
  const form = useForm<any>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(scheme),
  });

  const submitLogin = async (data: any) => {
    console.log(data);
  };
  return (
    <Box className={style.surface}>
      <Box width="80%" display="flex" flexDirection="column" gap="30px">
        <form
          onSubmit={form.handleSubmit(submitLogin)}
          className={style.frmContent}
        >
          <Box width="100%" display="flex" justifyContent="center">
            <Typography variant="h4">USER LOGIN</Typography>
          </Box>
          <TextInput
            form={form}
            name="username"
            fullWidth
            placeHolder="Username"
          />
          <TextInput
            form={form}
            name="password"
            fullWidth
            placeHolder="Passowrd"
          />
          <Button
            className={style.btnLogin}
            fullWidth
            variant="contained"
            color="success"
            disableElevation
            type="submit"
          >
            Login
          </Button>
        </form>
        <Link to="/auth/register">
          <Typography variant="subtitle1">Don't have an account?</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
