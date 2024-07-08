"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiDoorOpenFill } from "react-icons/pi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AreaButtons = () => {
  const router = useRouter();

  const handleClickButtonVisitant = () => {
    router.push("/");
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <Button
        onClick={() => signIn("google")}
        className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40"
      >
        <FcGoogle size={24} />
        <span className="font-bold text-lg text-gray-200">
          Entrar com Google
        </span>
      </Button>
      <Button
        onClick={() => signIn("github")}
        className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40"
      >
        <FaGithub size={24} color="#FFFFFF" />
        <span className="font-bold text-lg text-gray-200">
          Entrar com GitHub
        </span>
      </Button>
      <Button
        onClick={handleClickButtonVisitant}
        className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40"
      >
        <PiDoorOpenFill size={24} />
        <span className="font-bold text-lg text-gray-200">
          Acessar como visitante
        </span>
      </Button>
    </div>
  );
};
