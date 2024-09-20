import { object, string } from "yup";

export const initialValues = {
  email: "",
  password: "",
};
export const dataForm = [
  { label: "Email", name: "email", type: "email" },
  { label: "Contraseña", name: "password", type: "password" },
];

export const validationSchema = object({
  email: string()
    .email("El email debe ser válido")
    .required("El email es requerido"),
  password: string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /[a-z]/,
      "La contraseña debe contener al menos una letra minúscula",
    )
    .matches(
      /[A-Z]/,
      "La contraseña debe contener al menos una letra mayúscula",
    )
    .matches(/[0-9]/, "La contraseña debe contener al menos un número")
    .matches(
      /[@$!%*?&]/,
      "La contraseña debe contener al menos un símbolo (por ejemplo: @, $, !, %, *, ?, &)",
    ),
});
