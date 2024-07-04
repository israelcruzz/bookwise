import Image from "next/image";
import { RatingStars } from "../rating-stars";

interface BookCardProps {
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
}: BookCardProps) => {
  return (
    <main className="w-full h-[130px] bg-[#181C2A] rounded-lg gap-4 flex justify-between items-center p-5">
      <Image src={imageUri} width={64} height={94} quality={100} alt="" className="" />

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
