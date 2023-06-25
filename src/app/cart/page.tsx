import React from "react";

export default function page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <section>
        <h2>Cart</h2>
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
              <tr>
                <td className="border">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="border py-8">
                  <div className="flex gap-4">
                    <div className="w-20 h-20">
                      <img
                        className="w-full h-full object-cover rounded"
                        src="https://www.hd-tecnologia.com/imagenes/articulos/2022/05/TOP-5-mejores-laptops-para-estudiantes-en-2022-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">laptop</h4>
                    </div>
                  </div>
                </td>
                <td className="border">
                  <div className="border">
                    <div className="flex justify-center">
                      <button className="p-2">-</button>
                      <p className="p-2">3</p>
                      <button className="p-2">+</button>
                    </div>
                    <button className="border flex justify-center items-center gap-2 p-2 w-full font-semibold">
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
                <td className="border">500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <aside>
        <div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$2000</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between">
            <p>Grand total</p>
            <p>$2000</p>
          </div>
          <button className="bg-slate-900 text-slate-200 w-full py-3 rounded">
            Checkout now
          </button>
        </div>
      </aside>
    </main>
  );
}
