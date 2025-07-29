'use client';
import Link from "next/link";
import { useCartStore } from "../store/cart";
import { CartItem } from "../ui/cart/cart-item";

export default function Page() {
  const pizzas = useCartStore((state) => state.items);
  const price = useCartStore((state) => state.totalPrice);

  return (
    <div className="flex md:flex-row flex-col items-stretch gap-8 py-10 md:px-30 px-10 bg-neutral-100 flex-1 relative">
      
      <div className="flex flex-col items-stretch gap-5 flex-1 md:pb-0 pb-20">
        <h1 className="md:text-4xl text-2xl font-bold w-full text-center">
          Your Cart
        </h1>
        {pizzas.length === 0 && (
          <>
            <p className="text-center text-2xl">Oops! Your cart is empty</p>
            <Link
              href="/menu"
              className="bg-red-800 hover:bg-red-900 text-white shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase self-center"
            >
              Go to menu
            </Link>
          </>
        )}
        {pizzas.map((item) => (
          <CartItem
            key={item.pizza.id}
            pizza={item.pizza}
            quantity={item.quantity}
          />
        ))}
      </div>

      {pizzas.length > 0 && (
        <div className="hidden md:flex flex-col items-center justify-start gap-5 w-80 sticky top-46 self-start bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl font-bold">
            Total:{" "}
            {new Intl.NumberFormat("en-EN", {
              style: "currency",
              currency: "EUR",
            }).format(price)}
          </p>
          <Link href="/checkout" className="bg-red-800 hover:bg-red-900 text-white text-center shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase w-full">
            Checkout
          </Link>
        </div>
      )}

      {pizzas.length > 0 && (
        <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center z-50">
          <span className="font-bold text-lg">
            {new Intl.NumberFormat("en-EN", {
              style: "currency",
              currency: "EUR",
            }).format(price)}
          </span>
          <Link href="/checkout" className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-full cursor-pointer text-sm uppercase">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
