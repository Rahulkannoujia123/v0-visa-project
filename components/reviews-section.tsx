import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Rahul Sharma",
      initial: "R",
      text: "Very calm and patiently replied to all queries. Mr. Mehta guided me perfectly for my UK student visa.",
    },
    {
       name: "Priya Patel",
       initial: "P",
       text: "Excellent service for Singapore tourist visa. Got it within 2 days as promised. Highly recommended!",
    },
    {
       name: "Amit Singh",
       initial: "A",
       text: "Hassle-free experience for my Europe trip. They handled all the documentation perfectly.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Happy Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent/20 mb-6" />
                <p className="text-foreground/80 mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">Verified Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
