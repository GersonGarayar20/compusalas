import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <div>
        <p>Cart / Payment</p>
      </div>
      <aside>
        <div>
          <div>
            <p>Your Order</p>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Laptop</p>
                <p>500</p>
              </div>
            </div>
          </div>

          <form>
            <input type="text" placeholder="Add discount code" />
            <button>Apply</button>
          </form>

          <p>
            New customer? <a href="">Sign up</a> to get better offer
          </p>

          <div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$2000</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between">
              <p>Grand total</p>
              <p>$2000</p>
            </div>
            <Link href="transaction">
              <button className="bg-slate-200 text-slate-400 w-full py-3 rounded">
                Checkout now
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}
