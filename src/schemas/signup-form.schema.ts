import * as z from "zod";

export const signupFormSchema = z
  .object({
    name: z.string().min(3, "3 character minimum"),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, "6 character minimum"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof signupFormSchema>;
