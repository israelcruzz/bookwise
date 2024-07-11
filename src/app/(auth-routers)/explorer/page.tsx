"use client";

import { BookCard } from "@/app/_components/book-card";
import { CategoryItem } from "@/app/_components/category-item";
import { SearchInput } from "@/app/_components/search-input";
import { Book, Category } from "@prisma/client";
import { useEffect, useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IBook } from "../page";

export default function Explorer() {
  const [categoryNow, setCategoryNow] = useState<string>("Todos");
  const [books, setBooks] = useState<IBook[]>();
  const [categories, setCategories] = useState<Category[]>();

  const fetchBookDatas = async () => {
    const data = await fetch("/api/books", {
      next: {
        revalidate: 60 * 60,
      },
    });
    const response: IBook[] = await data.json();

    setBooks(response);
  };

  const fetchCategoriesData = async () => {
    const data = await fetch("/api/categories", {
      next: {
        revalidate: 60 * 60,
      },
    });

    const response: Category[] = await data.json();

    setCategories(response);
  };

  const fetchBookDatesWithCategory = async () => {
    const url = `/api/books/${categoryNow}`;

    const data = await fetch(url);
    const response: IBook[] = await data.json();

    setBooks(response);
  };

  useEffect(() => {
    fetchBookDatas();
    fetchCategoriesData();
  }, []);

  useEffect(() => {
    fetchBookDatesWithCategory();
  }, [categoryNow]);

  return (
    <main className="w-full p-8">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold justify-between text-2xl flex flex-col md:flex-row gap-2 items-center">
          <div className="flex gap-3">
            <HiOutlineViewGrid color="#50B2C0" size={32} />
            <h2 className="text-2xl">Explorar</h2>
          </div>

          <div className="w-[433px]">
            <SearchInput placeholder="Busque pelo nome do livro ou autor" />
          </div>
        </header>

        <div className="flex gap-2 flex-wrap">
          <CategoryItem
            name="Todos"
            isActive={categoryNow === "Todos"}
            onClick={() => setCategoryNow("Todos")}
          />

          {categories &&
            categories.map((category, i) => {
              return (
                <CategoryItem
                  key={i}
                  name={category.name}
                  isActive={categoryNow === category.name}
                  onClick={() => setCategoryNow(category.name)}
                />
              );
            })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {books &&
            books.map((book, i) => {
              return <BookCard book={book} key={i} read={false} />;
            })}
        </div>
      </div>
    </main>
  );
}
