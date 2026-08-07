import BaseModal from "../common/BaseModal";

export default function TicketModal({
    isOpen,
    onClose,
    booking
}) {

    return (

        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="Event Ticket"
            subtitle="Present this ticket at the venue."
            size="max-w-3xl"
        >

          <div className="space-y-6">

  {/* Event Banner */}
  <img
    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200"
    alt="Event"
    className="w-full h-56 rounded-2xl object-cover"
  />

  {/* Ticket */}
  <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#2B2B34] to-[#1A1A20]">

    {/* Ticket Header */}
    <div className="bg-[#D4AF37] px-8 py-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-[5px] text-black/70 font-semibold">
            EVENTIFY
          </p>

          <h2 className="mt-2 text-3xl font-bold text-black">
            Drawing Workshop
          </h2>
        </div>

        <div className="rounded-xl bg-black/10 px-4 py-2 font-semibold text-black">
          BK10235
        </div>

      </div>

    </div>

    {/* Decorative Cutouts */}
    <div className="absolute -left-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#44444E]" />
    <div className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#44444E]" />

    {/* Ticket Body */}
    <div className="grid gap-8 p-8 lg:grid-cols-[1fr_220px]">

      <div className="space-y-5">

        <div className="grid grid-cols-2 gap-5">

          <Info label="Parent" value="Kalpesh Patil" />
          <Info label="Child" value="Aarav" />
          <Info label="Date" value="18 Aug 2026" />
          <Info label="Time" value="10:00 AM" />
          <Info label="Venue" value="Pune" />
          <Info label="Seat" value="General Admission" />

        </div>

        <div className="rounded-2xl bg-white/5 p-5">

          <p className="font-semibold text-green-400">
            ✓ Booking Confirmed
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            Please arrive 30 minutes before the event and show this
            ticket at the entrance.
          </p>

        </div>

      </div>

      {/* QR */}

      <div className="flex flex-col items-center justify-center">

        <div className="rounded-2xl bg-white p-4">

          {/* Later replace with QRCodeCanvas */}

          <div className="flex h-44 w-44 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-slate-500 font-semibold">
            QR CODE
          </div>

        </div>

        <p className="mt-4 text-sm text-gray-400">
          Scan at Entry
        </p>

      </div>

    </div>

    {/* Footer */}

    <div className="border-t border-dashed border-white/10 bg-black/20 px-8 py-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-400">
            Status
          </p>

          <p className="text-lg font-semibold text-green-400">
            Confirmed
          </p>

        </div>

        <button className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:bg-[#c79b22] transition">
          Download Ticket
        </button>

      </div>

    </div>

  </div>

</div>


        </BaseModal>
        
    );

}
function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}