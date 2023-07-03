"use client";

import Link from "next/link";
import React from "react";
import { useShoppingCartStore as store } from "@/app/zustand/store";
import CardProductCart from "./CardProductCart";

export default function page() {
  const { items, getTotalPrice } = store();

  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <div className="grid md:grid-cols-3 gap-4 ">
        <section className="md:col-span-2">
          <h2 className="font-bold text-2xl py-4">Cart</h2>
          <div className="">
            <table className="border-collapse border w-full">
              <thead>
                <tr>
                  <th className="border">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="border">PRODUCT</th>
                  <th className="border">QUANTITY</th>
                  <th className="border">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ _id, title, price, quantity, image_url }) => (
                  <CardProductCart
                    key={_id}
                    _id={_id}
                    title={title}
                    price={price}
                    quantity={quantity}
                    image_url={image_url}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <aside>
          <div>
            <div className="flex justify-between">
              <p className="text-slate-600 text-sm">Subtotal</p>
              <p className="text-slate-800 text-lg">${getTotalPrice()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-slate-600 text-sm">Discount</p>
              <p className="text-slate-800 text-sm">$0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-slate-800 text-sm">Grand total</p>
              <p className="text-slate-800 text-xl">${getTotalPrice()}</p>
            </div>
            <Link href="/payment">
              <button className="bg-slate-900 text-slate-200 w-full py-3 rounded">
                Checkout now
              </button>
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
