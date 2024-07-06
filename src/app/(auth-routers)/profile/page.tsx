import { formatDistanceDate } from "@/_utils/format-distance-date";
import { InfoSection } from "@/app/_components/info-section";
import { MeCommentCard } from "@/app/_components/me-comment-card";
import { RatingStars } from "@/app/_components/rating-stars";
import { SearchInput } from "@/app/_components/search-input";
import { BookmarkSimple, Books, UserList } from "@phosphor-icons/react";
import { PiBooks, PiUserList, PiBookmarkSimple } from "react-icons/pi";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";

export default function Profile() {
  return (
    <main className="w-full p-8">
      <div className="flex flex-col gap-8">
        <header className="flex gap-2 flex-col md:flex-row">
          <HiOutlineUser color="#50B2C0" size={32} />
          <h2 className="text-2xl text-white font-bold">Perfil</h2>
        </header>

        <div className="flex">
          <div className="max-w-[624px] flex flex-col gap-6 border-r border-[0.5] pr-6 border-[#181C2A]">
            <SearchInput placeholder="Buscar livro avaliado" />

            <div className="mb-6 grid grid-cols-1 gap-6">
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <MeCommentCard
                    key={i}
                    author="Macaco Fudão"
                    bookName="Entendeno Algoritmos"
                    createdAt={new Date(2024, 3, 8, 8, 10, 20)}
                    imageUri="/books/entendendo-algoritmos.png"
                    ratingComment="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
              vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla
              ut et suspendisse enim suspendisse vitae. Leo non eget lacus
              sollicitudin tristique pretium quam. Mollis et luctus amet sed
              convallis varius massa sagittis. Proin sed proin at leo quis ac
              sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum
              enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod
              vitae ut turpis. Aliquam amet integer pellentesque."
                    ratingCount={4}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <Image
                src="https://github.com/israelcruzz.png"
                width={72}
                height={72}
                alt=""
                className="rounded-full"
              />
              <h1 className="text-gray-100 font-bold text-xl mt-2">
                Israel Cruz
              </h1>
              <span className="text-sm text-gray-400">membro desde 2019</span>
            </div>

            <div
              className="w-8 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #7FD1CC, #8381D9)" }}
            ></div>

            <div className="flex flex-col justify-start gap-5">
              <InfoSection icon={PiBooks} sizeIcon={32}>
                <span className="text-gray-200 text-base font-bold">10</span>
                <h2 className="text-sm text-gray-300">Livros Lidos</h2>
              </InfoSection>

              <InfoSection icon={PiUserList} sizeIcon={32}>
                <span className="text-gray-200 text-base font-bold">8</span>
                <h2 className="text-sm text-gray-300">Autores Lidos</h2>
              </InfoSection>

              <InfoSection icon={PiBookmarkSimple} sizeIcon={32}>
                <span className="text-gray-200 text-base font-bold">
                  Computação
                </span>
                <h2 className="text-sm text-gray-300">Categoria mais lida</h2>
              </InfoSection>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
