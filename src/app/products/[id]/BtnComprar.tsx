"use client";

import { useState } from "react";
import { useShoppingCartStore } from "@/app/zustand/store";

export default function BtnComprar({ product }: any) {
  const [count, setCount] = useState(1);
  const { addItem, items } = useShoppingCartStore();

  console.log({ items });

  const handleClick = () => {
    addItem(product, count);
  };

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="flex">
        <button className="p-2" onClick={decrement}>
          -
        </button>
        <p className="p-2">{count}</p>
        <button className="p-2" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="px-6 py-3 bg-slate-900 text-slate-200 rounded"
        onClick={handleClick}
      >
        comprar
      </button>
    </>
  );
}
