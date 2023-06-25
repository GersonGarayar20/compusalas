import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-white md:block hidden">
      <div className="px-4 py-8 max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-2xl text-slate-900">COMPUSALAS</h1>
        </Link>

        <nav>
          <ul className="flex gap-4">
            <Link href="products">Products</Link>
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
        <div className="flex">
          <form className="border rounded flex gap-2 p-2">
            <button className="">
              <svg
                className="fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </button>
            <input
              className=" outline-none"
              type="search"
              name=""
              id=""
              placeholder="Search"
            />
          </form>

          <button className="p-2">
            <svg
              className="fill-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
          </button>
          <button className="p-2">
            <svg
              className="fill-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
