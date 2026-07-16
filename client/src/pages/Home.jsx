import { FaArrowRight } from "react-icons/fa";
import {
  FaShieldAlt,
  FaLaptop,
  FaTree,
  FaChalkboardTeacher,
} from "react-icons/fa";
import digitalEvents from "../assets/images/hero/digital.png";
import outdoorEvents from "../assets/images/hero/outdoor.png";
import story from "../assets/images/featured/story.png";

const Home = () => {
  return (
    <>
<section className="bg-[#FAFAF9] pt-0 pb-0">
  <div className="w-full">

    {/* Split Hero */}
    <div className="grid md:grid-cols-2 gap-0 h-[80vh] min-h-[650px]">

      {/* Digital Events */}
      <div className="relative overflow-hidden group cursor-pointer">

        <img
          src={digitalEvents}
          alt="Digital Events"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-12 left-12 text-white z-10">

          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            DIGITAL EVENTS
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
            Learn
            <br />
            Online
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            Live Classes • Storytelling • Workshops
          </p>

        </div>

      </div>

      {/* Outdoor Events */}
      <div className="relative overflow-hidden group cursor-pointer">

        <img
          src={outdoorEvents}
          alt="Outdoor Events"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-12 left-12 text-white z-10">

          <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            OUTDOOR EVENTS
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
            Explore
            <br />
            Outdoors
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            Sports • Camps • Family Activities
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
{/* ================= About Eventify ================= */}

<section className="min-h-screen bg-white flex items-center">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="text-[#D4AF37] uppercase tracking-[5px] text-sm font-semibold">
      DISCOVER • LEARN • GROW
    </span>

    <h2 className="mt-6 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
      Every Event
      <br />
      Becomes a Learning Journey
    </h2>

    <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-slate-600">
      Eventify by Kaksha brings together inspiring online workshops,
      creative experiences and exciting outdoor adventures—helping children
      build confidence, creativity, friendships and lifelong skills through
      safe, meaningful activities.
    </p>

  </div>

</section>
{/* ================= Featured Categories ================= */}

<section className="min-h-[90vh] flex items-center bg-gradient-to-b from-[#FFF9F2] to-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

    {/* Heading */}

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">

      <div>

        <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-semibold">
          EXPLORE CATEGORIES
        </span>

        <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-slate-900">
          Discover Activities Your Child Will Love
        </h2>

        <p className="mt-3 text-slate-600 max-w-2xl">
          Creative, educational and fun experiences carefully designed for every stage of your child's growth.
        </p>

      </div>

      <button className="mt-6 lg:mt-0 border border-slate-300 px-5 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition">
        View All →
      </button>

    </div>

    {/* Categories */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        { icon: "🎨", title: "Art & Craft" },
        { icon: "📖", title: "Storytelling" },
        { icon: "🕉️", title: "Shlokas" },
        { icon: "🧠", title: "STEM" },
        { icon: "⚽", title: "Sports" },
        { icon: "🎵", title: "Music" },
        { icon: "🧘", title: "Yoga" },
        { icon: "🏕️", title: "Adventure Camps" },
      ].map((category, index) => (

        <div
          key={index}
          className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >

          <div className="flex items-center justify-between">

            <div className="w-14 h-14 rounded-xl bg-[#FFF4D6] flex items-center justify-center text-2xl">
              {category.icon}
            </div>

            <span className="text-slate-300 group-hover:text-[#D4AF37] text-xl transition">
              →
            </span>

          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-900">
            {category.title}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Explore engaging activities.
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= Featured Events ================= */}

<section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-10">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

    {/* Heading */}

    <div className="flex justify-between items-end mb-10">

      <div>

        <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-semibold">
          FEATURED EXPERIENCES
        </span>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Join Our Most Loved Activities
        </h2>

      </div>

      <button className="border border-slate-300 px-5 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition">
        View All →
      </button>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Featured Card */}

      <div className="lg:col-span-2 relative rounded-[32px] overflow-hidden h-[520px] group">

        <img
          src={story}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>

        <div className="absolute bottom-8 left-8">

          <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold">
            MOST POPULAR
          </span>

          <h3 className="text-white text-4xl font-bold mt-5">
            Interactive Storytelling
          </h3>

          <p className="text-white/80 mt-3">
            Age 5–10 • Online • 60 Minutes
          </p>

          <div className="flex items-center gap-8 mt-8">

            <div>

              <p className="text-white/70 text-sm">
                Starting From
              </p>

              <h2 className="text-white text-4xl font-bold">
                ₹499
              </h2>

            </div>

            <button className="bg-[#D4AF37] text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Book Now
            </button>

          </div>

        </div>

      </div>

      {/* Side Cards */}

      <div className="flex flex-col gap-5">

        {[
          {
            title:"Yoga For Kids",
            age:"5-12",
            price:"₹399",
            color:"bg-emerald-50"
          },
          {
            title:"Football Camp",
            age:"8-15",
            price:"₹699",
            color:"bg-blue-50"
          },
          {
            title:"Art & Craft",
            age:"4-10",
            price:"₹299",
            color:"bg-orange-50"
          }
        ].map((item,index)=>(

          <div
            key={index}
            className={`rounded-3xl p-6 ${item.color} hover:shadow-xl transition cursor-pointer flex justify-between items-center`}
          >

            <div>

              <h3 className="font-bold text-xl">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-1">
                Age {item.age}
              </p>

            </div>

            <div className="text-right">

              <h4 className="font-bold text-2xl text-slate-900">
                {item.price}
              </h4>

              <button className="mt-3 text-[#D4AF37] font-semibold">
                Explore →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
{/* ================= Why Parents Trust Eventify ================= */}

<section className="min-h-screen flex items-center bg-gradient-to-b from-white to-[#FFF9F2]">

  <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="text-[#D4AF37] uppercase tracking-[5px] text-sm font-semibold">
        WHY PARENTS TRUST EVENTIFY
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
        Creating Meaningful Experiences
        <br />
        For Every Child
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        Eventify connects children with safe, engaging and inspiring
        experiences that encourage creativity, confidence and lifelong
        learning.
      </p>

    </div>

    {/* Features */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      {[
        {
          icon: <FaShieldAlt />,
          title: "Safe & Verified",
          desc: "Trusted organisers",
        },
        {
          icon: <FaLaptop />,
          title: "Digital Learning",
          desc: "Interactive workshops",
        },
        {
          icon: <FaTree />,
          title: "Outdoor Fun",
          desc: "Sports & adventures",
        },
        {
          icon: <FaChalkboardTeacher />,
          title: "Expert Mentors",
          desc: "Experienced instructors",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
        >

          <div className="w-14 h-14 rounded-full bg-[#FFF4D6] flex items-center justify-center mx-auto text-2xl text-[#D4AF37]">
            {item.icon}
          </div>

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

    {/* Stats */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14 text-center">

      {[
        { number: "500+", label: "Families" },
        { number: "100+", label: "Events" },
        { number: "50+", label: "Mentors" },
        { number: "4.9★", label: "Rating" },
      ].map((item, index) => (

        <div key={index}>

          <h3 className="text-4xl font-bold text-[#D4AF37]">
            {item.number}
          </h3>

          <p className="mt-2 text-slate-600">
            {item.label}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= How Eventify Works ================= */}

<section className="py-24 bg-[#FAFAF9]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-16">

      <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-[5px]">
        SIMPLE PROCESS
      </span>

      <h2 className="mt-3 text-4xl font-bold text-slate-900">
        How Eventify Works
      </h2>

      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-8">
        Finding the perfect activity for your child is simple and takes only a few minutes.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          no: "01",
          title: "Explore Events",
          desc: "Browse exciting digital and outdoor experiences."
        },
        {
          no: "02",
          title: "Choose & Book",
          desc: "Select an event and complete your booking securely."
        },
        {
          no: "03",
          title: "Join the Event",
          desc: "Attend online or outdoor activities with ease."
        },
        {
          no: "04",
          title: "Learn & Grow",
          desc: "Build confidence, creativity and lifelong memories."
        }
      ].map((step) => (

        <div
          key={step.no}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-2"
        >

          <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
            {step.no}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {step.title}
          </h3>

          <p className="mt-4 text-slate-600 leading-7">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>
{/* ================= Parent Testimonials ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-[5px]">
        TESTIMONIALS
      </span>

      <h2 className="mt-3 text-4xl font-bold text-slate-900">
        Loved by Parents & Kids
      </h2>

      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-8">
        Families trust Eventify to discover safe, engaging and meaningful
        experiences for their children.
      </p>

    </div>

    {/* Testimonials */}

    <div className="grid lg:grid-cols-3 gap-8">

      {[
        {
          name: "Priya Sharma",
          child: "Parent of Aarav (Age 7)",
          review:
            "The storytelling session was engaging and my son couldn't stop talking about it. The booking process was smooth and simple.",
        },
        {
          name: "Rahul Mehta",
          child: "Parent of Kiara (Age 9)",
          review:
            "The outdoor sports camp was well organised. Safe environment, friendly coaches and a wonderful experience.",
        },
        {
          name: "Sneha Patil",
          child: "Parent of Vivaan (Age 6)",
          review:
            "Exactly what we were looking for. One platform for both online learning and outdoor activities.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="bg-[#FAFAF9] rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-2"
        >

          {/* Rating */}

          <div className="text-[#D4AF37] text-xl tracking-wide">
            ★★★★★
          </div>

          {/* Review */}

          <p className="mt-6 text-slate-600 leading-8 italic">
            "{item.review}"
          </p>

          {/* Parent */}

          <div className="mt-8 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold shadow-md">
              {item.name.charAt(0)}
            </div>

            <div>

              <h4 className="font-bold text-slate-900">
                {item.name}
              </h4>

              <p className="text-sm text-slate-500">
                {item.child}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= Final CTA ================= */}

<section className="py-24 bg-slate-900">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="rounded-[40px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Join the Eventify Community
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Create Unforgettable
            <br />
            Learning Experiences
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Whether you're a parent looking for meaningful activities or an
            organizer planning engaging events, Eventify helps bring learning
            and fun together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
              Explore Events
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition">
              Become an Organizer
            </button>

          </div>

        </div>

        {/* Right Content */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-white">
              500+
            </h3>

            <p className="text-slate-300 mt-2">
              Happy Families
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-white">
              100+
            </h3>

            <p className="text-slate-300 mt-2">
              Events Conducted
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-white">
              50+
            </h3>

            <p className="text-slate-300 mt-2">
              Trusted Organizers
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-white">
              4.9★
            </h3>

            <p className="text-slate-300 mt-2">
              Parent Rating
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
};

export default Home;