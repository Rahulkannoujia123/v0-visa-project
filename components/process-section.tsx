export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Contact & Consultation",
      description: "Reach out to us via WhatsApp or Phone. Get a free consultation for your visa requirements.",
    },
    {
      number: "02",
      title: "Submit Documents",
      description: "Submit your documents physically or digitally. We verify everything to ensure 100% accuracy.",
    },
    {
      number: "03",
      title: "Receive Your Visa",
      description: "Sit back and relax while we process your visa. Collect your passport with the stamped visa!",
    },
  ]

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple 3-Step Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey to your dream destination starts here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="text-6xl font-bold text-primary/10 mb-6">{step.number}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 w-12 h-0.5 bg-primary/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
