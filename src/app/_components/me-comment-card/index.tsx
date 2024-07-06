import Image from "next/image";
import { RatingStars } from "../rating-stars";
import { formatDistanceDate } from "@/_utils/format-distance-date";

interface MeCommentCardProps {
  createdAt: Date;
  imageUri: string;
  bookName: string;
  author: string;
  ratingCount: number;
  ratingComment: string;
}

export const MeCommentCard = ({
  createdAt,
  imageUri,
  bookName,
  author,
  ratingCount,
  ratingComment,
}: MeCommentCardProps) => {
  return (
    <main className="w-full flex flex-col gap-2">
      <span className="text-sm text-gray-300">
        {formatDistanceDate(createdAt)}
      </span>

      <div className="bg-[#181C2A] rounded-lg p-6 flex flex-col gap-6">
        <header className="flex gap-5">
          <Image
            src={imageUri}
            width={98}
            height={134}
            className="w-[98px] h-[134px]"
            alt={`Image to book ${bookName}`}
          />

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-gray-100 font-bold text-lg">{bookName}</h3>
              <span className="text-sm text-gray-400">{author}</span>
            </div>

            <RatingStars size={16} rating={ratingCount} />
          </div>
        </header>

        <p className="text-sm text-gray-300">{ratingComment}</p>
      </div>
    </main>
  );
};
