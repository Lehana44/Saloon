import Link from "next/link";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 text-center md:mb-16">
          <h2 className="relative inline-block pb-4 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl">
            Our Services

            <span className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 bg-[#d4af37]" />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#666] md:text-lg">
            Discover our range of professional hair care services designed to
            enhance your natural beauty and give you the confidence you deserve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* 1. Women's Cut */}
          <div className="group overflow-hidden rounded-xl bg-[#f9f7f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594254773847-9fce26e950bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Women's haircut and styling"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                Women&apos;s Cut & Style
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#666]">
                Customized haircut tailored to your face shape and hair
                texture, followed by professional styling.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-4">
                <span className="text-xl font-bold text-[#d4af37]">
                  $65 - $95
                </span>

                <span className="text-sm text-[#888]">
                  60-90 min
                </span>
              </div>

              <Link
                href="/book"
                className="mt-5 inline-block rounded-full border-2 border-[#d4af37] bg-[#d4af37] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* 2. Men's Cut */}
          <div className="group overflow-hidden rounded-xl bg-[#f9f7f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                alt="Men's haircut"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                Men&apos;s Precision Cut
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#666]">
                Classic or contemporary men&apos;s haircut with attention to
                detail and personalized styling.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-4">
                <span className="text-xl font-bold text-[#d4af37]">
                  $45 - $75
                </span>

                <span className="text-sm text-[#888]">
                  45-60 min
                </span>
              </div>

              <Link
                href="/book"
                className="mt-5 inline-block rounded-full border-2 border-[#d4af37] bg-[#d4af37] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* 3. Coloring */}
          <div className="group overflow-hidden rounded-xl bg-[#f9f7f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587225438173-701d7edc94f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlJTIwaGFpciUyMGNvbG9yaW5nfGVufDB8fDB8fHww"
                alt="Professional hair coloring"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                Professional Coloring
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#666]">
                Full color, highlights, balayage, or ombre with premium
                products for vibrant, long-lasting results.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-4">
                <span className="text-xl font-bold text-[#d4af37]">
                  $120 - $250
                </span>

                <span className="text-sm text-[#888]">
                  2-4 hours
                </span>
              </div>

              <Link
                href="/book"
                className="mt-5 inline-block rounded-full border-2 border-[#d4af37] bg-[#d4af37] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* 4. Conditioning */}
          <div className="group overflow-hidden rounded-xl bg-[#f9f7f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1729005732908-de02acdeca5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMGNhbmRpdGlvbmluZyUyMGJsYWNrfGVufDB8fDB8fHww"
                alt="Deep conditioning treatment"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                Deep Conditioning Treatment
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#666]">
                Nourishing treatment to repair damaged hair and restore shine
                and manageability.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-4">
                <span className="text-xl font-bold text-[#d4af37]">
                  $55 - $85
                </span>

                <span className="text-sm text-[#888]">
                  45-60 min
                </span>
              </div>

              <Link
                href="/book"
                className="mt-5 inline-block rounded-full border-2 border-[#d4af37] bg-[#d4af37] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* 5. Bridal Styling */}
          <div className="group overflow-hidden rounded-xl bg-[#f9f7f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1686213011642-b25f94b95b96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbiUyMGhhaXIlMjBzdHlsaXN0cyUyMGJsYWNrfGVufDB8fDB8fHww"
                alt="Bridal hair styling"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                Bridal & Special Occasion Styling
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#666]">
                Elegant updos and styling for weddings, proms, and special
                events.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-4">
                <span className="text-xl font-bold text-[#d4af37]">
                  $100 - $180
                </span>

                <span className="text-sm text-[#888]">
                  90-120 min
                </span>
              </div>

              <Link
                href="/book"
                className="mt-5 inline-block rounded-full border-2 border-[#d4af37] bg-[#d4af37] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* 6. Hair Extensions */}
          <div className="group overflow-hidden rounded-xl bg-[#f9f7f4] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620751604028-84c3a277f4f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8"
                alt="Hair extensions"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                Hair Extensions
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#666]">
                Clip-in, tape-in, or bonded extensions for added length and
                volume.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-4">
                <span className="text-xl font-bold text-[#d4af37]">
                  $200 - $400
                </span>

                <span className="text-sm text-[#888]">
                  2-3 hours
                </span>
              </div>

              <Link
                href="/book"
                className="mt-5 inline-block rounded-full border-2 border-[#d4af37] bg-[#d4af37] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
