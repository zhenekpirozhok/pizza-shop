import { CartItem as CartItemType } from "@/app/types/cart-item.type";
import Image from "next/image";

export function SummaryItem({ pizza, quantity }: CartItemType) {
    return (
        <div className="flex items-center justify-between gap-4 p-4 border-b border-neutral-200 bg-white">
            <div className="flex items-center gap-4">
                <Image src={pizza.image} alt={pizza.name} width={100} height={100} />
                    <span className="md:text-xl text-lg">{pizza.name} x {quantity}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-lg">{pizza.price * quantity}€</span>
            </div>
        </div>
    );
}