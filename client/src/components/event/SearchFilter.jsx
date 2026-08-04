import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchFilter() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Indoor", "Outdoor"];

  return (
    <section className="-mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-xl border border-slate-200 p-6">

          <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">

            <div className="relative w-full lg:max-w-lg">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            </div>

            <div className="flex gap-3 flex-wrap">

              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`rounded-full px-6 py-3 font-medium transition-all duration-300
                  ${
                    active === item
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-slate-100 hover:bg-indigo-100"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}