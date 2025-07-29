'use client';
import { useCartStore } from "@/app/store/cart";
import { SummaryItem } from "./summary-item";

export function Summary() {
    const pizzas = useCartStore((state) => state.items);
    return <div>{pizzas.map((item) => <SummaryItem key={item.pizza.id} pizza={item.pizza} quantity={item.quantity} />)}</div>
}