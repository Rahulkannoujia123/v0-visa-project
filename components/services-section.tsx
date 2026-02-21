import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, FileText, Users, Clock } from "lucide-react"

import { ShieldCheck, Globe2, Briefcase } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description: (
      <>
        Quick & easy tourist visas for Singapore, <span className="text-accent font-bold">Russia</span>, Dubai, Thailand, Europe & more.
      </>
    ),
    features: ["Fast Processing", "Document Support", "Expert Guidance"],
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    description: "Expert guidance for work permits in Poland, Czech Republic, Lithuania & Croatia.",
    features: ["Work Permits", "Corporate Support", "Documentation"],
  },
  {
    icon: Users,
    title: "Study Visa",
    description: "Fulfill your dream of studying abroad in UK, USA, Canada, Australia & Europe.",
    features: ["University Admission", "Visa Filing", "Interview Prep"],
  },
  {
    icon: FileText,
    title: "Business Visa",
    description: "Hassle-free business visa processing for global conferences and meetings.",
    features: ["Invitations", "Priority Filing", "Express Service"],
  },
  {
    icon: ShieldCheck,
    title: "Documentation",
    description: "Assistance with Apostille, translation, and visa application filling.",
    features: ["Apostille Services", "Translation", "Form Filling"],
  },
  {
    icon: Globe2,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance plans for your safety abroad.",
    features: ["Global Coverage", "Medical Support", "Instant Policy"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-lg font-bold mb-2 uppercase tracking-wide">Our Premium Services</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Comprehensive Visa Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer a complete range of visa and travel documentation services tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-muted/50">
              <CardHeader className="text-left pb-4 flex-row items-center gap-4 space-y-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-muted-foreground mb-6 text-pretty line-clamp-2">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
