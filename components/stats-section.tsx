import { Star, Users, Zap, Shield } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Star,
      value: "4.8/5 Rating",
      label: "On Google Reviews",
    },
    {
      icon: Users,
      value: "45+ Clients",
      label: "Successfully Served",
    },
    {
      icon: Zap,
      value: "Fast Process",
      label: "24-48hr Turnaround",
    },
    {
      icon: Shield,
      value: "Transparent",
      label: "No Hidden Costs",
    },
  ]

  return (
    <section className="py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <stat.icon className="w-8 h-8 text-accent mb-3" />
              <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
