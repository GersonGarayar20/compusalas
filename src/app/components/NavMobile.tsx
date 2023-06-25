"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavMobile() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white">
        <div className="flex justify-between px-4 py-6">
          <Link href="/">
            <h1 className="font-bold text-2xl text-slate-900">COMPUSALAS</h1>
          </Link>
          <button className="" onClick={handleClick}>
            {active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            ) : (
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            )}
          </button>
        </div>
      </header>
      {active && (
        <nav className="fixed z-40 bg-white w-full h-screen">
          <ul className="h-full flex flex-col items-center justify-center gap-4">
            <Link href="products" onClick={handleClick}>
              Products
            </Link>
            <li>
              <a href="#">Articulo</a>
            </li>
            <li>
              <a href="#">Articulo</a>
            </li>
            <li>
              <a href="#">Articulo</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
