/* eslint-disable @typescript-eslint/naming-convention */
"use client";
import SweetAlert from "@/components/SweetAlert";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { dataForm, initialValues, validationSchema } from "../validation";
const FromSignIn = (): JSX.Element => {
  const onSubmit = async (
    values: typeof initialValues,
    action: FormikHelpers<typeof initialValues>,
  ): Promise<void> => {
    try {
      const res = await fetch("/api/auth/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        credentials: "include",
      });

      if (!res.ok) {
        return SweetAlert.error(`Erro al iniciar sección`);
      }

      const data = await res.json();
      SweetAlert.success(`${data.message}`);
      action.resetForm();
    } catch {
      throw new Error("Error al iniciar la sección");
    } finally {
      action.setSubmitting(false);
    }
  };

  return (
    <article className="min-h-[700px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-md w-full space-y-8 bg-gray-300/75 dark:bg-slate-600/90 p-10 rounded-xl">
        <h1>Inicio de sección</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleBlur }) => (
            <Form className="space-y-8">
              {dataForm.map(({ name, type, label }) => (
                <article key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 dark:text-white uppercase"
                  >
                    {label}
                    {"*"}
                  </label>
                  <Field
                    id={name}
                    name={name}
                    type={type}
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={name}
                    className="mt-1 block w-full px-3 py-2 borer border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name={name}
                    component={(): JSX.Element => (
                      <output className="mt-1 text-sm text-red-500">
                        {errors[name]}
                      </output>
                    )}
                  />
                </article>
              ))}
              <section className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full inline-flex dark:text-black font-bold items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-#282828 hover:text-white bg-primary hover:bg-primary p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Iniciar sesión
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </section>
    </article>
  );
};

export default FromSignIn;
