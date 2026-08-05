export default function DashboardCard({
  title,
  children,
  action,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>

        {action}
      </div>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}