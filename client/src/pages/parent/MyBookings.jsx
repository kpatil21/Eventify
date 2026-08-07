import { useMemo, useState } from "react";
import TicketModal from "../../components/booking/TicketModal";
import BookingDetailsModal from "../../components/booking/BookingDetailsModal";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaDownload,
  FaEye,
  FaSearch,
} from "react-icons/fa";


const bookings = [
  {
    id: "BK10235",
    title: "Drawing Workshop",
    date: "18 Aug 2026",
    time: "10:00 AM",
    venue: "Pune",
    child: "Aarav",
    seats: 2,
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800",
  },
  {
    id: "BK10236",
    title: "Science Camp",
    date: "22 Aug 2026",
    time: "09:00 AM",
    venue: "Mumbai",
    child: "Aarav",
    seats: 1,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  },
  {
    id: "BK10237",
    title: "Story Telling Session",
    date: "10 Aug 2026",
    time: "11:00 AM",
    venue: "Nashik",
    child: "Aarav",
    seats: 1,
    status: "Cancelled",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
  },
  {
    id: "BK10238",
    title: "Robotics Workshop",
    date: "30 Aug 2026",
    time: "02:00 PM",
    venue: "Pune",
    child: "Aarav",
    seats: 1,
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800",
  },
];

export default function MyBookings() {
  const [ticketOpen, setTicketOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
 
  const [detailsOpen, setDetailsOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Upcoming");
  const [search, setSearch] = useState("");

  const tabs = ["Upcoming", "Completed", "Cancelled"];

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesTab = booking.status === activeTab;

      const matchesSearch =
        booking.title.toLowerCase().includes(search.toLowerCase()) ||
        booking.id.toLowerCase().includes(search.toLowerCase()) ||
        booking.venue.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const getCount = (status) =>
    bookings.filter((booking) => booking.status === status).length;

  const statusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          My Bookings
        </h1>

        <p className="text-slate-500 mt-2">
          Track and manage all your event bookings.
        </p>

      </div>

      {/* Tabs */}

      <div className="flex flex-wrap gap-3">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-amber-500 text-white shadow-md"
                : "bg-white border border-slate-200 hover:bg-amber-50"
            }`}
          >
            {tab}

            <span
              className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab
                  ? "bg-white/20 text-white"
                  : "bg-slate-100"
              }`}
            >
              {getCount(tab)}
            </span>
          </button>
        ))}

      </div>

      {/* Search */}

      <div className="relative max-w-md">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search bookings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
        />

      </div>

      {/* Booking Cards */}

      <div className="space-y-6">

        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition"
            >

              <div className="grid lg:grid-cols-[280px_1fr]">

                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-full h-64 lg:h-full object-cover"
                />

                <div className="p-6">

                  <div className="flex flex-col md:flex-row justify-between gap-4">

                    <div>

                      <h2 className="text-2xl font-bold text-slate-800">
                        {booking.title}
                      </h2>

                      <p className="text-slate-500 mt-1">
                        Booking ID : {booking.id}
                      </p>

                    </div>

                    <span
                      className={`self-start px-4 py-2 rounded-full text-sm font-medium ${statusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>

                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-8 text-slate-600">

                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-amber-500" />
                      {booking.date}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaClock className="text-amber-500" />
                      {booking.time}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-amber-500" />
                      {booking.venue}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaTicketAlt className="text-amber-500" />
                      {booking.seats} Seat(s)
                    </div>

                  </div>

                  <div className="mt-4 text-slate-600">
                    Child :
                    <span className="font-semibold ml-2">
                      {booking.child}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">

                    <button onClick={() => { setSelectedBooking(booking); setDetailsOpen(true);}} className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium transition">
                       <FaEye className="inline mr-2" />
                       View Details
                     </button>
                    

                    <button onClick={()=>{ setSelectedBooking(booking); setTicketOpen(true);}} className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition">
                      <FaTicketAlt className="inline mr-2" />
                      View Ticket
                    </button>

                    <button className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition">
                      <FaDownload className="inline mr-2" />
                      Download Ticket
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="bg-white border border-dashed border-slate-300 rounded-3xl py-20 text-center">

            <div className="text-6xl mb-4">🎟️</div>

            <h3 className="text-2xl font-semibold text-slate-700">
              No {activeTab.toLowerCase()} bookings found
            </h3>

            <p className="text-slate-500 mt-2">
              Try another search or browse upcoming events.
            </p>

          </div>
        )}

      </div>
    <TicketModal
      isOpen={ticketOpen}
      onClose={() => setTicketOpen(false)}
      booking={selectedBooking}
    />

    <BookingDetailsModal
     isOpen={detailsOpen}
     onClose={() => setDetailsOpen(false)}
     booking={selectedBooking}
   />
    </div>

    
  );
}
