"use client";
import { useRef } from "react";

export default function SliderProducts() {
  const slider = useRef() as React.MutableRefObject<HTMLDivElement>;

  const left = () => (slider.current.scrollLeft -= 256);
  const right = () => (slider.current.scrollLeft += 256);

  return (
    <section className="py-16">
      <div className="flex justify-between py-8">
        <h2 className="font-bold text-2xl">Featured products</h2>
        <div>
          <button onClick={left}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </button>
          <button onClick={right}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={slider}
        className="flex flex-wrap flex-col gap-4 h-64 overflow-x-scroll scroll-smooth"
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
}

const CardProduct = () => (
  <div className="h-64 w-64">
    <img
      className="w-full object-cover"
      src="https://www.hd-tecnologia.com/imagenes/articulos/2022/05/TOP-5-mejores-laptops-para-estudiantes-en-2022-1.jpg"
      alt=""
    />
    <div className="flex justify-between py-2">
      <div>
        <h4>titulo</h4>
        <p>$58</p>
      </div>
      <button className="w-10 h-10 flex justify-center items-center bg-slate-900 rounded-lg">
        <svg
          className="fill-slate-200"
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
