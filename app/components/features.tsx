// components/FeatureStrip.tsx

const features = [
  {
    title: "Convenient and flexible scheduling",
    text: "We offer appointments and walk-in services, making it easy to get a grooming when it’s convenient for you.",
  },
  {
    title: "Relaxing atmosphere",
    text: "We offer a welcoming and relaxing environment, where you can sit back, relax and enjoy a grooming experience that is both enjoyable and effective.",
  },
  {
    title: "Personalized attention and service",
    text: "At a barbershop, you receive one-on-one attention from a trained professional who can provide a customized experience tailored to your needs.",
  },
];

export function FeatureStrip() {
  return (
    <section className="mx-auto grid max-w-[1075px] gap-10 px-6 py-12 md:grid-cols-3 md:gap-14 md:px-11">
      {features.map((feature) => (
        <div key={feature.title}>
          <h3 className="text-xs font-medium text-[#c99151]">
            {feature.title}
          </h3>

          <p className="mt-3 text-[10px] leading-5 text-white/70">
            {feature.text}
          </p>
        </div>
      ))}
    </section>
  );
}
