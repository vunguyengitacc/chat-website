import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUpdatePasswordParams } from "./form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "component/Input/TextInput";
import updatePasswordScheme from "./form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/reduxStore";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { updatePassword } from "feature/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import useUpdatePrivacyFormStyle from "./style";

const UpdatePrivacyForm = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const style = useUpdatePrivacyFormStyle();
  const form = useForm<IUpdatePasswordParams>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
    resolver: yupResolver(updatePasswordScheme),
  });
  const dispatch = useDispatch<AppDispatch>();

  const updateHandler = async (data: IUpdatePasswordParams) => {
    try {
      setIsLoad(true);
      await dispatch(updatePassword(data)).then(unwrapResult);
      toast.success("Success");
      setIsLoad(false);
    } catch (error: any) {
      setIsLoad(false);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(updateHandler)} className={style.surface}>
      <Grid container className={style.inputGroup}>
        <Grid item xs={12}>
          a
        </Grid>
        <Grid item xs={12}>
          b
        </Grid>
      </Grid>
      <Box className={style.submitField}>
        <Box display="flex" gap="20px">
          <Button variant="text" disableElevation>
            Reset
          </Button>
          <LoadingButton loading={isLoad} variant="contained" disableElevation>
            Save changes
          </LoadingButton>
        </Box>
      </Box>
    </form>
  );
};

export default UpdatePrivacyForm;
