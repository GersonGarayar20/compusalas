import React from "react";

const beneficios = [
  {
    titulo: "Original Products",
    description:
      "We provide money back guarantee if the product are not original",
  },
  {
    titulo: "Stisfaction Guarantee",
    description:
      "Exchange the product you've purchased if it doesn't fit on you",
  },
  {
    titulo: "New Arrival Everyday",
    description: "We updates our collections almost everyday",
  },
  {
    titulo: "Fast & Free Shipping",
    description: "We offer fast and free shipping for our loyal customers",
  },
];

export default function Benefits() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {beneficios.map(({ titulo, description }, i) => (
          <div key={i} className="">
            <h4 className="font-semibold">{titulo}</h4>
            <p className="text-slate-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
