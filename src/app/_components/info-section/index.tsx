import { IconProps } from "@phosphor-icons/react";
import React from "react";

interface InfoSectionProps {
  children: React.ReactNode;
  sizeIcon: number;
  icon: React.ComponentType<IconProps>;
}

export const InfoSection = ({
  children,
  sizeIcon,
  icon: Icon,
}: InfoSectionProps) => {
  return (
    <main className="flex gap-4 items-center">
      <Icon size={sizeIcon} color="#50B2C0" />

      <div className="flex flex-col">{children}</div>
    </main>
  );
};
