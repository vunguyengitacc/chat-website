import * as yup from "yup";

const scheme = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
    password: yup
      .string()
      .required("Please enter password")
      .min(8, "Please enter at least 8 characters.")
      .max(20, "Please enter at most 20 characters"),
  })
  .required();

export default scheme;
