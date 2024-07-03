"use client";

import Image from "next/image";
import { useState } from "react";
import { RatingStars } from "../rating-stars";

export const RatingCard = () => {
  const [viewAllText, setViewAllText] = useState<boolean>(false);

  const onChangeRating = (currentRating: number) => {
    console.log(currentRating);
  }

  return (
    <main className="w-full max-h-[280px] flex flex-col gap-8 bg-[#181C2A] rounded-lg p-6">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src="https://github.com/israelcruzz.png"
            width={40}
            height={40}
            alt=""
            className="rounded-full w-10 h-10"
          />

          <div>
            <h4 className="text-base font-normal text-gray-100">Israel Cruz</h4>
            <span className="text-sm font-normal text-gray-400">Hoje</span>
          </div>
        </div>

        {/* TODO: INCREMENT RATING STARS */}
        <RatingStars rating={4} size={18} />
      </header>

      <footer className="flex h-[152px] gap-5">
        <Image
          src="/books/o-hobbit.png"
          width={108}
          height={152}
          quality={100}
          alt=""
          className=""
        />

        <div className="overflow-auto flex flex-col gap-5">
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-gray-100">O Hobbit</h2>
            <span className="text-sm font-normal text-gray-400">
              J.R.R. Tolkien
            </span>
          </div>

          <p
            className={`text-sm font-normal text-gray-300 ${
              viewAllText ? "line-clamp-none" : "line-clamp-3"
            } `}
          >
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh, Cras fermentum id pulvinar varius leo a
            in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
            <button
              onClick={() => setViewAllText(!viewAllText)}
              className="text-sm font-medium text-[#8381D9] hover:text-[#8381D9]/60"
            >
              {viewAllText ? "Ver Menos" : "Ver Mais"}
            </button>
          </p>
        </div>
      </footer>
    </main>
  );
};
