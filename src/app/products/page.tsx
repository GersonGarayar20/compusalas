import React from "react";
import Card from "./Card";

export default function page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <div>
        <p>Home / Products</p>
      </div>
      <section>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <aside></aside>
    </main>
  );
}
