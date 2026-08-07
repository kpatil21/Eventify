import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaChild,
  FaTicketAlt,
  FaCheckCircle,
  FaCreditCard,
} from "react-icons/fa";

import BaseModal from "../common/BaseModal";

export default function BookingDetailsModal({
  isOpen,
  onClose,
  booking,
}) {
  if (!booking) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Booking Details"
      subtitle="Complete information about your booking."
      size="max-w-5xl"
    >
      <div className="space-y-8">

        {/* Banner */}

        <img
          src={booking.image}
          alt={booking.title}
          className="h-64 w-full rounded-2xl object-cover"
        />

        {/* Title */}

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-3xl font-bold text-white">
              {booking.title}
            </h2>

            <p className="mt-2 text-gray-400">
              Booking ID : {booking.id}
            </p>
          </div>

          <span className="rounded-full bg-green-500/20 px-5 py-2 text-sm font-semibold text-green-400">
            {booking.status}
          </span>

        </div>

        {/* Event Information */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">
            Event Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            <InfoCard
              icon={<FaCalendarAlt />}
              label="Date"
              value={booking.date}
            />

            <InfoCard
              icon={<FaClock />}
              label="Time"
              value={booking.time}
            />

            <InfoCard
              icon={<FaMapMarkerAlt />}
              label="Venue"
              value={booking.venue}
            />

            <InfoCard
              icon={<FaTicketAlt />}
              label="Seats"
              value={booking.seats}
            />

          </div>

        </div>

        {/* Participant */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">
            Participant Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            <InfoCard
              icon={<FaUser />}
              label="Parent"
              value="Kalpesh Patil"
            />

            <InfoCard
              icon={<FaChild />}
              label="Child"
              value={booking.child}
            />

          </div>

        </div>

        {/* Payment */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">
            Payment Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            <InfoCard
              icon={<FaCreditCard />}
              label="Amount Paid"
              value="₹499"
            />

            <InfoCard
              icon={<FaCheckCircle />}
              label="Payment Status"
              value="Paid"
            />

            <InfoCard
              icon={<FaTicketAlt />}
              label="Transaction ID"
              value="TXN28475691"
            />

            <InfoCard
              icon={<FaCalendarAlt />}
              label="Booking Date"
              value="05 Aug 2026"
            />

          </div>

        </div>

        {/* Notes */}

        <div className="rounded-2xl bg-white/5 p-6">

          <h3 className="mb-3 text-lg font-semibold text-white">
            Important Notes
          </h3>

          <ul className="list-disc space-y-2 pl-5 text-gray-300">
            <li>Please arrive 30 minutes before the event.</li>
            <li>Carry this booking confirmation.</li>
            <li>Bring a water bottle if required.</li>
          </ul>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-6 py-3 text-white hover:bg-white/10"
          >
            Close
          </button>

          <button className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:bg-[#c79b22]">
            View Ticket
          </button>

        </div>

      </div>
    </BaseModal>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {label}
        </p>

        <p className="font-semibold text-white">
          {value}
        </p>
      </div>

    </div>
  );
}