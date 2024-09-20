/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/naming-convention */
"use client";
import type { FormikHelpers } from "formik";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { dataForm, initialValues, validationSchema } from "../validation";

const FormSignIn = (): JSX.Element => {
  const onSubmit = async (
    values: typeof initialValues,
    action: FormikHelpers<typeof initialValues>,
  ): Promise<void> => {
    try {
      console.log(values);
      // Realizamos la llamada a la API desde el cliente
      const res = await fetch(`/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("Datos de la API:", res);

      if (!res.ok) {
        throw new Error("Error en la respuesta de la red");
      }

      const data = await res.json();
      console.log("Datos de la API:", data);
    } catch (error) {
      console.error("Error durante la solicitud:", error);
    }
  };

  return (
    <article className="min-h-[700px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-md w-full space-y-8 bg-gray-300/75 dark:bg-slate-600/90 p-10 rounded-xl">
        <h1>Iniciar sesión</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleBlur }) => (
            <Form className="space-y-8">
              {dataForm.map(({ name, type, label }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 dark:text-white uppercase"
                  >
                    {label} {"*"}
                  </label>
                  <Field
                    id={name}
                    name={name}
                    type={type}
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={label}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <ErrorMessage
                    name={name}
                    component={(): JSX.Element => (
                      <p className="mt-1 text-sm text-red-500">
                        {errors[name]}
                      </p>
                    )}
                  />
                </div>
              ))}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full inline-flex dark:text-black font-bold items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-#282828 hover:text-white bg-primary hover:bg-primary p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Iniciar sesión
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </article>
  );
};

export default FormSignIn;
