import { FaCamera, FaUserCircle } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Complete Your Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Add your profile picture and mobile number to complete your account.
        </p>
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-8">

        {/* Left Card */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <div className="flex flex-col items-center">

            <div className="relative">

              <div className="w-36 h-36 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-7xl">

                <FaUserCircle />

              </div>

              <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg hover:bg-amber-600">

                <FaCamera />

              </button>

            </div>

            <h2 className="mt-5 text-xl font-semibold">
              Patil
            </h2>

            <span className="mt-2 px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm">
              Parent
            </span>

            <div className="w-full mt-8">

              <div className="flex justify-between text-sm">

                <span>Profile Completion</span>

                <span>60%</span>

              </div>

              <div className="mt-2 h-3 rounded-full bg-slate-100">

                <div className="w-3/5 h-3 rounded-full bg-amber-500"></div>

              </div>

            </div>

            <label className="mt-8 w-full">

              <input
                type="file"
                className="hidden"
              />

              <div className="cursor-pointer rounded-xl border border-dashed border-slate-300 py-3 text-center hover:border-amber-500 hover:bg-amber-50 transition">
                Upload Profile Picture
              </div>

            </label>

          </div>

        </div>

        {/* Right Card */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <h2 className="text-xl font-semibold mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-sm text-slate-500">
                Full Name
              </label>

              <input
                type="text"
                value="Patil"
                readOnly
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 bg-slate-50"
              />

            </div>

            <div>

              <label className="text-sm text-slate-500">
                Email Address
              </label>

              <input
                type="email"
                value="kalpesh@example.com"
                readOnly
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 bg-slate-50"
              />

            </div>

            <div className="md:col-span-2">

              <label className="text-sm text-slate-500">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

            </div>

          </div>

          <button className="mt-8 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition">
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}