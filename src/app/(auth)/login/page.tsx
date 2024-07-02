import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { PiDoorOpenFill } from "react-icons/pi";
import { Metadata } from "next";
import { Logo } from "@/app/_components/logo";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="max-w-[1220px] w-full h-full mx-auto p-6 justify-center gap-6 items-center flex flex-col md:flex-row">
      <section
        className="w-full md:w-1/2 h-[580px] bg-gray-700 rounded-lg flex justify-center items-center"
        style={{
          background:
            "linear-gradient(to bottom, #9694F5, rgba(0, 0, 0, 0.8)), url(/background-image.png) no-repeat center/cover",
        }}
      >
        <Logo />
      </section>

      <section className="w-full md:w-[600px] h-full items-center flex justify-center gap-6 md:p-24 flex-col">
        <div className="w-full flex flex-col items-start">
          <h1 className="font-bold text-2xl text-gray-100">Boas vindos!</h1>
          <p className="font-normal text-base text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>

        <div className="w-full flex flex-col gap-5">
          <Button className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40">
            <FcGoogle size={24} />
            <span className="font-bold text-lg text-gray-200">
              Entrar com Google
            </span>
          </Button>
          <Button className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40">
            <FaGithub size={24} color="#FFFFFF" />
            <span className="font-bold text-lg text-gray-200">
              Entrar com GitHub
            </span>
          </Button>
          <Button className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40">
            <PiDoorOpenFill size={24} />
            <span className="font-bold text-lg text-gray-200">
              Acessar como visitante
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
}
