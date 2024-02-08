import { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

export default {
  providers: [
    Github,
    Resend({
      apiKey: process.env.EMAIL_SERVER_PASSWORD,
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT!),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
} satisfies NextAuthConfig;
