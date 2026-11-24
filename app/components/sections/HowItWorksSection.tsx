const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description:
      "Set up your company workspace and bring your team together.",
  },
  {
    number: "02",
    title: "Organize your projects",
    description:
      "Create projects, assign managers and set clear budgets.",
  },
  {
    number: "03",
    title: "Manage daily operations",
    description:
      "Coordinate tasks, materials, expenses and field updates.",
  },
  {
    number: "04",
    title: "Monitor performance",
    description:
      "Understand progress and budget utilization across your sites.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#141414] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e86a17] uppercase">
            A clearer way to build
          </p>

          <h2 className="mt-3 text-3xl leading-[1.08] font-black tracking-tight text-white uppercase sm:text-4xl lg:text-[46px]">
            Get your operations organized
            <span className="block">in four simple steps.</span>
          </h2>

          <p className="mt-4 text-xs text-neutral-400 sm:text-sm">
            Start with a better overview. Build a better rhythm for every
            project.
          </p>
        </div>

        {/* 4-Step Horizontal Process Row */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div key={step.number} className="flex flex-col items-start text-left">
                {/* Step Number Box + Horizontal Connector Line */}
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#e86a17]/60 bg-[#e86a17]/10 font-mono text-xs font-bold text-[#e86a17]">
                    {step.number}
                  </div>

                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-white/[0.12] lg:block"
                    />
                  )}
                </div>

                {/* Step Title & Description */}
                <h3 className="mt-6 text-sm font-extrabold tracking-[0.04em] text-white uppercase">
                  {step.title}
                </h3>

                <p className="mt-2.5 max-w-[240px] text-xs leading-relaxed text-neutral-400 sm:text-[13px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}