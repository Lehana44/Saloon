// components/Footer.tsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1075px] items-center justify-between border-t border-white/10 bg-[#242424] px-6 py-7 md:px-11">
      <div className="flex gap-6 text-[9px] text-white/60">
        <Link href="/about" className="hover:text-[#c99151]">
          About
        </Link>

        <Link href="/services" className="hover:text-[#c99151]">
          Our Services
        </Link>

        <Link href="/contact" className="hover:text-[#c99151]">
          Contact
        </Link>
      </div>

      <div className="flex gap-4 text-xs text-white/50">
        <span>◎</span>
        <span>f</span>
        <span>◎</span>
      </div>
    </footer>
  );
}
