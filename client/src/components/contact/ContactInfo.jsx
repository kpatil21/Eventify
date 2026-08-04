import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactInfo() {

  const cards = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      value: "+91 98765 43210",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      value: "support@eventify.com",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Belagavi, Karnataka",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Mon - Sat • 9 AM - 6 PM",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const socials = [
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
  ];

  return (
    <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-slate-900">
        Contact Information
      </h2>

      <p className="mt-2 text-slate-600">
        Reach us through any of the following channels.
      </p>

      <div className="mt-8 space-y-5">

        {cards.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl text-xl ${item.color}`}
            >
              {item.icon}
            </div>

            <div>

              <h3 className="font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.value}
              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">

        <h3 className="mb-5 font-semibold text-slate-900">
          Follow Us
        </h3>

        <div className="flex gap-4">

          {socials.map((Icon, index) => (

            <button
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white"
            >
              <Icon />
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}