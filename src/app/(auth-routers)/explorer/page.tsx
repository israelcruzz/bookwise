import { SearchInput } from "@/app/_components/search-input";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function Explorer() {
  return (
    <main className="w-full p-8">
      <div className="flex flex-col gap-8">
        <header className="text-white font-bold text-2xl flex items-center gap-3">
          <HiOutlineViewGrid color="#50B2C0" size={32} />
          <h2 className="text-2xl">Explorer</h2>

          <SearchInput />
        </header>
      </div>
    </main>
  );
}
