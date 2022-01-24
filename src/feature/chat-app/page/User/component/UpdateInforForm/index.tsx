import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import useUpdateInforFormStyle from "./style";
import { useForm } from "react-hook-form";
import updateUserScheme, { IUpdateUserParams } from "./form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/reduxStore";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "component/Input/TextInput";
import { updateMe } from "feature/auth/authSlice";
import toast from "react-hot-toast";
import { unwrapResult } from "@reduxjs/toolkit";
import { LoadingButton } from "@mui/lab";

const UpdateInforForm = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );
  const style = useUpdateInforFormStyle();
  const form = useForm<IUpdateUserParams>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email === null ? "" : currentUser?.email,
      address: currentUser?.address === null ? "" : currentUser?.address,
      phone: currentUser?.phone === null ? "" : currentUser?.phone,
      bio: currentUser?.bio === null ? "" : currentUser?.bio,
    },
    resolver: yupResolver(updateUserScheme),
  });
  const dispatch = useDispatch<AppDispatch>();

  const updateHandler = async (data: IUpdateUserParams) => {
    try {
      setIsLoad(true);
      await dispatch(updateMe(data)).then(unwrapResult);
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
          <TextInput form={form} name="name" label="Name" />
        </Grid>
        <Grid item xs={6} className={style.inputItemRight}>
          <TextInput form={form} name="email" label="Email" />
        </Grid>
        <Grid item xs={6} className={style.inputItemLeft}>
          <TextInput form={form} name="address" label="Address" />
        </Grid>
        <Grid item xs={6} className={style.inputItemRight}>
          <TextInput form={form} name="phone" label="Phone" />
        </Grid>
        <Grid item xs={12}>
          <TextInput form={form} name="bio" label="Bio" />
        </Grid>
      </Grid>
      <Box className={style.submitField}>
        <Box display="flex" gap="20px">
          <Button variant="text" disableElevation>
            Reset
          </Button>
          <LoadingButton
            type="submit"
            loading={isLoad}
            variant="contained"
            disableElevation
          >
            Save changes
          </LoadingButton>
        </Box>
      </Box>
    </form>
  );
};

export default UpdateInforForm;
