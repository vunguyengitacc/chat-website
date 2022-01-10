import * as yup from "yup";

const updatePasswordScheme = yup
  .object()
  .shape({
    currentPassword: yup
      .string()
      .required("Please enter your current password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    newPassword: yup
      .string()
      .required("Please enter your new password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    repeatPassword: yup
      .string()
      .required("Please retype your new password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
  })
  .required();

export interface IUpdatePasswordParams {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}

export default updatePasswordScheme;
