import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import { AppDispatch } from "app/reduxStore";
import PasswordInput from "component/Input/PasswordInput";
import TextInput from "component/Input/TextInput";
import { getMe, register } from "feature/auth/authSlice";
import { reset } from "feature/chat-app/page/SearchPage/searchSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IRegisterFormValues, registerSchema } from "./form";
import useRegisterPageStyle from "./style";

const Register = () => {
  const [isLoad, setIsLoad] = useState<boolean>();

  const style = useRegisterPageStyle();
  const navigator = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const form = useForm<IRegisterFormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
      name: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submitRegister = async (data: IRegisterFormValues) => {
    try {
      setIsLoad(true);
      await dispatch(register(data)).then(unwrapResult);
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
        <Box width="100%" display="flex" justifyContent="center">
          <Typography variant="h4">CREATE NEW USER</Typography>
        </Box>
        <form
          onSubmit={form.handleSubmit(submitRegister)}
          className={style.frmContent}
        >
          <TextInput
            form={form}
            name="username"
            fullWidth
            placeHolder="Type your username"
          />
          <TextInput
            form={form}
            name="name"
            fullWidth
            placeHolder="Type your name"
          />
          <PasswordInput
            form={form}
            name="password"
            fullWidth
            placeHolder="Type your passowrd"
          />
          <PasswordInput
            form={form}
            name="passwordConfirm"
            fullWidth
            placeHolder="Confirm your password"
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
            REGISTER
          </LoadingButton>
        </form>
        <Link to="/auth/login">
          <Typography variant="subtitle1">Already have an account?</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Register;
