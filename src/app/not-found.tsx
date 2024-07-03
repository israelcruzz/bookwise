import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className="px-12 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white font-semibold">
          Ops... está página não existe
        </h1>
        <Image
          src="/not-found.svg"
          width={500}
          height={500}
          alt="404 icon"
          className="w-[400px] h-[400px]"
        />

        <Link href="/" className="w-full">
          <Button className="w-full h-[72px] text-2xl font-bold text-white">
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
