import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image
        src="/bookwise-icon.svg"
        width={40}
        height={40}
        quality={100}
        alt="Logo BookWise"
        className="w-12 h-12"
      />
      <h1
        className="font-bold text-3xl text-bookwise"
        style={{
          background: "linear-gradient(to left, #7FD1CC, #9694F5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        BookWise
      </h1>
    </div>
  );
};