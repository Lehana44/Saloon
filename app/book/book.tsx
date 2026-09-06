// app/book/page.tsx

import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#202020] pt-20">
      <BookingSection />

      <section className="mx-auto max-w-[1075px] bg-[#242424] px-6 pb-16 md:px-11">
        <form className="grid max-w-[700px] gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs text-[#c99151]">
              Your Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c99151]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-[#c99151]">
              Email
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c99151]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-[#c99151]">
              Date
            </label>

            <input
              type="date"
              className="w-full rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none focus:border-[#c99151]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-[#c99151]">
              Service
            </label>

            <select
              defaultValue=""
              className="w-full rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none focus:border-[#c99151]"
            >
              <option value="" disabled>
                Select service
              </option>
              <option>Beards And Mustaches</option>
              <option>Hair Coloring</option>
              <option>Classic Haircut</option>
              <option>Beard Trim</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs text-[#c99151]">
              Time
            </label>

            <select
              defaultValue=""
              className="w-full rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none focus:border-[#c99151]"
            >
              <option value="" disabled>
                Select time
              </option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>01:00 PM</option>
              <option>02:00 PM</option>
              <option>03:00 PM</option>
              <option>04:00 PM</option>
              <option>05:00 PM</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs text-[#c99151]">
              Phone
            </label>

            <input
              type="tel"
              placeholder="(555) 123-4567"
              className="w-full rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c99151]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-xs text-[#c99151]">
              Additional Notes
            </label>

            <textarea
              rows={5}
              placeholder="Anything we should know?"
              className="w-full resize-none rounded-md border border-white/10 bg-[#191919] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c99151]"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-md bg-[#c58c4e] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#d49a57]"
          >
            Request Appointment
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
