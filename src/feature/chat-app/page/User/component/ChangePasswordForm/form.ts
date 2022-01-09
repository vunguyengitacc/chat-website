import * as yup from "yup";

const updatePasswordScheme = yup
  .object()
  .shape({
    currentPassword: yup
      .string()
      .required("Please enter username")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    newpassword: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    repeatPassword: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
  })
  .required();

export interface IUpdatePasswordParams {
  currentPassword: string;
  newpassword: string;
  repeatPassword: string;
}

export default updatePasswordScheme;
