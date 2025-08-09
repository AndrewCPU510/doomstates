import React, { forwardRef } from 'react';

const products = [
    { name: 'Single Pack', quantity: '1 Box', price: '$9.99' },
    { name: 'Field Ration', quantity: '3 Boxes', price: '$27.99' },
    { name: 'Survival Crate', quantity: '9 Boxes', price: '$79.99' }
];

const OrderSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className="py-24 lg:py-40 bg-brand-offwhite text-brand-charcoal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">Secure Your Supply</h2>
                    <p className="mt-4 text-lg font-mono text-stone-600 max-w-3xl mx-auto">Choose your endurance level. All packs are sealed for maximum shelf life.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {products.map((product, index) => (
                        <div key={index} className="border-2 border-stone-300 p-8 flex flex-col">
                            <h3 className="text-2xl font-bold uppercase tracking-wider">{product.name}</h3>
                            <p className="font-mono text-stone-600">{product.quantity}</p>
                            <p className="my-6 text-4xl font-bold">{product.price}</p>
                            <button className="mt-auto w-full px-6 py-3 bg-brand-charcoal border-2 border-brand-charcoal text-brand-offwhite font-bold uppercase tracking-wider hover:bg-transparent hover:text-brand-charcoal transition-colors duration-300">
                                Add to Pack
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-8 uppercase">Checkout</h3>
                    <form className="grid grid-cols-1 gap-6 font-mono">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700 uppercase">Email Address</label>
                            <input type="email" id="email" className="mt-1 block w-full bg-transparent border-2 border-stone-300 p-3 focus:border-brand-charcoal focus:ring-0 transition" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-stone-700 uppercase">Shipping Address</label>
                            <input type="text" id="address" className="mt-1 block w-full bg-transparent border-2 border-stone-300 p-3 focus:border-brand-charcoal focus:ring-0 transition" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                               <label htmlFor="city" className="block text-sm font-medium text-stone-700 uppercase">City</label>
                               <input type="text" id="city" className="mt-1 block w-full bg-transparent border-2 border-stone-300 p-3 focus:border-brand-charcoal focus:ring-0 transition" />
                            </div>
                            <div>
                               <label htmlFor="state" className="block text-sm font-medium text-stone-700 uppercase">State</label>
                               <input type="text" id="state" className="mt-1 block w-full bg-transparent border-2 border-stone-300 p-3 focus:border-brand-charcoal focus:ring-0 transition" />
                            </div>
                            <div>
                               <label htmlFor="zip" className="block text-sm font-medium text-stone-700 uppercase">Zip</label>
                               <input type="text" id="zip" className="mt-1 block w-full bg-transparent border-2 border-stone-300 p-3 focus:border-brand-charcoal focus:ring-0 transition" />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-4 px-6 py-4 bg-brand-olive text-brand-offwhite font-bold uppercase tracking-wider text-lg hover:bg-brand-charcoal transition-colors duration-300">
                            Confirm Mission
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
});

OrderSection.displayName = 'OrderSection';
export default OrderSection;