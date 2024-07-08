import { Metadata } from "next";
import { HiOutlineHome } from "react-icons/hi";
import { RatingCard } from "../_components/rating-card";
import { BookCard } from "../_components/book-card";
import { ReadBookCard } from "../_components/read-book-card";
import { LinkText } from "../_components/link-text";
import { prisma } from "@/_utils/prisma";
import { Book, Category } from "@prisma/client";

export const metadata: Metadata = {
  title: "Home",
};

export interface IBook extends Book {
  _count: { rating: number };
  categories: { category: Category }[];
}

export default async function Home() {
  const books: IBook[] = await prisma.book.findMany({
    include: {
      _count: {
        select: { rating: true },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  console.log(books[0]);

  return (
    <main className="w-full p-8">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold text-2xl flex items-center gap-3">
          <HiOutlineHome size={32} color="#50B2C0" />
          <h2 className="text-2xl">Início</h2>
        </header>

        <section className="w-full flex flex-col md:flex-row gap-4 ">
          <div>
            <div className="mb-8">
              <div className="mb-4">
                <LinkText linkUri="/" title="Sua última leitura" />
              </div>

              <ReadBookCard
                imageUri="/books/codigo-limpo.png"
                author="Aditya Bhargava"
                title="Código Limpo"
                ratingCount={5}
                sinopse="lorem sianiaf pdakfoakf pdkaofkapokfpa. Adef jusifcs, scawfa. lorem sianiaf pdakfoakf pdkaofkapokfpa. Adef jusifcs, scawfa."
                createdAt={new Date(2024, 4, 20, 6, 30, 50)}
              />
            </div>

            <div>
              <h3 className="text-sm font-normal text-gray-200 mb-4">
                Avaliações mais recentes
              </h3>

              <div className="grid grid-cols-1 gap-3">
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-4">
              <LinkText linkUri="/" title="Livros populares" />
            </div>

            <div className="flex flex-col gap-3">
              {books.slice(0, 4).map((book, i) => {
                return (
                  <BookCard
                    book={book}
                    title="A revolução dos bichos"
                    className="h-[130px]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
