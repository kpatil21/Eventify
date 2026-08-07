import {
  FaUsers,
  FaUserTie,
  FaCalendarAlt,
  FaTicketAlt,
  FaRupeeSign,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Users",
    value: "3,542",
    icon: <FaUsers />,
    color: "bg-blue-100 text-blue-600",
    growth: "+12%",
  },
  {
    title: "Organizers",
    value: "18",
    icon: <FaUserTie />,
    color: "bg-indigo-100 text-indigo-600",
    growth: "+2",
  },
  {
    title: "Events",
    value: "82",
    icon: <FaCalendarAlt />,
    color: "bg-emerald-100 text-emerald-600",
    growth: "+9%",
  },
  {
    title: "Bookings",
    value: "1,245",
    icon: <FaTicketAlt />,
    color: "bg-amber-100 text-amber-600",
    growth: "+18%",
  },
  {
    title: "Revenue",
    value: "₹2.8L",
    icon: <FaRupeeSign />,
    color: "bg-purple-100 text-purple-600",
    growth: "+15%",
  },
  {
    title: "Pending Approval",
    value: "6",
    icon: <FaClock />,
    color: "bg-red-100 text-red-600",
    growth: "Needs Review",
  },
];

const pendingEvents = [
  {
    title: "Summer Art Workshop",
    organizer: "ABC Academy",
    date: "18 Aug",
  },
  {
    title: "Science Camp",
    organizer: "Kids Club",
    date: "22 Aug",
  },
];

const recentUsers = [
  {
    name: "Rahul Sharma",
    role: "Parent",
    date: "Today",
  },
  {
    name: "Priya Patil",
    role: "Organizer",
    date: "Yesterday",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-8 flex flex-col lg:flex-row justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back, Admin 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor your entire event platform from one place.
          </p>
        </div>

        <div className="flex gap-3 mt-5 lg:mt-0">
          <button className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
            Generate Report
          </button>

          <button className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-white">
            Add Organizer
          </button>
        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex justify-between">

              <div>

                <p className="text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

                <div className="flex items-center gap-1 text-green-600 text-sm mt-3">
                  <FaArrowUp size={11} />
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

      {/* Middle */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Pending Events */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">

          <div className="p-6 border-b">
            <h2 className="font-bold text-xl">
              Pending Event Approvals
            </h2>
          </div>

          <div className="divide-y">

            {pendingEvents.map((event) => (

              <div
                key={event.title}
                className="p-5 flex justify-between items-center"
              >

                <div>
                  <h3 className="font-semibold">
                    {event.title}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {event.organizer}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    {event.date}
                  </p>
                </div>

                <div className="flex gap-2">

                  <button className="px-3 py-2 rounded-lg bg-green-500 text-white text-sm">
                    Approve
                  </button>

                  <button className="px-3 py-2 rounded-lg bg-red-500 text-white text-sm">
                    Reject
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Recent Users */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">

          <div className="p-6 border-b">
            <h2 className="font-bold text-xl">
              Recent Users
            </h2>
          </div>

          <div className="divide-y">

            {recentUsers.map((user) => (

              <div
                key={user.name}
                className="p-5 flex justify-between"
              >

                <div>

                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {user.role}
                  </p>

                </div>

                <span className="text-sm text-slate-400">
                  {user.date}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="font-bold text-lg">
            Monthly Bookings
          </h2>

          <div className="h-72 mt-5 rounded-2xl border border-dashed bg-slate-50 flex items-center justify-center text-slate-400">
            Booking Chart (Recharts)
          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="font-bold text-lg">
            User Growth
          </h2>

          <div className="h-72 mt-5 rounded-2xl border border-dashed bg-slate-50 flex items-center justify-center text-slate-400">
            User Growth Chart
          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-3xl border border-slate-200 p-6">

        <h2 className="text-xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-4">

          {[
            "Events",
            "Users",
            "Bookings",
            "Categories",
            "Reports",
            "Settings",
          ].map((item) => (

            <button
              key={item}
              className="rounded-2xl border p-5 hover:bg-indigo-50 hover:border-indigo-300 transition font-medium"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}