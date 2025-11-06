import Link from "next/link";

export default function Example() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-blue-300 text-3xl">Example Page</h1>
      <p className="text-white text-lg">This is the example page!</p>
      <Link href="/">
        <button className="p-2 bg-white text-black rounded-xl hover:pointer">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
