import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-3xl"></div>

      <div className="container relative mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-8 py-16 shadow-2xl lg:px-20">

          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10"></div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              🎉 Join the Eventify Community
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Discover
              <br />
              Amazing Events for Your Child?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              From creative workshops and exciting outdoor adventures to
              educational programs and cultural activities, Eventify helps
              you find experiences your child will truly enjoy.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-violet-700 transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                Browse Events
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Contact Us
                <FaEnvelope />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}