export function DeliveryForm() {
    return <div className="flex-1/2 shadow-lg rounded-lg bg-white p-8">
        <h2 className="md:text-3xl text-xl font-bold text-red-700">Delivery</h2>
        <form className="flex flex-col gap-4 py-10">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="border border-neutral-200 rounded-md p-2" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" className="border border-neutral-200 rounded-md p-2" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" className="border border-neutral-200 rounded-md p-2" />
            </div>
        </form>
    </div>;
}