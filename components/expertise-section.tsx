import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Database, ShieldCheck, Microscope, Cpu, BarChart } from "lucide-react"

export default function ExpertiseSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Expertise in Nuclear Medicine AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We bring specialized knowledge and proven experience to address the unique challenges of radiopharmaceutical
            development and delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExpertiseCard
            icon={<Microscope className="h-6 w-6 text-primary" />}
            title="Pharmaceutical AI Experience"
            description="Deep expertise in applying AI to pharmaceutical manufacturing, R&D, and regulatory processes in highly regulated environments."
          />
          <ExpertiseCard
            icon={<Database className="h-6 w-6 text-primary" />}
            title="Data Platform Implementation"
            description="Proven track record building secure, compliant data platforms that integrate diverse sources while maintaining data integrity."
          />
          <ExpertiseCard
            icon={<ShieldCheck className="h-6 w-6 text-primary" />}
            title="Secure GenAI Solutions"
            description="Specialized in deploying secure, private GenAI applications that protect sensitive data while delivering powerful insights."
          />
          <ExpertiseCard
            icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
            title="Regulatory Compliance"
            description="Experience implementing AI solutions that meet stringent regulatory requirements in pharmaceutical and financial sectors."
          />
          <ExpertiseCard
            icon={<Cpu className="h-6 w-6 text-primary" />}
            title="MLOps Infrastructure"
            description="Expertise in building robust MLOps pipelines for deploying and monitoring critical AI models in production environments."
          />
          <ExpertiseCard
            icon={<BarChart className="h-6 w-6 text-primary" />}
            title="Advanced Analytics"
            description="Specialized in time-series forecasting, predictive maintenance, and process optimization for complex manufacturing operations."
          />
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start space-y-0 gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
