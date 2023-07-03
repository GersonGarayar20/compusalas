import React from "react";
import BtnComprar from "./BtnComprar";

async function getData(id: string) {
  const res = await fetch(
    `https://ecomerce-backend-wo0w.onrender.com/api/product/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  console.log(data.product);

  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <h2>{params.id}</h2>
      <section className="grid md:grid-cols-2 gap-4">
        <div className="w-full border aspect-square grid grid-rows-4 gap-4">
          <div className="row-span-3 border">
            <img
              className="w-full h-full object-contain"
              src={data.product.image_url}
              alt=""
            />
          </div>
          <div className="flex flex-wrap flex-col overflow-x-scroll gap-4">
            <img
              className="h-full object-contain"
              src={data.product.image_url}
              alt=""
            />
            <img
              className="h-full object-contain"
              src={data.product.image_url}
              alt=""
            />
            <img
              className="h-full object-contain"
              src={data.product.image_url}
              alt=""
            />
            <img
              className="h-full object-contain"
              src={data.product.image_url}
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {data.product.title}
          </h2>
          <p className="text-2xl font-bold text-slate-900">
            ${data.product.price}
          </p>
          <BtnComprar product={data.product} />
        </div>
      </section>
    </main>
  );
}
