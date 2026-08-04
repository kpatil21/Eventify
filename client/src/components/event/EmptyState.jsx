import { FaRegCalendarTimes } from "react-icons/fa";

export default function EmptyState() {
  return (
    <div className="py-24 text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
        <FaRegCalendarTimes className="text-4xl text-indigo-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        No Events Found
      </h2>

      <p className="mt-3 text-slate-500">
        Try changing your search or category filters.
      </p>

      <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
        Reset Filters
      </button>

    </div>
  );
}