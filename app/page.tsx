import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-0 flex-1 flex flex-col items-start justify-center bg-[url(/images/pizza-bg.png)] bg-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-neutral-900/80 before:to-neutral-900/10">
      <div className="relative z-10 flex flex-col items-start justify-center sm:px-30 px-10">
        <div className="flex sm:flex-row flex-col items-center gap-10 sm:gap-5">
          <Image src="/icons/pizza.svg" alt="logo" width={100} height={100} />
          <h1 className="text-4xl font-bold sm:text-7xl text-white">All the best<br/> things are <span className="text-red-400">round</span></h1>
        </div>
      <p className="text-neutral-200 py-5">Our pizzas are made by slaves... Oh, I really said that? I meant by the best italian chefs, yeah.</p>
      <button className="bg-red-800 hover:bg-red-900 text-white shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase">Order now</button>
      </div>
    </main>
  );
}
