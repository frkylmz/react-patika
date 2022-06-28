import { object, string } from "yup";
import * as yup from "yup";

const validations = object({
  email: string().email("Geçerli bir email girin.").required("Zorunlu alan."),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalıdır.")
    .required("Zorunlu alan."),
  passwordConfirm: string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required("Zorunlu alan."),
});

export default validations;
