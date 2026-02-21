import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Image src="/logo.jpg" alt="SDM" width={40} height={40} className="object-contain" />
                </div>
                SDM Visa
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty">
              Your trusted partner for hassle-free visa services. We specialize in Tourist, Work, and Student visas for leading destinations.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="https://wa.me/message/A7ONYLMLVHECG1"><MessageCircle className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="https://www.instagram.com/?deoia=1"><Instagram className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Work Permit
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Student Visa
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Business Visa
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                   Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#hero" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  Shop No. 1, Naurang Seva Society LBS Nagar, Dahisar (W), Mumbai - 400 068
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">+91 7977603184</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">sdmvisaservices@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 SDM Visa Services. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
