import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaRupeeSign,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Events",
    value: "12",
    icon: <FaCalendarAlt />,
    color: "bg-amber-100 text-amber-600",
    growth: "+2 this month",
  },
  {
    title: "Bookings",
    value: "245",
    icon: <FaTicketAlt />,
    color: "bg-blue-100 text-blue-600",
    growth: "+18%",
  },
  {
    title: "Participants",
    value: "189",
    icon: <FaUsers />,
    color: "bg-emerald-100 text-emerald-600",
    growth: "+32",
  },
  {
    title: "Revenue",
    value: "₹18,500",
    icon: <FaRupeeSign />,
    color: "bg-purple-100 text-purple-600",
    growth: "+12%",
  },
];

const upcomingEvents = [
  {
    title: "Summer Art Workshop",
    date: "18 Aug",
    venue: "Pune",
    seats: "25 / 40",
  },
  {
    title: "Coding for Kids",
    date: "21 Aug",
    venue: "Mumbai",
    seats: "42 / 50",
  },
  {
    title: "Science Fun Camp",
    date: "25 Aug",
    venue: "Nashik",
    seats: "18 / 30",
  },
];

export default function OrganizerDashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 p-8 flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome back, Patil 👋
          </h1>

          <p className="text-slate-500 mt-2">
            You have 3 upcoming events this week.
          </p>
        </div>

        <button className="mt-5 lg:mt-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow">
          + Create Event
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

                <div className="flex items-center gap-1 text-green-600 text-sm mt-3">
                  <FaArrowUp size={12} />
                  {item.growth}
                </div>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color}`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics */}
      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Booking Analytics
          </h2>

          <div className="h-72 mt-5 rounded-2xl bg-slate-50 border border-dashed flex items-center justify-center text-slate-400">
            Line Chart (Recharts Later)
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Event Categories
          </h2>

          <div className="h-72 mt-5 rounded-2xl bg-slate-50 border border-dashed flex items-center justify-center text-slate-400">
            Donut Chart
          </div>
        </div>

      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-5">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-amber-200 to-orange-300"></div>

              <div className="p-6">

                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm">
                  {event.date}
                </span>

                <h3 className="font-bold text-lg mt-4">
                  {event.title}
                </h3>

                <p className="text-slate-500 mt-2">
                  📍 {event.venue}
                </p>

                <p className="mt-4 text-sm text-slate-600">
                  Seats Filled
                </p>

                <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>

                <p className="text-sm mt-2">
                  {event.seats}
                </p>

                <button className="mt-5 w-full py-3 rounded-xl border hover:bg-slate-50 font-semibold">
                  Manage Event
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            Recent Bookings
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-4">Parent</th>
              <th className="text-left p-4">Child</th>
              <th className="text-left p-4">Event</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">Anita</td>
              <td className="p-4">Aarav</td>
              <td className="p-4">Drawing Workshop</td>
              <td className="p-4 text-green-600">Confirmed</td>
              <td className="p-4">₹499</td>
            </tr>

            <tr className="border-t">
              <td className="p-4">Rohan</td>
              <td className="p-4">Kiara</td>
              <td className="p-4">Science Camp</td>
              <td className="p-4 text-green-600">Confirmed</td>
              <td className="p-4">₹699</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}