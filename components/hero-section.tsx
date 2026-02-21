import { Button } from "@/components/ui/button"

import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/eiffel-tower-and-st-basil-s-cathedral-landmarks-wi.jpg" alt="Travel landmarks" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent text-lg mb-4 font-bold uppercase tracking-wider">Fastest Visa Processing in Mumbai</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          Fast, Trusted & Hassle-Free
          <br />
          Visa Services in Mumbai
        </h1>

        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto text-pretty">
          Your gateway to the world. We specialize in Tourist, Work, Study, and Business visas with a 99% success rate. Expert guidance for Singapore, Europe, UK, USA, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-bold">
            <Link href="https://wa.me/message/A7ONYLMLVHECG1">Get Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-bold bg-transparent"
          >
            <Link href="tel:+917977603184">Call Now: +91 7977603184</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium text-white/80">
          <div className="flex items-center gap-2">
             <span className="text-accent">★</span> 4.8/5 Google Rating
          </div>
          <div className="flex items-center gap-2">
             <span className="text-accent">✔</span> 45+ Happy Clients
          </div>
          <div className="flex items-center gap-2">
             <span className="text-accent">✔</span> 100% Transparent Process
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
