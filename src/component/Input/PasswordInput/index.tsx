import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SxProps,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface IPasswordTextInputProps {
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

const PasswordInput: React.FC<IPasswordTextInputProps> = ({
  name,
  form,
  ...other
}) => {
  const { errors } = form.formState;
  const hasError = !!errors[name];
  const [isHide, setIdHide] = useState<boolean>(true);

  const toggleType = () => {
    setIdHide(!isHide);
  };
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControl
          variant="outlined"
          error={hasError}
          fullWidth={other.fullWidth}
        >
          <>
            <OutlinedInput
              fullWidth
              {...field}
              label={other.label}
              placeholder={other.placeHolder}
              className={other.className}
              type={!isHide ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={toggleType}>
                    {isHide ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          </>
        </FormControl>
      )}
    />
  );
};

export default PasswordInput;
