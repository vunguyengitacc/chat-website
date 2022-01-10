import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import useUpdateInforFormStyle from "./style";
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

const ChangePasswordForm = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const style = useUpdateInforFormStyle();
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
        <Grid item xs={6} className={style.inputItemLeft}>
          <TextInput
            form={form}
            name="currentPassword"
            label="Current password"
          />
        </Grid>
        <Grid item xs={6} className={style.inputItemRight}></Grid>
        <Grid item xs={6} className={style.inputItemLeft}>
          <TextInput form={form} name="newPassword" label="New password" />
        </Grid>
        <Grid item xs={6} className={style.inputItemRight}>
          <TextInput
            form={form}
            name="repeatPassword"
            label="Repeat password"
          />
        </Grid>
      </Grid>
      <Box className={style.submitField}>
        <Box display="flex" gap="20px">
          <Button variant="text" color="secondary" disableElevation>
            Reset
          </Button>
          <LoadingButton
            type="submit"
            loading={isLoad}
            variant="contained"
            disableElevation
            color="secondary"
          >
            Save changes
          </LoadingButton>
        </Box>
      </Box>
    </form>
  );
};

export default ChangePasswordForm;
