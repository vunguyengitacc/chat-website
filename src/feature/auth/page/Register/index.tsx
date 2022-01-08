import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import PasswordInput from "component/Input/PasswordInput";
import TextInput from "component/Input/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IRegisterFormValues, registerSchema } from "./form";
import useRegisterPageStyle from "./style";

const Register = () => {
  const style = useRegisterPageStyle();
  const form = useForm<IRegisterFormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      fullname: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submitRegister = async (data: any) => {
    console.log(data);
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
            name="fullname"
            fullWidth
            placeHolder="Type your fullname"
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
          <Button
            className={style.btnLogin}
            fullWidth
            variant="contained"
            color="success"
            disableElevation
            type="submit"
          >
            REGISTER
          </Button>
        </form>
        <Link to="/auth/login">
          <Typography variant="subtitle1">Already have an account?</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Register;
