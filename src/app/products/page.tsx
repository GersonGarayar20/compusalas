import React from "react";
import Card from "./Card";

async function getData() {
  const res = await fetch(
    "https://ecomerce-backend-wo0w.onrender.com/api/product"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const data = await getData();
  console.log(data.products[0]._id);

  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <div className="py-4">
        <p>Home / Products</p>
      </div>
      <section>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {data.products.map(({ _id, title, price, image_url }: any) => (
            <Card
              key={_id}
              id={_id}
              title={title}
              image={image_url}
              price={price}
            />
          ))}
        </div>
      </section>
      <aside></aside>
    </main>
  );
}
