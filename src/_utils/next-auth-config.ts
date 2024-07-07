import { AuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../prisma/seed";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GitHub({
      clientId: "",
      clientSecret: "",
    }),
  ],
};