import React from "react";

export default function page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-32">
      <section>
        <div className="flex flex-col items-center gap-4 py-8">
          <svg
            className="fill-green-700 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
          </svg>
          <h4 className="font-semibold text-2xl text-slate-800">
            Thanks for your order!
          </h4>
          <p className="text-slate-500">
            The order confirmation has been sent to correo@gmail.com
          </p>
        </div>
        <div>
          <h4>Transaction Date</h4>
          <p>Thursday, Noverber 17, 2022</p>
          <h4>Payment Method</h4>
          <p>Mastercard ending with 2564</p>
          <h4>Shipping Method</h4>
          <p>Express delivery</p>
        </div>
      </section>
    </main>
  );
}
