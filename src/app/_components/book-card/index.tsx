"use client";

import Image from "next/image";
import { RatingStars } from "../rating-stars";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookOpen, BookmarkSimple } from "@phosphor-icons/react";
import { InfoSection } from "../info-section";

interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  ratingCount: number;
  available: number;
  imageUri: string;
  categoryName: string;
  pages: number;
  read?: boolean;
}

export const BookCard = ({
  title,
  author,
  categoryName,
  ratingCount,
  available,
  imageUri,
  read,
  pages,
  className,
  ...rest
}: BookCardProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <main
          className={twMerge(
            "relative cursor-pointer w-full bg-[#181C2A] rounded-lg gap-4 flex justify-between items-center p-5",
            className
          )}
          {...rest}
        >
          {read && (
            <div className="absolute top-0 right-0 px-3 py-1 rounded-tr-lg bg-[#0A313C]">
              <span className="text-[#50B2C0] font-bold text-[12px]">LIDO</span>
            </div>
          )}

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

            <RatingStars rating={available} size={16} />
          </div>
        </main>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-6">
          <main className="bg-[#181C2A] rounded-lg pb-4 pt-6 px-8">
            <header className="flex gap-8 border-b-[0.5px] pb-10 border-[#252D4A]">
              <Image
                src={imageUri}
                width={171}
                height={242}
                quality={100}
                alt={`Book ${title} Image`}
                className="h-full"
              />

              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-lg text-gray-100">{title}</h2>
                  <span className="text-base font-normal text-gray-300">
                    {author}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <RatingStars size={20} rating={available} />
                  <span className="text-sm text-gray-400">
                    {ratingCount} avaliações
                  </span>
                </div>
              </div>
            </header>
            <footer className="mt-3 mb-1 flex gap-6 items-center">
              <InfoSection sizeIcon={24} icon={BookmarkSimple}>
                <span className="text-sm text-gray-300">Categoria</span>
                <h3 className="text-base text-gray-200 font-bold">
                  {categoryName}
                </h3>
              </InfoSection>
              <InfoSection sizeIcon={24} icon={BookOpen}>
                <span className="text-sm text-gray-300">Páginas</span>
                <h3 className="text-base text-gray-200 font-bold">
                  {pages}
                </h3>
              </InfoSection>
            </footer>
          </main>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
      </SheetContent>
    </Sheet>
  );
};
