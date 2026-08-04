import {
  FaCalendarAlt,
  FaUsers,
  FaUserCheck,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaCalendarAlt />,
      number: "500+",
      title: "Events Listed",
      description: "Indoor & Outdoor experiences",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: <FaUsers />,
      number: "5,000+",
      title: "Happy Families",
      description: "Parents trust Eventify",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <FaUserCheck />,
      number: "100+",
      title: "Trusted Organizers",
      description: "Verified event partners",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: "20+",
      title: "Cities",
      description: "Growing across India",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-700 py-24">

      {/* Background Blurs */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl"></div>

      <div className="container relative mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">
            Eventify in Numbers
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Growing With Every
            <span className="text-yellow-300"> Event</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-violet-100">
            Every event creates new friendships, unforgettable memories,
            and valuable learning experiences for children.
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-extrabold text-white">
                {item.number}
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-violet-100">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}