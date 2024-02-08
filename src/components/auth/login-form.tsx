"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginFormValues, loginFormSchema } from "@/schemas/login-form.schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      // password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
    // use server action here
    // await login()...

    /**
     * Email Signin:
     * https://next-auth.js.org/configuration/pages#email-sign-in
     */
    signIn("resend", { email: values.email });
  };

  return (
    <div className="max-w-md outline outline-1 outline-muted-foreground rounded-md p-5 mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-center">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit">Sign in with email</Button>
        </form>
      </Form>

      <Separator />

      <div>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="link">
            Sign up instead
          </Link>
        </p>
        <button type="button" onClick={() => signIn()}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
