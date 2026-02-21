import { Card, CardContent } from "@/components/ui/card"
import { Clock, IndianRupee, MessageCircle, UserCheck } from "lucide-react"

const stats = [
  { value: "99%", label: "Success Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "10+", label: "Years Experience" },
  { value: "5k+", label: "Visas Approved" },
]

const features = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "We prioritize your time with our fast-track processing system.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Competitive rates with no hidden charges or surprise fees.",
  },
  {
    icon: MessageCircle,
    title: "Personal Support",
    description: "Dedicated support via WhatsApp and phone throughout the process.",
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    description: "Our team ensures valid documentation to minimize rejection risk.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose SDM Visa?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, transparency, and speed to deliver the best visa consultancy experience in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
