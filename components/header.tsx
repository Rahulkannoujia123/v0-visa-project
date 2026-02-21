import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="SDM Logo" width={40} height={40} className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold text-primary">SDM Visa</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#hero" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-foreground hover:text-primary transition-colors">
              Process
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground hidden md:flex">
              <Link href="tel:+917977603184">Call Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
