import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        className="dark:invert h-5 w-25"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />

      <h1 className="mt-100 bg-amber-700 text-white p-10 rounded-2xl text-3xl">
        {" "}
        Hello Next Js{" "}
      </h1>
    </div>
  );
}
