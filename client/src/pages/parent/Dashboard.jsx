import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import PageHeader from "../../components/dashboard/PageHeader";
import StatCard from "../../components/dashboard/StatCard";
import DashboardCard from "../../components/dashboard/DashboardCard";

export default function ParentDashboard() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Parent Dashboard"
        subtitle="Welcome back! Discover and manage your child's learning events."
      />

      {/* ================= Stats ================= */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="My Bookings"
          value="12"
          subtitle="+3 this month"
          icon={FaClipboardList}
        />

        <StatCard
          title="Upcoming Events"
          value="3"
          subtitle="Next 30 Days"
          icon={FaCalendarAlt}
          color="bg-blue-500"
        />

        <StatCard
          title="Completed"
          value="9"
          subtitle="Successfully Attended"
          icon={FaCheckCircle}
          color="bg-green-500"
        />

        <StatCard
          title="Wishlist"
          value="5"
          subtitle="Saved Events"
          icon={FaHeart}
          color="bg-pink-500"
        />
      </div>

      {/* ================= Second Row ================= */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Upcoming Events */}
        <DashboardCard
          title="Upcoming Events"
          action={
            <Link
              to="/parent/bookings"
              className="flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-600"
            >
              View All <FaArrowRight />
            </Link>
          }
        >
          <div className="space-y-4">

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Krishna Story Workshop
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  10 Aug 2026 • 10:00 AM
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Confirmed
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Drawing Competition
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  18 Aug 2026 • 04:00 PM
                </p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                Upcoming
              </span>
            </div>

          </div>
        </DashboardCard>

        {/* Recent Bookings */}
        <DashboardCard
          title="Recent Bookings"
          action={
            <Link
              to="/parent/bookings"
              className="flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-600"
            >
              View All <FaArrowRight />
            </Link>
          }
        >
          <div className="space-y-4">

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Robotics Workshop
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Booked on 02 Aug 2026
                </p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                Paid
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Chess Championship
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Booked on 28 Jul 2026
                </p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                Paid
              </span>
            </div>

          </div>
        </DashboardCard>

      </div>

      {/* ================= Recommended Events ================= */}
      <div className="mt-8">

        <DashboardCard
          title="Recommended Events"
          action={
            <Link
              to="/events"
              className="flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-600"
            >
              Browse Events <FaArrowRight />
            </Link>
          }
        >

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-lg">
                Science Fun Workshop
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Hands-on science experiments for kids aged 7–12.
              </p>

              <button className="mt-5 rounded-xl bg-amber-400 px-5 py-2 font-semibold text-white hover:bg-amber-500">
                Book Now
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-lg">
                Coding for Kids
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Learn coding through games and interactive activities.
              </p>

              <button className="mt-5 rounded-xl bg-amber-400 px-5 py-2 font-semibold text-white hover:bg-amber-500">
                Book Now
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-lg">
                Art & Craft Camp
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Improve creativity through painting and craft activities.
              </p>

              <button className="mt-5 rounded-xl bg-amber-400 px-5 py-2 font-semibold text-white hover:bg-amber-500">
                Book Now
              </button>
            </div>

          </div>

        </DashboardCard>

      </div>
    </>
  );
}