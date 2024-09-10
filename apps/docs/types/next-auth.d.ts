import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    imageSrc?: string;
    phone?: number;
  }
  interface Session {
    user: {
      _id?: string;
      imageSrc?: string;
      phone?: number;
    } & DefaultSession["user"];
  }
}
