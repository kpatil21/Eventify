import { FaBullseye, FaRocket } from "react-icons/fa";

export default function MissionVision() {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      description:
        "To help parents discover trusted events that inspire creativity, confidence, learning, and meaningful experiences for every child.",
      bg: "from-violet-50 to-indigo-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      icon: <FaRocket />,
      title: "Our Vision",
      description:
        "To become India's most trusted platform for discovering and booking children's events while building a stronger learning community beyond classrooms.",
      bg: "from-amber-50 to-orange-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Mission & Vision
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Driven by Purpose,
            <span className="text-violet-600"> Inspired by Children</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything we build is focused on helping families discover
            meaningful experiences that nurture learning, creativity,
            confidence, and lifelong memories.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {cards.map((card, index) => (

            <div
              key={index}
              className={`group rounded-[32px] bg-gradient-to-br ${card.bg}
              p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >

              <div
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl
                ${card.iconBg} text-3xl ${card.iconColor}
                transition duration-300 group-hover:scale-110`}
              >
                {card.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                {card.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                {card.description}
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-amber-400"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}