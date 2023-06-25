import Image from "next/image";
import Nav from "./components/Nav";
import Benefits from "./components/Benefits";
import CategorySection from "./components/CategorySection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <div className="relative border h-96">
        <img
          className="w-full h-full object-cover"
          src="https://www.rentadvisor.com.co/wp-content/uploads/images-2.jpg"
          alt=""
        />
        <div className="bg-black/50 absolute top-0 w-full h-full">
          <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl text-white">Computadoras</h2>
            <button className="bg-slate-200 px-4 py-2 rounded">Shop now</button>
          </div>
        </div>
      </div>

      <section>
        <h2 className="font-bold text-2xl">Marcas</h2>
        <div className="flex gap-4">
          <p>ASUS</p>
          <p>AMD</p>
          <p>INTEL</p>
        </div>
      </section>
      <Benefits />
      <CategorySection />
    </main>
  );
}
