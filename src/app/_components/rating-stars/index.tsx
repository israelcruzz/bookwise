"use client";

import { Star } from "@phosphor-icons/react";
import { useState } from "react";

interface RatingStarsProps {
  rating: number;
  size: number;
  isEdit?: boolean;
  onChangeRating?: (currentRating: number) => void;
}

export const RatingStars = ({
  rating,
  size,
  isEdit = false,
  onChangeRating,
}: RatingStarsProps) => {
  const [newRating, setNewRating] = useState(1);

  const ratingValue = isEdit ? newRating : rating;

  const handleChangeRatingValue = (changeRating: number) => {
    if (isEdit) {
      setNewRating(changeRating);
      onChangeRating!(changeRating);
    }
  };

  const handleChangeOnMouseEnterRatingStars = (changeRating: number) => {
    if (isEdit) {
      setNewRating(changeRating);
      onChangeRating!(changeRating);
    }
  };

  return (
    <div className="flex text-[#8381D9]">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Star
            size={size}
            key={`star-${index + 1}`}
            weight={index + 1 <= ratingValue ? "fill" : "regular"}
            onClick={() => handleChangeRatingValue(index + 1)}
            className={`${isEdit && "cursor-pointer"}`}
            onMouseEnter={() => handleChangeOnMouseEnterRatingStars(index + 1)}
          />
        );
      })}
    </div>
  );
};
