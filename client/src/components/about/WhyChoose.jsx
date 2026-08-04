import {
  FaUserShield,
  FaCalendarCheck,
  FaMapMarkedAlt,
  FaUsers,
  FaSmile,
  FaAward,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaUserShield />,
      title: "Verified Organizers",
      description:
        "Every organizer is carefully verified to ensure safe and trusted experiences.",
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Easy Booking",
      description:
        "Browse, compare and book your child's favorite events in just a few clicks.",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Nearby Events",
      description:
        "Find exciting indoor and outdoor activities happening around your city.",
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      icon: <FaUsers />,
      title: "Community Focused",
      description:
        "Helping children connect, collaborate and grow through shared experiences.",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: <FaSmile />,
      title: "Fun Meets Learning",
      description:
        "Every event encourages creativity, confidence and lifelong learning.",
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      icon: <FaAward />,
      title: "Premium Experience",
      description:
        "Designed with a parent-first approach for a smooth and delightful journey.",
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Why Choose Eventify
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Everything Parents Need,
            <span className="text-violet-600"> All in One Place</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We make discovering, booking, and enjoying children's events
            simple, safe, and enjoyable for every family.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <div
              key={index}
              className={`${feature.bg}
              group rounded-3xl border border-gray-100 p-8 transition duration-300
              hover:-translate-y-3 hover:bg-white hover:shadow-2xl`}
            >

              <div
                className={`${feature.iconBg}
                ${feature.iconColor}
                flex h-16 w-16 items-center justify-center
                rounded-2xl text-2xl transition duration-300
                group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}