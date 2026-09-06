// components/Hero.tsx

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto mt-0 h-[500px] max-w-[1075px] overflow-hidden md:h-[570px]">
      <img
        src="https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Professional barber"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-[620px]">
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            Get a Fresh Cut Every Time
            <br />
            with Our Expert Barbers!
          </h1>

          <p className="mx-auto mt-5 max-w-[540px] text-xs leading-5 text-white/85 md:text-sm">
            Step into our barbershop and prepare to be pampered like a boss!
            Book your appointment now, and get ready to experience grooming
            like you’ve never known it before!
          </p>

          <Link
            href="/book"
            className="mt-7 inline-block rounded-md bg-[#c58c4e] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#d49a57]"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
