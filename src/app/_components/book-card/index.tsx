"use client";

import Image from "next/image";
import { RatingStars } from "../rating-stars";
import { HTMLAttributes, useState } from "react";
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
import { BookOpen, BookmarkSimple, Check, X } from "@phosphor-icons/react";
import { InfoSection } from "../info-section";
import { RatingCommentCard } from "../rating-comment-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { PiDoorOpenFill } from "react-icons/pi";
import { IBook } from "@/app/(auth-routers)/page";
import { signIn, useSession } from "next-auth/react";

interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  book: IBook;
  read?: boolean;
}

export const BookCard = ({ book, read, className, ...rest }: BookCardProps) => {
  const [viewRatingTextArea, setViewRatingTextArea] = useState<boolean>(false);
  const [viewModalLogin, setViewModalLogin] = useState<boolean>(false);

  const { data } = useSession();

  const handleViewRatingModal = () => {
    if (!data?.user) {
      setViewModalLogin(true);
      return;
    }

    setViewRatingTextArea(true);
  };

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
            src={book.coverUrl}
            width={108}
            height={94}
            quality={100}
            alt={`Book ${book.name} Image`}
            className="h-full object-cover"
          />

          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-100 line-clamp-2">
                {book.name}
              </h2>
              <span className="text-sm text-gray-400">{book.author}</span>
            </div>

            <RatingStars rating={5} size={16} />
          </div>
        </main>
      </SheetTrigger>
      <SheetContent className="overflow-auto flex flex-col gap-6">
        <SheetHeader className="mt-6">
          <main className="bg-[#181C2A] rounded-lg pb-4 pt-6 px-8">
            <header className="flex gap-8 border-b-[0.5px] pb-10 border-[#252D4A]">
              <Image
                src={book.coverUrl}
                width={171}
                height={242}
                quality={100}
                alt={`Book ${book.name} Image`}
                className="object-cover w-[100px] md:h-full md:w-[171px]"
              />

              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-base md:text-lg text-gray-100">
                    {book.name}
                  </h2>
                  <span className="text-base font-normal text-gray-300">
                    {book.author}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <RatingStars size={20} rating={5} />
                  <span className="text-sm text-gray-400">
                    {book._count.rating}{" "}
                    {book._count.rating === 1 ? "avaliação" : "avaliações"}
                  </span>
                </div>
              </div>
            </header>
            <footer className="mt-3 mb-1 flex gap-6 items-center">
              <InfoSection sizeIcon={24} icon={BookmarkSimple}>
                <span className="text-sm text-gray-300">Categoria</span>
                <h3 className="text-base text-gray-200 font-bold">
                  {book.categories
                    .map((category) => category.category.name)
                    .join(", ")}
                </h3>
              </InfoSection>
              <InfoSection sizeIcon={24} icon={BookOpen}>
                <span className="text-sm text-gray-300">Páginas</span>
                <h3 className="text-base text-gray-200 font-bold">
                  {book.totalPages}
                </h3>
              </InfoSection>
            </footer>
          </main>
        </SheetHeader>
        <main className="flex flex-col gap-6">
          <div className="w-full flex justify-between">
            <h4 className="text-sm text-gray-300">Avaliações</h4>
            <button
              onClick={handleViewRatingModal}
              className="text-base font-bold text-[#8381D9]"
            >
              Avaliar
            </button>
          </div>

          {viewRatingTextArea && (
            <main className="bg-[#181C2A] p-6 flex flex-col gap-6 rounded-lg">
              <header className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Image
                    src="https://github.com/josepholiveira.png"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                    alt=""
                  />

                  <h2 className="text-base text-gray-100 font-bold">Joseph</h2>
                </div>

                <RatingStars size={28} rating={5} />
              </header>

              <textarea
                name=""
                id=""
                rows={6}
                className="rounded-sm bg-[#0E1116] px-5 py-3.5 text-gray-100 outline-none border border-[#303F73]"
                placeholder="Escreva sua avaliação"
              />

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setViewRatingTextArea(false)}
                  className="rounded-sm bg-[#252D4A] hover:bg-[#252D4A]/60 p-2"
                >
                  <X size={24} color="#50B2C0" />
                </button>
                <button className="rounded-sm bg-[#252D4A] hover:bg-[#252D4A]/60 p-2">
                  <Check
                    size={24}
                    color="#8381D9"
                    onClick={() => setViewModalLogin(true)}
                  />
                </button>
              </div>
            </main>
          )}

          <div className="grid grid-cols-1 gap-6">
            <RatingCommentCard
              imageUri="https://github.com/diego3g.png"
              name="Diego"
              ratingCount={4}
              createdAt={new Date()}
              description="Ótimo livro, comprei ele um tempo atrás e deixei parado na
                estante, mas após um certo tempo, me deu um certo extase
                momentaneo onde tive a vontade de ler, e com certeza foi uma
                ótima escolha."
              isActive
            />

            <RatingCommentCard
              imageUri="https://github.com/axelvt.png"
              name="Axel"
              ratingCount={2}
              createdAt={new Date()}
              description="Ótimo livro, comprei ele um tempo atrás e deixei parado na
                estante, mas após um certo tempo, me deu um certo extase
                momentaneo onde tive a vontade de ler, e com certeza foi uma
                ótima escolha."
            />
          </div>
        </main>

        <Dialog open={viewModalLogin} onOpenChange={setViewModalLogin}>
          <DialogTrigger></DialogTrigger>

          <DialogContent>
            <DialogTitle>Faça login para deixar sua avaliação</DialogTitle>

            <div>
              <div className="w-full flex flex-col gap-5">
                <Button
                  className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40"
                  onClick={() => signIn("google")}
                >
                  <FcGoogle size={24} />
                  <span className="font-bold text-lg text-gray-200">
                    Entrar com Google
                  </span>
                </Button>
                <Button
                  className="h-[72px] flex justify-start gap-5 bg-[#252D4A] hover:bg-[#252D4A]/40"
                  onClick={() => signIn("github")}
                >
                  <FaGithub size={24} color="#FFFFFF" />
                  <span className="font-bold text-lg text-gray-200">
                    Entrar com GitHub
                  </span>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </SheetContent>
    </Sheet>
  );
};
