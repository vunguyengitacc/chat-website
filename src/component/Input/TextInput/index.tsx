import {
  FormControl,
  FormHelperText,
  InputBase,
  OutlinedInput,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface ITextInputProps {
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

const TextInput: React.FC<ITextInputProps> = ({ name, form, ...other }) => {
  const { errors } = form.formState;
  const hasError = !!errors[name];

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControl
          variant="outlined"
          error={hasError}
          fullWidth={other.fullWidth}
          sx={{ width: "100%" }}
        >
          <>
            <Typography variant="subtitle2">{other.label}</Typography>
            <InputBase
              sx={{
                border: "solid .5px #e7e7e7",
                padding: "5px",
                borderRadius: "3px",
              }}
              fullWidth
              {...field}
              placeholder={other.placeHolder}
              className={other.className}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          </>
        </FormControl>
      )}
    />
  );
};

export default TextInput;
