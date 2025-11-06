
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-blue-300 text-3xl">Welcome to the CS Club Website!</h1>
        <Link href="/example">
          <button className="p-2 bg-white text-black rounded-xl hover:pointer">You're name</button>
        </Link>

      {/*
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          </main>
       */}
      */
    </div>
  );
}
