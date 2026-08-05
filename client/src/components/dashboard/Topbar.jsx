export default function Topbar() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-6">
      <h1 className="text-xl font-semibold text-slate-800">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button className="rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-100">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-semibold text-white">
            K
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Kalpesh
            </p>
            <p className="text-xs text-slate-500">
              Parent
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}