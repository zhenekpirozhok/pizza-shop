'use client';

import { useCartStore } from "@/app/store/cart";
import { CartItem as CartItemType } from "@/app/types/cart-item.type";
import Image from "next/image";

export const CartItem = ({ pizza, quantity }: CartItemType) => {
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  return (
    <div className="flex items-center justify-between gap-4 p-4 shadow-lg rounded-lg bg-white">
      <div className="flex items-center gap-4">
        <Image src={pizza.image} alt={pizza.name}   width={0}
  height={0}
  sizes="(min-width: 768px) 150px, 100px"
  className="w-[100px] md:w-[150px] h-auto rounded" />
        <div className="flex flex-col">
          <span className="md:text-2xl text-lg font-bold">{pizza.name}</span>
          <span className="text-md text-neutral-700">{pizza.price}€</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeQuantity(pizza.id, quantity - 1)}
          className="w-6 h-8 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          onClick={() => changeQuantity(pizza.id, quantity + 1)}
          className="w-6 h-8 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};
