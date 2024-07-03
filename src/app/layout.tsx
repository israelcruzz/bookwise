import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | BookWise",
    default: "BookWise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/bookwise-icon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} bg-gray-900 w-full h-screen`}>{children}</body>
    </html>
  );
}
