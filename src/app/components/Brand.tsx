import React from "react";

const marcas = [
  {
    image: "logos/intel-logo-2020.svg",
  },
  {
    image: "logos/amd-logo.svg",
  },
  {
    image: "logos/asus-logo.svg",
  },
  {
    image: "logos/gigabyte-logo.svg",
  },
];

export default function Brand() {
  return (
    <section className="py-16">
      <h2 className="font-bold text-2xl">Marcas</h2>
      <div className="flex gap-4 overflow-x-auto">
        {marcas.map((el, i) => (
          <img key={i} className="w-32" src={el.image} alt="" />
        ))}
      </div>
    </section>
  );
}
