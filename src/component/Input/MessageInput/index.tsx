import { FormControl, InputBase, SxProps } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface IProps {
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  placeHolder?: string;
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  fullWidth?: boolean;
  className?: string;
}

const MessageInput: React.FC<IProps> = (props) => {
  const { form, name } = props;
  const { errors } = form.formState;
  const hasError = !!errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormControl sx={{ height: "100%" }} fullWidth>
          <InputBase
            {...field}
            placeholder={props.placeHolder}
            className={props.className}
            fullWidth
            sx={props.sx}
          ></InputBase>
        </FormControl>
      )}
    />
  );
};

export default MessageInput;
