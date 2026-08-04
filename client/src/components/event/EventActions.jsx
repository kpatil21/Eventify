import { FaArrowRight } from "react-icons/fa";

export default function EventActions() {
  return (
    <div className="flex gap-3 mt-6">

      <button className="flex-1 rounded-xl border border-slate-300 py-3 font-medium transition hover:border-indigo-500 hover:text-indigo-600">
        View Details
      </button>

      <button className="group flex-1 rounded-xl bg-indigo-600 py-3 text-white font-medium transition-all hover:bg-indigo-700 hover:shadow-lg">

        <span className="flex justify-center items-center gap-2">

          Book Now

          <FaArrowRight className="transition group-hover:translate-x-1" />

        </span>

      </button>

    </div>
  );
}