import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/eiffel-tower-and-st-basil-s-cathedral-landmarks-wi.jpg" alt="Travel landmarks" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent text-lg mb-4 font-medium">Welcome to Starline Visas</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          We Help You To
          <br />
          Travel The World
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
          Are you ready to explore the world? We're here to make it happen. Contact us for your dream and let us turn
          your travel aspirations into reality with our expert visa services.
        </p>

        <p className="text-sm md:text-base mb-8 text-white/80">
          We Are Specialist in Usa Visas, Uk Visas, Canada Visa, China Visa, Turkey Visa
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 bg-transparent"
          >
            Learn More
          </Button>
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
