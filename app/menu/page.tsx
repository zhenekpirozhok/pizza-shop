import { PizzaCard } from "../ui/menu/pizza-card";
import pizzas from "./data.json";

export default function Page() {
    return <div className="flex flex-col items-center gap-5 py-10 px-5">
        <p className="text-red-700 font-bold md:text-lg text-sm uppercase">Our Selection</p>
        <h1 className="md:text-4xl text-2xl font-bold md:w-1/2 w-full text-center">A Menu That Will Always Capture Your Heart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {pizzas.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}</div>
            
    </div>;
};