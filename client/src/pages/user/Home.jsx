import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              {/* Badge */}
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm">
                🌟 Powered by Kaksha
              </span>

              {/* Heading */}
              <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Discover Amazing
                <span className="text-yellow-500"> Learning </span>
                Experiences
                <br />
                For Every Child
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg text-gray-600 leading-8">
                Explore engaging events designed to help children learn,
                create, play, and grow. From online workshops to outdoor
                adventures, everything in one trusted platform.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">

                <button className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                  Explore Events
                  <FaArrowRight />
                </button>

                <button className="border border-gray-300 hover:border-yellow-500 hover:text-yellow-600 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                  <FaPlayCircle />
                  Watch Demo
                </button>

              </div>

            </div>

            {/* Right Content */}
            <div>

              <div className="rounded-3xl bg-gray-200 h-[500px] flex items-center justify-center shadow-xl">

                <p className="text-gray-500 text-xl">
                  Hero Image Here
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Home;