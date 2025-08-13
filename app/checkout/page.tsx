'use client';
import { Summary } from "@/app/ui/checkout/summary/summary";
import { DeliveryForm } from "@/app/ui/checkout/delivery/delivery-form";
import { useCartStore } from "../store/cart";
import Link from "next/link";

export default function Page() {
    const total = useCartStore((state) => state.totalPrice);

    return <div className="flex flex-col items-stretch min-h-screen py-10 px-15">
        <h1 className="md:text-4xl text-2xl font-bold text-center">Checkout</h1>
        <div className="flex flex-col md:flex-row items-stretch gap-8 py-10">
            <div className="flex-1/2 shadow-lg rounded-lg bg-white p-8">
            <h2 className="md:text-3xl text-xl font-bold text-red-700">Order summary</h2>
            <Summary />
            <p className="text-2xl font-bold pt-5">Total: {total}€</p>
            </div>
            <DeliveryForm />
        </div>
        <Link href='/success' className="bg-red-800 hover:bg-red-900 text-white shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase self-center">Place order</Link>
    </div>;
}