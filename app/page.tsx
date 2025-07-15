export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-start justify-center bg-[url(/images/pizza-bg.png)] bg-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-neutral-900/80 before:to-neutral-900/10">
      <div className="relative z-10 flex flex-col items-start justify-center sm:px-30 px-10">
      <h1 className="text-4xl font-bold sm:text-7xl text-white">All the best<br/> things are round</h1>
      <p className="text-neutral-200 py-5">Our pizzas are made by slaves... Oh, I really said that? I meant by the best italian chefs, yeah.</p>
      <button className="bg-red-800 hover:bg-red-900 text-white shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase">Order now</button>
      </div>
    </main>
  );
}
