import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
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
              <Image src="/logo.jpg" alt="SDM Visa Services Logo" width={200} height={80} className="h-20 w-auto object-contain bg-white p-2 rounded-lg" />
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty">
              Your trusted partner for visa services and immigration solutions. We help make your travel dreams come
              true.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Visa Types
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Business Visa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Student Visa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Immigration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    123 Business Street,
                    <br />
                    New Delhi, India 110001
                  </p>
                </div>
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
