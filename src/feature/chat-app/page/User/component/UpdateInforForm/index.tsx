import React from "react";
import { Box, Button, Grid } from "@mui/material";
import useUpdateInforFormStyle from "./style";
import { useForm } from "react-hook-form";
import updateUserScheme, { IUpdateUserParams } from "./form";
import { useSelector } from "react-redux";
import { RootState } from "app/reduxStore";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "component/Input/TextInput";

const UpdateInforForm = () => {
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );
  const style = useUpdateInforFormStyle();
  const form = useForm<IUpdateUserParams>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      address: "",
      phone: "",
      bio: "",
    },
    resolver: yupResolver(updateUserScheme),
  });

  const updateHandler = (data: IUpdateUserParams) => {
    console.log(data);
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
          <Button variant="text" color="secondary" disableElevation>
            Reset
          </Button>
          <Button variant="contained" color="secondary" disableElevation>
            Save changes
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default UpdateInforForm;
