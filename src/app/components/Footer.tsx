import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex md:flex-row flex-col gap-4 py-8">
          <div>
            <h4 className="font-bold text-xl text-slate-900">COMPUSALAS</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <div>
              <h4>Catalogo de Productos</h4>
              <p>All Collections</p>
              <p>Winter Edition</p>
              <p>Discount</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-300">
          <p className="p-6 text-slate-500 text-center">Copyright</p>
        </div>
      </div>
    </footer>
  );
}
