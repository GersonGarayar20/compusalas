import React from "react";

const categorias = [
  {
    titulo: "Motherboard",
    imagen:
      "https://grupoalmerco.com.pe/wp-content/uploads/2022/05/PLACA-MADRE-GIGABYTE-H510M-H-SOPORTA-10MA-Y-11VA-GENERACION-DE-SOCKET-1200-DDR4-32002133-MHZ-64GB-MAX-USB-3.2-SATA-3.0-1.png",
  },
  {
    titulo: "Rams",
    imagen: "https://i.blogs.es/926e54/rm-04/450_1000.webp",
  },
  {
    titulo: "Procesadores",
    imagen:
      "https://d500.epimg.net/cincodias/imagenes/2016/05/09/lifestyle/1462781416_561321_1462781744_noticia_normal.jpg",
  },
  {
    titulo: "SSD",
    imagen: "https://www.impacto.com.pe/storage/products/1640033563.jpg",
  },
];

export default function CategorySection() {
  return (
    <section>
      <h2 className="font-bold text-2xl">Categorias</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {categorias.map(({ titulo, imagen }, i) => (
          <div
            key={i}
            className="relative rounded overflow-hidden aspect-square"
          >
            <img className="w-full h-full object-cover" src={imagen} alt="" />
            <div className="absolute top-0 left-0 w-full h-full flex items-end p-6">
              <button className="bg-white text-slate-800 font-medium w-full rounded-md px-6 py-3 flex justify-between">
                {titulo}
                <svg
                  className="fill-slate-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
