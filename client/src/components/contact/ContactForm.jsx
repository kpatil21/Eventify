import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-slate-900">
        Send us a Message
      </h2>

      <p className="mt-2 text-slate-600">
        We'd love to hear from you. Fill out the form and our team will get
        back to you as soon as possible.
      </p>

      <form className="mt-8 space-y-6">

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Phone
            </label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

        </div>

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Subject
          </label>

          <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100">

            <option>General Inquiry</option>
            <option>Event Booking</option>
            <option>School Partnership</option>
            <option>Become an Organizer</option>
            <option>Technical Support</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Message
          </label>

          <textarea
            rows="6"
            placeholder="Tell us how we can help..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

        </div>

        <button className="group inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl">

          Send Message

          <FaPaperPlane className="transition-transform group-hover:translate-x-1" />

        </button>

      </form>

    </div>
  );
}