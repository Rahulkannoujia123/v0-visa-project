import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Globe, Award } from "lucide-react"

export function ValuesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">ABOUT COMPANY</h3>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Your trusted partner in visa services and travel
            </h2>

            <p className="text-muted-foreground mb-8 text-pretty">
              With years of experience in immigration and visa services, we have helped thousands of clients achieve
              their travel dreams. Our expert team provides personalized guidance and support throughout your visa
              application process.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Trusted Service</h4>
                  <p className="text-sm text-muted-foreground">Reliable and secure visa processing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Professional immigration consultants</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">Visa services for worldwide destinations</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">High Success Rate</h4>
                  <p className="text-sm text-muted-foreground">Proven track record of approvals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/professional-visa-consultation-office-with-documen.jpg"
                  alt="Visa consultation"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>

            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
