// components/Navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-[1075px] -translate-x-1/2 rounded-xl bg-[#1b1b1b]/95 shadow-xl backdrop-blur">
      <div className="flex h-12 items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="text-[10px] font-bold tracking-wide text-white"
        >
          Barbershop Website
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-[10px] text-white/80 transition hover:text-[#c99151]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[10px] text-white/80 transition hover:text-[#c99151]"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-[10px] text-white/80 transition hover:text-[#c99151]"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-[10px] text-white/80 transition hover:text-[#c99151]"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/book"
          className="hidden rounded-md bg-[#c58c4e] px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-[#d49a57] md:block"
        >
          Book an Appointment
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="w-fit rounded-md bg-[#c58c4e] px-4 py-2 text-xs"
            >
              Book an Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
