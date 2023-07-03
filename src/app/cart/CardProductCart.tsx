import React from "react";
import { useShoppingCartStore } from "@/app/zustand/store";

export default function CardProductCart({
  _id,
  title,
  price,
  quantity,
  image_url,
}: any) {
  const { updateQuantity, removeItem } = useShoppingCartStore();

  const remove = () => {
    removeItem(_id);
  };

  const increment = () => {
    if (quantity < 10) {
      updateQuantity(_id, quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      updateQuantity(_id, quantity - 1);
    }
  };

  return (
    <tr>
      <td className="border">
        <input type="checkbox" name="" id="" />
      </td>
      <td className="border py-8">
        <div className="flex gap-4">
          <div className="w-20 h-20">
            <img
              className="w-full h-full object-cover rounded"
              src={image_url}
              alt=""
            />
          </div>
          <div>
            <h4 className="font-semibold">{title}</h4>
          </div>
        </div>
      </td>
      <td className="border">
        <div className="border">
          <div className="flex justify-center">
            <button className="p-2" onClick={decrement}>
              -
            </button>
            <p className="p-2">{quantity}</p>
            <button className="p-2" onClick={increment}>
              +
            </button>
          </div>
          <button
            className="border flex justify-center items-center gap-2 p-2 w-full font-semibold"
            onClick={remove}
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
            </svg>
            remove
          </button>
        </div>
      </td>
      <td className="border">{price}</td>
    </tr>
  );
}
