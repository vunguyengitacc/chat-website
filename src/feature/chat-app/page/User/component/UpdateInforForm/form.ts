import * as yup from "yup";

const updateUserScheme = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Please enter your name")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    address: yup.string().max(20, "Please enter at most 20 characters"),
    phone: yup.string(),
    email: yup.string(),
    bio: yup.string().max(300, "Please enter at most 300 characters"),
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
