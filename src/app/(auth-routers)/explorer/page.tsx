"use client";

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
];

export default function Explorer() {
  const [categoryNow, setCategoryNow] = useState<string>("Todos");

  return (
    <main className="w-full p-8">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold justify-between text-2xl flex items-center">
          <div className="flex gap-3">
            <HiOutlineViewGrid color="#50B2C0" size={32} />
            <h2 className="text-2xl">Explorar</h2>
          </div>

          <SearchInput />
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
      </div>
    </main>
  );
}
