import { SideMenu } from "../_components/side-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2 w-full h-full flex flex-col md:flex-row">
      <div className="hidden md:block">
        <SideMenu />
      </div>

      {children}
    </div>
  );
}
