import * as yup from "yup";

const updateUserScheme = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Please enter username")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    address: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    phone: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    email: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    bio: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
  })
  .required();

export interface IUpdateUserParams {
  name: string;
  email: string;
  address: string;
  phone: string;
  bio: string;
}

export default updateUserScheme;
