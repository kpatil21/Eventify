import { FaHeart } from "react-icons/fa";

import EventBadge from "./EventBadge";
import EventMeta from "./EventMeta";
import EventActions from "./EventActions";

export default function EventCard({ event }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4">
          <EventBadge category={event.category} />
        </div>

        <button className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:scale-110 transition">
          <FaHeart className="text-slate-500" />
        </button>

      </div>

      <div className="p-6">

        <EventMeta
          date={event.date}
          time={event.time}
          venue={event.venue}
        />

        <h3 className="mt-4 text-xl font-bold text-slate-800">
          {event.title}
        </h3>

        <p className="mt-3 text-slate-500 line-clamp-3">
          {event.description}
        </p>

        <EventActions />

      </div>

    </div>
  );
}