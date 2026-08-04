import { FaArrowDown } from "react-icons/fa";
import {
  FaArrowRight,
  FaBrain,
  FaDumbbell,
  FaHeart,
  FaRocket,
} from "react-icons/fa6";

export default function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"></div>
      <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
{/* Left Content */}
<div>

  <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 mb-6 shadow-sm">
    🎉 Discover Amazing Experiences
  </span>

  <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
    Explore
    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      {" "}Kids Events
    </span>
    <br />
    Near You
  </h1>

  <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
    Discover inspiring indoor and outdoor events that help children
    learn, play, create friendships and build unforgettable memories.
  </p>

  {/* Buttons */}
  <div className="mt-10 flex flex-wrap gap-4">

    <button className="group inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl">
      Browse Events
      <FaArrowDown className="transition-transform group-hover:translate-x-1" />
    </button>

    <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg">
      How It Works
    </button>

  </div>

</div>

          {/* Right */}

          <div className="relative">

            <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">

              <div className="grid grid-cols-2 gap-5">

                {/* Mental */}

                <div className="group rounded-2xl bg-indigo-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                  <FaBrain className="mb-4 text-4xl text-indigo-600 transition group-hover:scale-110" />

                  <h3 className="text-xl font-bold text-slate-900">
                    Mental Growth
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Critical Thinking
                    <br />
                    Creativity
                  </p>

                </div>

                {/* Physical */}

                <div className="group rounded-2xl bg-green-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                  <FaDumbbell className="mb-4 text-4xl text-green-600 transition group-hover:scale-110" />

                  <h3 className="text-xl font-bold text-slate-900">
                    Physical Fitness
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Sports
                    <br />
                    Outdoor Adventures
                  </p>

                </div>

                {/* Emotional */}

                <div className="group rounded-2xl bg-pink-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                  <FaHeart className="mb-4 text-4xl text-pink-600 transition group-hover:scale-110" />

                  <h3 className="text-xl font-bold text-slate-900">
                    Emotional Skills
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Confidence
                    <br />
                    Teamwork
                  </p>

                </div>

                {/* Future */}

                <div className="group rounded-2xl bg-yellow-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                  <FaRocket className="mb-4 text-4xl text-yellow-500 transition group-hover:scale-110" />

                  <h3 className="text-xl font-bold text-slate-900">
                    Future Ready
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    STEM Learning
                    <br />
                    Leadership
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}