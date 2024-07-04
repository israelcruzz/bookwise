import Image from "next/image";
import { RatingStars } from "../rating-stars";
import { formatDistanceDate } from "@/_utils/format-distance-date";

interface ReadBookCardProps {
  imageUri: string;
  createdAt: Date;
  ratingCount: number;
  title: string;
  author: string;
  sinopse: string;
}

export const ReadBookCard = ({
  imageUri,
  createdAt,
  ratingCount,
  title,
  author,
  sinopse,
}: ReadBookCardProps) => {
  return (
    <main className="w-full bg-[#252D4A] rounded-lg px-6 py-5 flex gap-5">
      <Image src={imageUri} width={108} height={152} quality={100} alt="" />

      <div className="w-full flex flex-col justify-between">
        <header className="w-full">
          <div className="w-full flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">
              {formatDistanceDate(createdAt)}
            </span>
            <RatingStars rating={ratingCount} size={16} />
          </div>

          <h3 className="text-base font-bold text-gray-100">{title}</h3>
          <span className="text-sm text-gray-400">{author}</span>
        </header>

        <footer>
          <p className="line-clamp-2 text-sm text-gray-300">{sinopse}</p>
        </footer>
      </div>
    </main>
  );
};
