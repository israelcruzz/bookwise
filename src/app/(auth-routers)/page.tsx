import { Metadata } from "next";
import { HiOutlineHome } from "react-icons/hi";
import { RatingCard } from "../_components/rating-card";
import { BookCard } from "../_components/book-card";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { ReadBookCard } from "../_components/read-book-card";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full p-8 flex gap-6">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold text-2xl flex items-center gap-3">
          <HiOutlineHome size={32} color="#50B2C0" />
          <h2 className="text-2xl">Início</h2>
        </header>

        <section className="w-full flex gap-4">
          <div>
            <h3 className="text-sm font-normal text-gray-200 mb-4">
              Avaliações mais recentes
            </h3>

            <div className="grid grid-cols-1 gap-3">
              <ReadBookCard
                imageUri="/books/codigo-limpo.png"
                author="Aditya Bhargava"
                title="Código Limpo"
                ratingCount={5}
                sinopse="lorem sianiaf pdakfoakf pdkaofkapokfpa. Adef jusifcs, scawfa. lorem sianiaf pdakfoakf pdkaofkapokfpa. Adef jusifcs, scawfa."
                createdAt={new Date(2024, 4, 20, 6, 30, 50)}
              />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
            </div>
          </div>

          <div className="w-full">
            <div className="flex justify-between">
              <h3 className="text-sm font-normal text-gray-200 mb-4">
                Livros populares
              </h3>
              <Link
                href="/explorer"
                className="text-[#8381D9] hover:text-[#8381D9]/40 flex gap-1"
              >
                <span className="font-bold text-sm">Ver Todos</span>
                <IoIosArrowForward size={18} />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <BookCard
                author="George Orwell"
                imageUri="/books/Book.png"
                ratingCount={4}
                title="A revolução dos bichos"
              />

              <BookCard
                author="George Orwell"
                imageUri="/books/Book.png"
                ratingCount={4}
                title="A revolução dos bichos"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
