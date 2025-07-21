import pizzas from "../menu/data.json";
import { CartItem } from "../ui/cart/cart-item";

export default function Page() {
    return <div className="flex flex-col items-stretch gap-5 py-10 px-5 bg-neutral-100">
        <h1 className="md:text-4xl text-2xl font-bold w-full text-center">Your Cart</h1>
        {pizzas.map((pizza) => <CartItem key={pizza.id} pizza={pizza} quantity={1} />)}
        <p className="text-right text-2xl py-5"><span className="font-bold">Total:</span> {new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "EUR",
}).format(
  pizzas.reduce((acc, pizza) => acc + pizza.price, 0)
)}</p>
 <button className="bg-red-800 hover:bg-red-900 text-white shadow-md py-4 px-6 rounded-full cursor-pointer text-md uppercase self-end">Proceed to Checkout</button>
    </div>;
}