import React from "react";

export default function Card() {
  return (
    <div>
      <div className="aspect-square">
        <img
          className="w-full h-full object-cover rounded"
          src="https://www.hd-tecnologia.com/imagenes/articulos/2022/05/TOP-5-mejores-laptops-para-estudiantes-en-2022-1.jpg"
          alt=""
        />
      </div>
      <div className="py-4 flex justify-between">
        <div>
          <h4 className="font-semibold text-lg">Producto</h4>
          <p className="text-red-500">$123</p>
        </div>
        <button>
          <svg
            className="fill-slate-900"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
            <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
            <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
