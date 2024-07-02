import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { PiDoorOpenFill } from "react-icons/pi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="max-w-[1220px] w-full mx-auto p-6 justify-center gap-6 items-center flex flex-col md:flex-row">
      <section
        className="w-full md:w-1/2 h-[580px] bg-gray-700 rounded-lg flex justify-center items-center"
        style={{
          background:
            "linear-gradient(to bottom, #9694F5, rgba(0, 0, 0, 0.8)), url(/background-image.png) no-repeat center/cover",
        }}
      >
        <div className="flex justify-center items-center gap-3">
          <Image
            src="/bookwise-icon.svg"
            width={40}
            height={40}
            quality={100}
            alt="Logo BookWise"
            className="w-12 h-12"
          />
          <h1
            className="font-bold text-3xl text-bookwise"
            style={{
              background: "linear-gradient(to left, #7FD1CC, #9694F5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BookWise
          </h1>
        </div>
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
