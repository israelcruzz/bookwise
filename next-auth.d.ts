import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
      } & NextAuthUser;
    }
}