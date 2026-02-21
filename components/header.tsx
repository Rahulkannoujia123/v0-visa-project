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
            <Link href="/" className="flex items-center">
              <Image src="/logo.jpg" alt="SDM Visa Services Logo" width={150} height={56} className="h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Visa
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              E-Visa
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Career
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">For Consultation</span>
              <span className="font-semibold text-primary">+91 7977603184</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Quote</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
