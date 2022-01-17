import * as yup from "yup";

const messageScheme = yup
  .object()
  .shape({
    content: yup
      .string()
      .required("Please enter username")
      .min(1, "Please enter at least 1 characters.")
      .max(500, "Please enter at most 500 characters"),
  })
  .required();

export interface IMessagePayloadParams {
  content: string;
}

export default messageScheme;
