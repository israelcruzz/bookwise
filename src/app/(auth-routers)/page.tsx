import { Metadata } from "next";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi";
import { RatingCard } from "../_components/rating-card";
import { BookCard } from "../_components/book-card";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full p-8 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold text-2xl flex items-center gap-3">
          <HiOutlineHome size={32} color="#50B2C0" />
          <h2 className="text-2xl">Início</h2>
        </header>

        <section className="w-full">
          <h3 className="text-sm font-normal text-gray-200 mb-4">
            Avaliações mais recentes
          </h3>

          <div className="grid grid-cols-1 gap-3">
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </div>
        </section>
      </div>

      <div>
        <BookCard author="George Orwell" imageUri="/books/Book.png" ratingCount={4} title="A revolução dos bichos" />
      </div>
    </main>
  );
}
