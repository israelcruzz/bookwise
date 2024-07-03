"use client";

import Link from "next/link";
import { Logo } from "../logo";
import {
  HiOutlineHome,
  HiOutlineViewGrid,
  HiOutlineUser,
} from "react-icons/hi";
import { usePathname } from "next/navigation";
import { IoExitOutline, IoLogInOutline } from "react-icons/io5";

export const SideMenu = () => {
  const path = usePathname();

  return (
    <menu
      className="min-w-[232px] min-h-full py-8 rounded-lg flex flex-col items-center justify-between"
      style={{ background: "url(/side-menu-bg.png) no-repeat center/cover" }}
    >
      <header>
        <Logo imageSize="8" titleSize="lg" />

        <nav className="w-full flex flex-col justify-center items-center mt-16">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className={`text-bold ${
                path === "/" ? "text-white active-link" : "text-gray-400"
              } hover:text-[#9694F5] flex gap-2`}
            >
              <HiOutlineHome size={24} />
              <h1>Início</h1>
            </Link>

            <Link
              href="/explorer"
              className={`text-bold ${
                path === "/explorer"
                  ? "text-white active-link"
                  : "text-gray-400"
              } hover:text-[#9694F5] flex gap-2`}
            >
              <HiOutlineViewGrid size={24} />
              <h1>Explorar</h1>
            </Link>

            <Link
              href="/profile"
              className={`text-bold ${
                path === "/profile" ? "text-white active-link" : "text-gray-400"
              } hover:text-[#9694F5] flex gap-2`}
            >
              <HiOutlineUser size={24} />
              <h1>Perfil</h1>
            </Link>
          </div>
        </nav>
      </header>

      <footer>
        <Link
          href="/login"
          className="text-white font-bold flex gap-2  hover:text-[#50B2C0]"
        >
          <h1>Fazer Login</h1>
          <IoLogInOutline size={24} className="text-[#50B2C0] text-base" />
        </Link>
      </footer>
    </menu>
  );
};
