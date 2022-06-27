import { object, string } from "yup";
import * as yup from "yup";

const validations = object({
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default validations;
