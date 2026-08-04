import EventsHero from "../components/event/EventsHero";
import SearchFilter from "../components/event/SearchFilter";
import EventCard from "../components/event/EventCard";
import Pagination from "../components/event/Pagination";
import EmptyState from "../components/event/EmptyState";

import events from "../data/events";

export default function Events() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">

      {/* Hero Section */}
      <EventsHero />

      {/* Search & Filters */}
      <SearchFilter />

      {/* Events Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Upcoming Events
            </h2>

            <p className="mt-2 text-slate-600">
              Explore exciting indoor and outdoor experiences for your children.
            </p>
          </div>

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            {events.length} Events Found
          </span>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <Pagination />
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </section>
    </main>
  );
}