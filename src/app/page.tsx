import Image from "next/image";
import Nav from "./components/Nav";
import Benefits from "./components/Benefits";
import CategorySection from "./components/CategorySection";
import SliderProducts from "./components/SliderProducts";
import Button from "./components/Button";
import Newslatter from "./components/Newslatter";

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
      <SliderProducts />
      <section className="rounded-lg overflow-hidden md:grid md: grid-cols-2">
        <img
          src="https://parabuenosaires.com/wp-content/uploads/2022/09/comprar-pc-gamer.jpg"
          alt=""
        />
        <div className="bg-slate-900 p-8">
          <p className="text-slate-400 text-sm mb-4">LIMITED OFFER</p>
          <h3 className="text-white text-4xl font-semibold mb-8">
            35% off only this friday and get special gift
          </h3>
          <Button title="Grab it now" />
        </div>
      </section>
      <Newslatter />
    </main>
  );
}
