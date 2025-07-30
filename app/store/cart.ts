import { create } from "zustand";
import { CartItem } from "../types/cart-item.type";
import { Pizza } from "../types/pizza.type";

type CartState = {
    items: CartItem[];
    totalPrice: number;
    itemsCount: number;
    addToCart: (pizza: Pizza) => void;
    removeFromCart: (pizzaId: number) => void;
    changeQuantity: (pizzaId: number, newQty: number) => void;
    clearCart: () => void;
}

const calculateTotalPrice = (items: CartItem[]) => {
    return +items.reduce(
        (acc, item) => acc + item.pizza.price * item.quantity,
        0).toFixed(2);
}

const calculateItemsCount = (items: CartItem[]) => items.reduce((acc, item) => acc + item.quantity, 0);

export const useCartStore = create<CartState>((set) => ({
    items: [],
    totalPrice: 0,
    itemsCount: 0,
    addToCart: (pizza: Pizza) => {
        set((state) => {
            const existing = state.items.find(item => item.pizza.id === pizza.id);
            let updatedItems: CartItem[];

            if (existing) {
                updatedItems = state.items.map(item =>
                    item.pizza.id === pizza.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedItems = [...state.items, { pizza, quantity: 1 }];
            }

            const totalPrice = calculateTotalPrice(updatedItems);

            return { items: updatedItems, totalPrice, itemsCount: calculateItemsCount(updatedItems) };
        });
    },
    removeFromCart: (pizzaId: number) => {
        set((state) => {
            const updatedItems = state.items.filter((cartItem: CartItem) => cartItem.pizza.id !== pizzaId);
            const updatedTotal = calculateTotalPrice(updatedItems);
            return ({
                items: updatedItems,
                totalPrice: updatedTotal,
                itemsCount: calculateItemsCount(updatedItems)
            })
        })
    },
    changeQuantity: (pizzaId, newQty) => {
        set((state) => {
            const updatedItems = state.items.map((cartItem: CartItem) => cartItem.pizza.id === pizzaId ? { ...cartItem, quantity: newQty } : cartItem)
                .filter((cartItem) => cartItem.quantity > 0);
            const updatedTotal = calculateTotalPrice(updatedItems);
            return ({
                items: updatedItems,
                totalPrice: updatedTotal,
                itemsCount: calculateItemsCount(updatedItems)
            })
        });
    },
    clearCart: () => set({ items: [], totalPrice: 0, itemsCount: 0 }),
}))