import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface LinkTextProps {
  linkUri: string;
  title: string;
}

export const LinkText = ({ linkUri, title }: LinkTextProps) => {
  return (
    <main className="flex justify-between">
      <h3 className="text-sm font-normal text-gray-200">{title}</h3>

      <Link
        href={linkUri}
        className="text-[#8381D9] hover:text-[#8381D9]/40 flex items-center justify-center gap-1"
      >
        <span className="font-bold text-sm">Ver Todos</span>
        <IoIosArrowForward size={18} />
      </Link>
    </main>
  );
};
