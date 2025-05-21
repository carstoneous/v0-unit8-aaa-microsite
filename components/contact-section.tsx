import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Users, Calendar } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Ready to Transform Your Nuclear Medicine Operations?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contact us to discuss how AI can address your specific challenges and create competitive advantages for AAA.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Schedule a Discovery Call</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    defaultValue=""
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select an area of interest
                    </option>
                    <option value="manufacturing">Manufacturing Optimization</option>
                    <option value="supply-chain">Supply Chain & Logistics</option>
                    <option value="research">R&D Acceleration</option>
                    <option value="regulatory">Regulatory Affairs</option>
                    <option value="clinical">Clinical Trials</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your specific challenges or questions" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-6">
            <ContactCard
              icon={<Phone className="h-6 w-6 text-primary" />}
              title="Call Us Directly"
              description="Speak with our nuclear medicine AI specialists"
              contact="+1 (555) 123-4567"
            />
            <ContactCard
              icon={<Mail className="h-6 w-6 text-primary" />}
              title="Email Us"
              description="Send us your questions or requirements"
              contact="nuclear-medicine@unit8.com"
            />
            <ContactCard
              icon={<Calendar className="h-6 w-6 text-primary" />}
              title="Schedule a Demo"
              description="See our AI solutions in action"
              contact={
                <Button variant="outline" className="mt-2 w-full">
                  Request Demo
                </Button>
              }
            />
            <ContactCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Request a Tailored Assessment"
              description="Get a customized AI opportunity analysis for AAA"
              contact={
                <Button variant="outline" className="mt-2 w-full">
                  Request Assessment
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  title,
  description,
  contact,
}: {
  icon: React.ReactNode
  title: string
  description: string
  contact: React.ReactNode | string
}) {
  return (
    <Card>
      <CardContent className="flex items-start gap-4 p-6">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          {typeof contact === "string" ? <p className="font-medium">{contact}</p> : contact}
        </div>
      </CardContent>
    </Card>
  )
}
