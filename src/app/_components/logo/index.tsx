import Image from "next/image";

interface LogoProps {
  imageSize: "2" | "4" | "6" | "8" | "12";
  titleSize: "lg" | "xl" | "2xl" | "3xl";
}

export const Logo = ({ imageSize, titleSize }: LogoProps) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image
        src="/bookwise-icon.svg"
        width={40}
        height={40}
        quality={100}
        alt="Logo BookWise"
        className={`w-${imageSize} h-${imageSize}`}
      />
      <h1
        className={`font-bold text-${titleSize} text-bookwise`}
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
