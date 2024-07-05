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
import { formatDistanceDate } from "@/_utils/format-distance-date";

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
      <SheetContent className="overflow-auto flex flex-col gap-6">
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
                <h3 className="text-base text-gray-200 font-bold">{pages}</h3>
              </InfoSection>
            </footer>
          </main>
        </SheetHeader>
        <main className="flex flex-col gap-6">
          <div className="w-full flex justify-between">
            <h4 className="text-sm text-gray-300">Avaliações</h4>
            <button className="text-base font-bold text-[#8381D9]">
              Avaliar
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-[#181C2A] flex flex-col gap-5 rounded-lg p-6">
              <header className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <Image
                    src="https://github.com/axelvt.png"
                    width={40}
                    height={40}
                    alt=""
                    className="rounded-full w-10 h-10"
                  />

                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-100 text-base">Axel</h3>
                    <span className="text-gray-300 text-sm">
                      {formatDistanceDate(new Date())}
                    </span>
                  </div>
                </div>

                <RatingStars size={16} rating={4} />
              </header>

              <p className="text-sm text-gray-300">
                Ótimo livro, comprei ele um tempo atrás e deixei parado na
                estante, mas após um certo tempo, me deu um certo extase
                momentaneo onde tive a vontade de ler, e com certeza foi uma
                ótima escolha.
              </p>
            </div>
            <div className="bg-[#181C2A] flex flex-col gap-5 rounded-lg p-6">
              <header className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <Image
                    src="https://github.com/diego3g.png"
                    width={40}
                    height={40}
                    alt=""
                    className="rounded-full w-10 h-10"
                  />

                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-100 text-base">Diego</h3>
                    <span className="text-gray-300 text-sm">
                      {formatDistanceDate(new Date())}
                    </span>
                  </div>
                </div>

                <RatingStars size={16} rating={4} />
              </header>

              <p className="text-sm text-gray-300">
                Ótimo livro, comprei ele um tempo atrás e deixei parado na
                estante, mas após um certo tempo, me deu um certo extase
                momentaneo onde tive a vontade de ler, e com certeza foi uma
                ótima escolha.
              </p>
            </div>
          </div>
        </main>
      </SheetContent>
    </Sheet>
  );
};
