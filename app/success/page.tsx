'use client';
import { useCartStore } from "../store/cart";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);


    return <div className="flex flex-col items-center justify-center h-full">
        <p className="text-2xl font-bold">Thank you for your order!</p>
        <p className="text-xl text-neutral-500">We will deliver it to you as soon as possible</p>
    <Link href="/menu" className="bg-red-800 hover:bg-red-900 text-white shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase self-center mt-10">Go back to menu</Link>
    </div>;
}