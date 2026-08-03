
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "150+", label: "Events Organized" },
    { number: "5,000+", label: "Happy Parents" },
    { number: "25+", label: "Cities Covered" },
    { number: "100+", label: "Trusted Organizers" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To connect children and parents with meaningful learning experiences through trusted online and offline events.",
    },
    {
      icon: "🌟",
      title: "Our Vision",
      description:
        "To become India's most trusted platform for discovering educational, creative, and skill-building events.",
    },
    {
      icon: "🤝",
      title: "Our Promise",
      description:
        "Every event on Eventify is designed to inspire learning, creativity, confidence, and unforgettable experiences.",
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
       <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#C8A75B]/5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">

          <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full px-5 py-2 text-sm tracking-wider uppercase animate-pulse">
            Welcome to Eventify
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Creating
            <span className="block text-[#D4AF37]">
              Amazing Learning Experiences
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Eventify is a premium platform helping parents discover
            educational, creative and fun events for children. From coding
            workshops to sports camps, we bring trusted organizers and families
            together.
          </p>

          <Link
            to="/events"
            className="inline-block mt-10 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full transition duration-300 hover:scale-105 shadow-lg"
          >
            Explore Events
          </Link>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">

            <h2 className="text-4xl font-bold">
              Why <span className="text-[#D4AF37]">Eventify?</span>
            </h2>

            <p className="text-gray-300 leading-8">
              We believe children learn best when education meets creativity.
              Eventify brings together workshops, competitions, camps,
              storytelling sessions, sports activities, art classes and much
              more in one trusted platform.
            </p>

            <p className="text-gray-400 leading-8">
              Whether you're a parent searching for the perfect weekend
              activity or an organizer reaching thousands of families,
              Eventify makes discovering and managing events simple, secure and
              enjoyable.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-neutral-800 rounded-2xl p-8 text-center hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-[#D4AF37]">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-[#0B0B0B] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              Our Core Values
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Every event listed on Eventify is guided by these principles.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-[#D4AF37] hover:-translate-y-3 transition-all duration-300"
              >
                <div className="text-5xl mb-6">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
<section className="py-24 bg-[#0A0A0A]">

  <div className="max-w-5xl mx-auto px-6">

    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#F8F5EF] via-[#F2EDE3] to-[#EAE2D3] p-14 shadow-2xl">

      {/* Decorative Blobs */}
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#D9C7A1]/30 blur-3xl"></div>

      <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-white/50 blur-3xl"></div>

      <div className="relative z-10 text-center">

        <span className="inline-block rounded-full bg-white/60 backdrop-blur-md border border-white/50 px-5 py-2 text-sm font-medium tracking-widest uppercase text-[#8C7352]">
          Join Eventify
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#2E2A25] leading-tight">
          Discover Experiences
          <span className="block text-[#8C7352]">
            That Inspire Every Child
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-[#5B554E]">
          From coding and robotics to art, music and sports,
          Eventify helps families discover trusted events that
          nurture creativity, confidence and lifelong learning.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/events"
            className="rounded-full bg-[#8C7352] px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-[#756044] hover:scale-105"
          >
            Explore Events
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-[#8C7352]/30 bg-white/70 backdrop-blur-md px-8 py-4 font-semibold text-[#5B554E] transition-all duration-300 hover:bg-white"
          >
            Become an Organizer
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}