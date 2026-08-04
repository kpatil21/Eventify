export default function EventBadge({ category }) {
  const colors =
    category === "Indoor"
      ? "bg-indigo-100 text-indigo-700"
      : "bg-green-100 text-green-700";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors}`}>
      {category}
    </span>
  );
}