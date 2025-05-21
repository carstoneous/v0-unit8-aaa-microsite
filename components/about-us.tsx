import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-background">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Why Partner with Unit8 for Your AI Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unit8 specializes in helping organizations like AAA leverage data and AI to transform operations,
              accelerate innovation, and create competitive advantages.
            </p>

            <div className="space-y-4">
              <FeatureItem text="Deep expertise in pharmaceutical and life sciences AI applications" />
              <FeatureItem text="Experience implementing AI in highly regulated environments" />
              <FeatureItem text="Proven track record of delivering measurable business impact" />
              <FeatureItem text="Specialized knowledge in manufacturing and supply chain optimization" />
              <FeatureItem text="Secure, compliant GenAI implementation capabilities" />
              <FeatureItem text="End-to-end services from strategy to implementation and support" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">
                    We follow a proven methodology to ensure successful AI implementation and measurable results.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Discovery & Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        We analyze your specific challenges, data landscape, and strategic objectives to identify
                        high-impact AI opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Solution Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Our experts design tailored AI solutions that address your specific needs while ensuring
                        compliance and security.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Implementation & Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        We build and deploy solutions that integrate seamlessly with your existing systems and
                        workflows.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Knowledge Transfer & Support</h4>
                      <p className="text-sm text-muted-foreground">
                        We ensure your team has the skills and knowledge to maintain and evolve your AI capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}
