import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-muted/50 dark:from-background dark:to-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from organizations that have transformed their operations with our AI solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="The predictive maintenance solution has dramatically reduced our equipment downtime. We've seen a 15% increase in overall production capacity."
            author="Operations Director"
            company="Swiss Pharmaceutical Company"
          />
          <TestimonialCard
            quote="Their expertise in secure GenAI deployment allowed us to leverage AI while maintaining strict compliance with regulatory requirements."
            author="Chief Information Officer"
            company="Major Swiss Bank"
          />
          <TestimonialCard
            quote="The demand forecasting models have transformed our supply chain. We've reduced inventory costs while improving product availability."
            author="Supply Chain Manager"
            company="Medical Equipment Manufacturer"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
  company,
}: {
  quote: string
  author: string
  company: string
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <p className="text-muted-foreground italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardFooter>
    </Card>
  )
}
