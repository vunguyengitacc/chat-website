import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import useLoginPageStyle from "./style";
import scheme, { ILoginParams } from "./form";
import TextInput from "component/Input/TextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/reduxStore";
import { getMe, login } from "feature/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import { reset } from "feature/chat-app/page/SearchPage/searchSlice";

const Login = () => {
  const [isLoad, setIsLoad] = useState<boolean>();

  const style = useLoginPageStyle();
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();
  const form = useForm<ILoginParams>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(scheme),
  });

  const submitLogin = async (data: ILoginParams) => {
    try {
      setIsLoad(true);
      await dispatch(login(data)).then(unwrapResult);
      await dispatch(getMe()).then(unwrapResult);
      await dispatch(reset());
      navigator("/app");
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
      console.log(error);
    }
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
          <LoadingButton
            className={style.btnLogin}
            fullWidth
            type="submit"
            loading={isLoad}
            variant="contained"
            disableElevation
            color="success"
          >
            LOGIN
          </LoadingButton>
        </form>
        <Link to="/auth/register">
          <Typography variant="subtitle1">Don't have an account?</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
