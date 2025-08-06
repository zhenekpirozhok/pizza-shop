'use client';

import { useEffect, useState } from "react";
import { Pizza } from "../types/pizza.type";
import { PizzaCard } from "../ui/menu/pizza-card";

export default function Page() {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    useEffect(() => {
        async function fetchPizzas() {
            try {
                const response = await fetch('/api/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `{ pizzas { id name price image } }`
                    })
                });
                const data = await response.json();
                setPizzas(data.data.pizzas);
            } catch (error) {
                console.error('Error fetching pizzas:', error);
            }
        }

        fetchPizzas();
    }, []);

    return <div className="flex flex-col items-center gap-5 py-10 px-5">
        <p className="text-red-700 font-bold md:text-lg text-sm uppercase">Our Selection</p>
        <h1 className="md:text-4xl text-2xl font-bold md:w-1/2 w-full text-center">A Menu That Will Always Capture Your Heart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {pizzas.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}</div>           
    </div>;
};