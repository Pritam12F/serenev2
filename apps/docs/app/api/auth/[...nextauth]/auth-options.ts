import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@repo/db";
import { NextAuthOptions } from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || credentials.password) {
          return null;
        }
        try {
          const user = await db.query.users.findFirst({
            where: (user, { eq }) => eq(user.email, credentials?.email),
          });

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (err) {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id as string;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.phone = token.phone as number;
        session.user.imageSrc = token.imageSrc as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.phone = user.phone;
        token.imageSrc = user.imageSrc;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthOptions;
