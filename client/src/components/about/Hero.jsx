import {
  FaArrowRight,
  FaCalendarCheck,
  FaUsers,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  const highlights = [
    {
      icon: <FaCalendarCheck />,
      title: "500+ Events",
      desc: "Indoor & Outdoor",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: <FaUsers />,
      title: "Trusted Organizers",
      desc: "Verified Partners",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Multiple Cities",
      desc: "Growing Community",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: <FaStar />,
      title: "Premium Experience",
      desc: "Made for Families",
      color: "bg-yellow-100 text-yellow-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white py-24">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-100 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
              ✨ About Eventify
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Creating
              <span className="block text-violet-600">
                Meaningful Experiences
              </span>
              for Every Child
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Eventify helps parents discover inspiring indoor and outdoor
              activities where children can learn, explore, build confidence,
              and create lifelong memories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700">
                Explore Events
                <FaArrowRight />
              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-700 transition hover:border-violet-600 hover:text-violet-600">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Families Choose Us
                </h3>

                <p className="mt-2 text-gray-500">
                  Learning, creativity, fun and unforgettable experiences—all
                  in one place.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-lg"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Decorative Cards */}
            <div className="absolute -top-6 -left-6 hidden rounded-2xl bg-white px-5 py-3 shadow-xl lg:block">
              <p className="text-sm font-semibold text-violet-600">
                🎨 Creativity
              </p>
            </div>

            <div className="absolute -right-6 bottom-10 hidden rounded-2xl bg-white px-5 py-3 shadow-xl lg:block">
              <p className="text-sm font-semibold text-emerald-600">
                🌱 Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}