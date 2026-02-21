import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Have questions about your visa application? Visit us or drop a message.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Shop No. 1, Naurang Seva Society LBS Nagar,<br />
                    Kandar Pada, Dahisar (W),<br />
                    Mumbai - 400 068 Maharashtra India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">Call Us</h3>
                  <p className="text-muted-foreground">+91 7977603184</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">Email Us</h3>
                  <p className="text-muted-foreground">sdmvisaservices@yahoo.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 h-12 px-6">
                <Link href="https://wa.me/message/A7ONYLMLVHECG1">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 text-white gap-2 h-12 px-6">
                <Link href="https://www.instagram.com/?deoia=1">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Link>
              </Button>
            </div>
          </div>

          <div className="h-[450px] rounded-2xl overflow-hidden shadow-lg border-8 border-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4475459345244!2d72.846875!3d19.252083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b11d5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sDahisar%20West%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1625576000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
