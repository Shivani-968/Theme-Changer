import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Card() {
  const { user } = useContext(UserContext);
  const isLight = user.themeMode === "light";

  return (
    <div
      className={`fixed left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border shadow-xl transition-all duration-300 hover:shadow-2xl ${
        isLight
          ? "border-slate-200 bg-white"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
       <img
       src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000"
       alt="Beautiful landscape"
       className="w-full h-56 object-cover"
       />
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Featured
        </span>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          Apple Collection
        </p>

        <h2
          className={`text-xl font-bold leading-snug ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          Apple Watch Series 7
        </h2>

        <p
          className={`mt-2 text-sm leading-relaxed ${
            isLight ? "text-slate-500" : "text-slate-400"
          }`}
        >
          Aluminium Case with Starlight Sport Band
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 22 20"
                aria-hidden="true"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>

          <span
            className={`text-sm font-semibold ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}
          >
            4.0
          </span>

          <span className="text-sm text-slate-400">(120 reviews)</span>
        </div>

        {/* Price and Button */}
        <div
          className={`mt-6 flex items-center justify-between border-t pt-5 ${
            isLight ? "border-slate-200" : "border-slate-700"
          }`}
        >
          <div>
            <p className="text-xs text-slate-400">Price</p>

            <span
              className={`text-3xl font-extrabold ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              $599
            </span>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;