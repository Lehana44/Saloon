const services = [
  {
    title: "Beards And Mustaches",
    icon: "✂",
    description:
      "Our barbers are trained in the art of beard and mustache shaping, using scissors, clippers, and razors to create the perfect look for you.",
  },
  {
    title: "Hair Coloring",
    icon: "C",
    description:
      "Transform your look with our hair coloring services. Our skilled barbers use only the highest quality products to bring life and vibrancy to your hair.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1075px] bg-[#242424] px-6 py-14 md:px-11"
    >
      <h2 className="text-center font-serif text-3xl text-[#c99151]">
        Our Services
      </h2>

      <div className="mx-auto mt-12 grid max-w-[700px] gap-14 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center text-4xl text-[#c99151]">
              {service.icon}
            </div>

            <h3 className="mt-4 text-sm text-[#c99151]">
              {service.title}
            </h3>

            <p className="mx-auto mt-4 max-w-[250px] text-[10px] leading-5 text-white/70">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
