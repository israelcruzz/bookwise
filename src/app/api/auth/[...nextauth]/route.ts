import { nextAuthConfig } from "@/_utils/next-auth-config";
import nextAuth from "next-auth";

const handler = nextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
