import { Pizza } from "@/app/types/pizza.type";
import { PizzaCard } from "./pizza-card";

async function fetchPizzas() {
  const response = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{ pizzas { id name price image } }`,
    }),
  });
  const data = await response.json();
  return data.data.pizzas;
}

export default async function MenuList() {
  const pizzas = await fetchPizzas();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      {pizzas.map((pizza: Pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}
