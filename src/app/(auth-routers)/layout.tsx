import AuthProvider from "@/_providers/next-auth-provider";
import { SideMenu } from "../_components/side-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2 w-full h-full flex flex-col md:flex-row">
      <AuthProvider>
        <div className="hidden md:block">
          <SideMenu />
        </div>
        {children}
      </AuthProvider>
    </div>
  );
}
