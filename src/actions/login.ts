"use server";

import { LoginFormValues, loginFormSchema } from "@/schemas/login-form.schema";

export const login = (values: LoginFormValues) => {
  const validatedFields = loginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
