import { formatDistanceDate } from "@/_utils/format-distance-date";
import { MeCommentCard } from "@/app/_components/me-comment-card";
import { RatingStars } from "@/app/_components/rating-stars";
import { SearchInput } from "@/app/_components/search-input";
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

        <div>
          <div className="w-[624px] flex flex-col gap-6 border-r border-[0.5] pr-6 border-[#181C2A]">
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

            <h1>a</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
