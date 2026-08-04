import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function EventMeta({ date, time, venue }) {
  return (
    <div className="space-y-2 text-sm text-slate-500">

      <div className="flex items-center gap-2">
        <FaCalendarAlt />
        {date}
      </div>

      <div className="flex items-center gap-2">
        <FaClock />
        {time}
      </div>

      <div className="flex items-center gap-2">
        <FaMapMarkerAlt />
        {venue}
      </div>

    </div>
  );
}