import React from "react";
import { Box, Button, Grid } from "@mui/material";
import useUpdateInforFormStyle from "./style";
import { useForm } from "react-hook-form";
import { IUpdatePasswordParams } from "./form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "component/Input/TextInput";
import updatePasswordScheme from "./form";

const ChangePasswordForm = () => {
  const style = useUpdateInforFormStyle();
  const form = useForm<IUpdatePasswordParams>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      currentPassword: "",
      newpassword: "",
      repeatPassword: "",
    },
    resolver: yupResolver(updatePasswordScheme),
  });

  const updateHandler = (data: IUpdatePasswordParams) => {
    console.log(data);
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
          <Button variant="contained" color="secondary" disableElevation>
            Save changes
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ChangePasswordForm;
