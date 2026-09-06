// app/components/AboutSection.tsx

export function AboutSection() {
  return (
    <section
      id="aboutus"
      className="bg-[#f9f7f4] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* Image */}
          <div className="group w-full overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] lg:w-1/2">
            <img
              src="/about.jpg"
              alt="Barber shop interior"
              width="1000"
              height="600"
              className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[500px]"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="relative mb-6 inline-block pb-4 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl">
              Our Story

              <span className="absolute bottom-0 left-0 h-1 w-20 bg-[#d4af37]" />
            </h2>

            <p className="mb-5 text-base leading-7 text-[#555] md:text-lg">
              Welcome to Premium Cuts, where traditional barbering meets
              modern styling. Founded in 2010, our shop has been serving the
              community with exceptional grooming services for over a decade.
            </p>

            <p className="mb-7 text-base leading-7 text-[#555] md:text-lg">
              Our master barbers and stylists combine time-honored techniques
              with contemporary trends to deliver results that exceed
              expectations. We believe that a great haircut is more than just
              a service — it&apos;s an experience that boosts confidence and
              reflects your personal style.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                  <span className="text-xl">✂</span>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2c2c2c]">
                    Expert Craftsmanship
                  </h3>

                  <p className="text-sm leading-6 text-[#666]">
                    Our barbers have years of experience and continuously
                    update their skills with the latest techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                  <span className="text-xl">★</span>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2c2c2c]">
                    Premium Products
                  </h3>

                  <p className="text-sm leading-6 text-[#666]">
                    We use only the highest quality grooming products to
                    ensure the best results for your hair and skin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                  <span className="text-xl">⌂</span>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2c2c2c]">
                    Comfortable Environment
                  </h3>

                  <p className="text-sm leading-6 text-[#666]">
                    Relax in our stylish, welcoming atmosphere while enjoying
                    top-notch service.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-5 text-center shadow">
                <div className="text-3xl font-bold text-[#d4af37]">
                  13+
                </div>

                <div className="mt-1 text-xs text-[#666]">
                  Years Experience
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 text-center shadow">
                <div className="text-3xl font-bold text-[#d4af37]">
                  10K+
                </div>

                <div className="mt-1 text-xs text-[#666]">
                  Happy Clients
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 text-center shadow">
                <div className="text-3xl font-bold text-[#d4af37]">
                  15
                </div>

                <div className="mt-1 text-xs text-[#666]">
                  Expert Stylists
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
