import React from "react";

export default function Button({ title, link }: any) {
  return (
    <button className="bg-white text-slate-800 font-medium rounded-md px-6 py-3 flex justify-between items-center gap-3 border group">
      {title}
      <svg
        className="fill-slate-800 group-hover:translate-x-1 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
      </svg>
    </button>
  );
}
