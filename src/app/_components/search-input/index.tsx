"use client";

import { useRouter } from "next/navigation";
import {
  FormEvent,
  HTMLAttributes,
  useState,
} from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> { placeholder: string }

export const SearchInput = ({ placeholder ,...props }: SearchInputProps) => {
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
      className="w-full border border-[#303F73] px-5 py-3.5 flex justify-between rounded-sm"
    >
      <input
        type="text"
        {...props}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-[#8D95AF] text-sm font-normal"
        onChange={(e) => setQuery(e.target.value)}
      />
      <CiSearch size={20} color="#303F73" />
    </form>
  );
};
