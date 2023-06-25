import React from "react";

export default function Newslatter() {
  return (
    <section className="text-center py-16 flex flex-col gap-4">
      <h2 className="text-slate-900 font-bold text-2xl">
        Subscribe to our newsletter to get updates to our latest collections
      </h2>
      <p className="text-slate-500">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <form className="flex justify-center gap-4">
        <div className="flex gap-3 border rounded p-3">
          <svg
            className="fill-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
          </svg>
          <input
            className="outline-none"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
        </div>
        <button className="py-3 px-6 bg-slate-900 text-slate-200 rounded">
          Subscribe
        </button>
      </form>
      <p className="text-slate-500 text-sm">
        You will be able to unsubcribe at any time.
        <br />
        Read our Privacy Policy{" "}
        <a className="text-slate-900 underline" href="#">
          here
        </a>
      </p>
    </section>
  );
}
