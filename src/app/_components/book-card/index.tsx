import Image from "next/image";
import { RatingStars } from "../rating-stars";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  ratingCount: number;
  imageUri: string;
}

export const BookCard = ({
  title,
  author,
  ratingCount,
  imageUri,
  className,
  ...rest
}: BookCardProps) => {
  return (
    <main
      className={twMerge(
        "w-full bg-[#181C2A] rounded-lg gap-4 flex justify-between items-center p-5",
        className
      )}
      {...rest}
    >
      <Image
        src={imageUri}
        width={108}
        height={94}
        quality={100}
        alt={`Book ${title} Image`}
        className="h-full"
      />

      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-100">{title}</h2>
          <span className="text-sm text-gray-400">{author}</span>
        </div>

        <RatingStars rating={ratingCount} size={16} />
      </div>
    </main>
  );
};
