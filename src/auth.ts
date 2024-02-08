import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

/**
 * Use mongodb library to give the DB Adapter the clientPromise.
 * Use Mongoose for everything else.
 * https://github.com/nextauthjs/next-auth/discussions/3633
 */

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    signIn({ account, user, email }) {
      console.log({ account, user, email });
      return true;
    },
  },
  ...authConfig,
});
