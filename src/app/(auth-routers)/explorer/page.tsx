"use client";

import { BookCard } from "@/app/_components/book-card";
import { CategoryItem } from "@/app/_components/category-item";
import { SearchInput } from "@/app/_components/search-input";
import { Metadata } from "next";
import { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

const CATEGORIES = [
  "Todos",
  "Terror",
  "Ficção",
  "Aventura",
  "Horror",
  "Romance",
  "Fantasia",
  "Mistério",
  "Drama",
  "Ciência",
];

export default function Explorer() {
  const [categoryNow, setCategoryNow] = useState<string>("Todos");

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
          {CATEGORIES.map((category, i) => {
            return (
              <CategoryItem
                key={i}
                name={category}
                isActive={categoryNow === category}
                onClick={() => setCategoryNow(category)}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => {
            return (
              <BookCard
                pages={200}
                author="Aditya Y. Bhargava"
                imageUri="/books/entendendo-algoritmos.png"
                ratingCount={3}
                title="Entendendo Algoritmos"
                available={3}
                categoryName="Computação, educação"
                key={i}
                read={i === 0 || i === 5}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
