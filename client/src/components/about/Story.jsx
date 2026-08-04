import {
  FaHeart,
  FaLightbulb,
  FaChild,
  FaArrowRight,
} from "react-icons/fa";

export default function Story() {
  const values = [
    {
      icon: <FaHeart />,
      title: "Passion",
      text: "Creating meaningful experiences for every child.",
      color: "bg-rose-100 text-rose-500",
    },
    {
      icon: <FaLightbulb />,
      title: "Learning",
      text: "Every event is designed to inspire curiosity.",
      color: "bg-amber-100 text-amber-500",
    },
    {
      icon: <FaChild />,
      title: "Growth",
      text: "Helping children build confidence through activities.",
      color: "bg-emerald-100 text-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div className="relative">

            {/* Background Blur */}
            <div className="absolute -top-10 -left-10 h-52 w-52 rounded-full bg-violet-100 blur-3xl"></div>

            <div className="relative rounded-[32px] bg-gradient-to-br from-violet-50 to-white p-8 shadow-xl border border-gray-100">

              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900"
                alt="Children Learning"
                className="h-[430px] w-full rounded-3xl object-cover"
              />

              <div className="absolute -bottom-6 left-8 rounded-2xl bg-white px-6 py-4 shadow-xl">
                <p className="text-sm text-gray-500">
                  Trusted by Families
                </p>

                <h4 className="text-2xl font-bold text-violet-600">
                  5000+
                </h4>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <span className="inline-block rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
              Where Learning,
              <span className="text-violet-600"> Fun</span> &
              <span className="text-amber-500"> Memories</span>
              <br />
              Come Together
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Eventify was created with one simple mission—to help parents
              discover inspiring events where children can learn, play,
              explore, and grow together.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              As a part of the <strong>Kaksha ecosystem</strong>, we believe
              education doesn't end inside classrooms. Workshops, sports,
              science fairs, cultural programs, art sessions, and outdoor
              adventures all play an important role in shaping confident,
              creative, and happy children.
            </p>

            <div className="mt-10 space-y-5">

              {values.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:bg-white hover:shadow-lg"
                >

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-gray-500">
                      {item.text}
                    </p>
                  </div>

                </div>

              ))}

            </div>

            <button className="mt-10 flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700">
              Explore Events
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}