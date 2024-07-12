import { formatDistanceDate } from "@/_utils/format-distance-date";
import { RatingStars } from "../rating-stars";
import Image from "next/image";

interface RatingCommentCardProps {
  imageUri: string;
  name: string;
  createdAt: Date;
  description: string;
  ratingCount: number;
  isActive?: boolean;
}

export const RatingCommentCard = ({
  imageUri,
  name,
  createdAt,
  description,
  ratingCount,
  isActive
}: RatingCommentCardProps) => {
  return (
    <main className={`${ isActive ? "bg-[#252D4A]" : "bg-[#181C2A]" } flex flex-col gap-5 rounded-lg p-6`}>
      <header className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src={imageUri}
            width={40}
            height={40}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />

          <div className="flex flex-col">
            <h3 className="font-bold text-gray-100 text-base">{name}</h3>
            <span className="text-gray-300 text-sm">
              {formatDistanceDate(createdAt)}
            </span>
          </div>
        </div>

        <RatingStars size={16} rating={ratingCount} />
      </header>

      <p className="text-sm text-gray-300">{description}</p>
    </main>
  );
};