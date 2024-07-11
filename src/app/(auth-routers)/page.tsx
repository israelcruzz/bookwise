import { Metadata } from "next";
import { HiOutlineHome } from "react-icons/hi";
import { RatingCard } from "../_components/rating-card";
import { BookCard } from "../_components/book-card";
import { ReadBookCard } from "../_components/read-book-card";
import { LinkText } from "../_components/link-text";
import { prisma } from "@/_utils/prisma";
import { Book, Category } from "@prisma/client";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "Home",
};

export interface IBook extends Book {
  _count: { rating: number };
  categories: { category: Category }[];
}

export default async function Home() {
  const session = await getServerSession();

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

  const ratingsUser = await prisma.rating.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  const readBook = await prisma.rating.findFirst({
    where: {
      userId: session?.user.id,
    },
    include: {
      book: true,
    },
  });

  const lastRatings = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
    take: 10,
  });

  const findUserReadBook = (bookId: string) => {
    const filteredRating = ratingsUser.find(
      (rating) => rating.bookId === bookId
    );

    console.log(ratingsUser)
    console.log(filteredRating)

    if (!filteredRating) {
      return false;
    }

    return true;
  };

  return (
    <main className="w-full p-8">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold text-2xl flex items-center gap-3">
          <HiOutlineHome size={32} color="#50B2C0" />
          <h2 className="text-2xl">Início</h2>
        </header>

        <section className="w-full flex flex-col lg:flex-row gap-4 ">
          <div>
            {session?.user && readBook && (
              <div className="mb-8">
                <div className="mb-4">
                  <LinkText linkUri="/" title="Sua última leitura" />
                </div>
                <ReadBookCard
                  imageUri={readBook.book.coverUrl ?? ""}
                  author={readBook.book.author}
                  title={readBook.book.name}
                  ratingCount={readBook.rate}
                  sinopse={readBook.book.summary}
                  createdAt={readBook.createdAt}
                />
              </div>
            )}

            <div>
              <h3 className="text-sm font-normal text-gray-200 mb-4">
                Avaliações mais recentes
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {lastRatings.map((rating, i) => {
                  return (
                    <RatingCard
                      author={rating.book.author}
                      bookCoverUrl={rating.book.coverUrl}
                      bookName={rating.book.name}
                      countRating={rating.rate}
                      dateRating={rating.createdAt}
                      name={rating.user.name!}
                      profileImageUrl={rating.user.image!}
                      summary={rating.book.summary}
                      key={`Rating for Book ${rating.book.name} - ${i}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="mb-4">
              <LinkText linkUri="/" title="Livros populares" />
            </div>

            <div className="flex flex-col gap-3">
              {books.slice(0, 4).map((book, i) => {
                return (
                  <BookCard
                    book={book}
                    read={findUserReadBook(book.id)}
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
