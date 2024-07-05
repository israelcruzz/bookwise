import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Explorar",
};

export default function LayoutExplorer({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
