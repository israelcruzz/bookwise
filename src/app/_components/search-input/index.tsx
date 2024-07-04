"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";

export const SearchInput = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const path: string = `/search/${query}`;

    router.push(path);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="w-[433px] border border-[#303F73] px-5 py-3.5 flex justify-between rounded-sm"
    >
      <input
        type="text"
        placeholder="Buscar livro ou autor"
        className="bg-transparent outline-none text-[#8D95AF] text-sm font-normal"
        onChange={(e) => setQuery(e.target.value)}
      />
      <CiSearch size={20} color="#303F73" />
    </form>
  );
};
