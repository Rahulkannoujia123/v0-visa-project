import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, FileText, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description: "Get your tourist visa processed quickly and efficiently for your dream vacation.",
    features: ["Fast Processing", "Document Support", "Expert Guidance"],
  },
  {
    icon: FileText,
    title: "Business Visa",
    description: "Professional business visa services for your corporate travel needs.",
    features: ["Corporate Support", "Multiple Entry", "Priority Processing"],
  },
  {
    icon: Users,
    title: "Family Visa",
    description: "Reunite with your loved ones with our comprehensive family visa services.",
    features: ["Family Reunification", "Dependent Visas", "Complete Support"],
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Urgent visa processing for last-minute travel requirements.",
    features: ["24/7 Support", "Rush Processing", "Emergency Service"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Visa Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer comprehensive visa services for all your travel needs, ensuring a smooth and hassle-free
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
