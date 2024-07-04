import { HTMLAttributes } from "react";

interface CategoryItemProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  isActive?: boolean;
}

export const CategoryItem = ({
  name,
  isActive = false,
  className,
  ...rest
}: CategoryItemProps) => {
  return (
    <button
      className={`rounded-full flex justify-center items-center px-4 py-1 ${
        isActive
          ? "bg-[#2A2879]"
          : "border border-[#8381D9] hover:bg-[#8381D9] "
      }`}
      {...rest}
    >
      <span
        className={`${
          isActive ? "text-gray-100" : "text-[#8381D9] hover:text-white"
        }`}
      >
        {name}
      </span>
    </button>
  );
};
