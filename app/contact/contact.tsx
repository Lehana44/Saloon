// app/contact/page.tsx

import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#202020] pt-20">
      <section className="mx-auto max-w-[1075px] bg-[#242424] px-6 py-16 md:px-11">
        <h1 className="font-serif text-4xl text-[#c99151]">
          Contact Us
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
          Have a question about our services or want to schedule your next
          visit? Get in touch with our team and we will be happy to help.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg text-[#c99151]">
              Phone
            </h3>

            <p className="mt-2 text-sm text-white/70">
              (555) 123-4567
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#c99151]">
              Email
            </h3>

            <p className="mt-2 text-sm text-white/70">
              hello@barbershop.com
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#c99151]">
              Opening Hours
            </h3>

            <p className="mt-2 text-sm text-white/70">
              Monday – Saturday
              <br />
              9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
