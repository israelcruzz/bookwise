"use client";

import Image from "next/image";
import { useState } from "react";
import { RatingStars } from "../rating-stars";
import { formatDistanceDate } from "@/_utils/format-distance-date";

interface RatingCardProps {
  profileImageUrl: string;
  name: string;
  dateRating: Date;
  countRating: number;
  bookCoverUrl: string;
  bookName: string;
  author: string;
  summary: string;
}

export const RatingCard = ({
  profileImageUrl,
  name,
  dateRating,
  countRating,
  bookCoverUrl,
  bookName,
  author,
  summary,
}: RatingCardProps) => {
  const [viewAllText, setViewAllText] = useState<boolean>(false);

  return (
    <main className="w-full max-h-[280px] flex flex-col gap-8 bg-[#181C2A] rounded-lg p-6">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={profileImageUrl}
            width={40}
            height={40}
            alt=""
            className="rounded-full w-10 h-10 border-2 border-[#8381D9]"
          />

          <div>
            <h4 className="text-base font-normal text-gray-100">{name}</h4>
            <span className="text-sm font-normal text-gray-400">
              {formatDistanceDate(dateRating)}
            </span>
          </div>
        </div>

        <RatingStars rating={countRating} size={18} />
      </header>

      <footer className="flex h-[152px] gap-5">
        <Image
          src={bookCoverUrl}
          width={108}
          height={152}
          quality={100}
          alt=""
          className="w-[108px] h-[152px] object-cover"
        />

        <div className="overflow-auto flex flex-col gap-5">
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-gray-100">{bookName}</h2>
            <span className="text-sm font-normal text-gray-400">{author}</span>
          </div>

          <p
            className={`text-sm font-normal text-gray-300 ${
              viewAllText ? "line-clamp-none" : "line-clamp-3"
            } `}
          >
            {summary}
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
