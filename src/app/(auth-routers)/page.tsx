import { Metadata } from "next";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi";
import { RatingCard } from "../_components/rating-card";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full">
      <header className="text-white font-bold text-2xl flex items-center gap-3">
        <HiOutlineHome size={32} color="#50B2C0" />
        <h2 className="text-2xl">Início</h2>
      </header>

      <section className="w-full">
        <h3 className="text-sm font-normal text-gray-200">Avaliações mais recentes</h3>

        <RatingCard />

      </section>
    </main>
  );
}
