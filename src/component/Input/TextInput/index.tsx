import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  SxProps,
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

  console.log(errors[name]?.message, hasError);
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
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          </>
        </FormControl>
      )}
    />
  );
};

export default TextInput;
