import { Pizza } from "@/app/types/pizza.type";
import Image from "next/image";

export const PizzaCard = ({ pizza }: { pizza: Pizza }) => {
  return (
    <div className="relative flex flex-col items-center text-center shadow-md p-4 rounded-xl border-1 border-red-600">
      <div className="relative flex items-center justify-center m-10 before:absolute before:inset-0 before:bg-red-600 before:opacity-10 before:rounded-t-full
      before:z-[-1] before:-translate-y-1/4 before:-translate-x-1/4 before:bottom-0 before:left-0 before:transform before:-rotate-30 before:w-60 before:h-30">
        <Image
            src={pizza.image}
            alt={pizza.name}
            width={200}
            height={200}
            className="rounded-md"
        />
      </div>
      <span className="text-xl font-bold mt-4">{pizza.name}</span>
      <span className="text-sm text-neutral-700 mt-1">{pizza.price}€</span>
      <button className="bg-red-800 hover:bg-red-900 text-white shadow-md py-2 px-4 rounded-full cursor-pointer text-sm uppercase mt-4">
        + Add to cart
      </button>
    </div>
  );
};
