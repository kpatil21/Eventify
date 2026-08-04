export default function Pagination() {
  return (
    <div className="flex items-center gap-3">

      <button className="h-11 w-11 rounded-xl border bg-white hover:bg-slate-100">
        ←
      </button>

      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className={`h-11 w-11 rounded-xl transition
          ${
            page === 1
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white border hover:bg-indigo-50"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="h-11 w-11 rounded-xl border bg-white hover:bg-slate-100">
        →
      </button>

    </div>
  );
}