// components/BookingSection.tsx

import Link from "next/link";

export function BookingSection() {
  return (
    <section className="mx-auto max-w-[1075px] bg-[#242424] px-6 py-12 md:px-11">
      <h2 className="font-serif text-3xl text-[#c99151]">
        Book an appointment
      </h2>

      <p className="mt-4 max-w-[600px] text-[10px] leading-5 text-white/70">
        Sit back and choose the desired date, time and service from our online
        booking system. Once your booking has been confirmed, you will receive
        a confirmation email or SMS to ensure your appointment is saved.
      </p>

      <Link
        href="/book"
        className="mt-6 inline-block rounded-md bg-[#c58c4e] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#d49a57]"
      >
        Book an Appointment
      </Link>
    </section>
  );
}
