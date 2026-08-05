export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-amber-400",
  subtitle,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-3 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {Icon && (
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
          >
            <Icon className="text-2xl text-white" />
          </div>
        )}
      </div>
    </div>
  );
}