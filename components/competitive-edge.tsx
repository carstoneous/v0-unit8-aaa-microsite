import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Zap, Shield, Microscope, Users } from "lucide-react"

export default function CompetitiveEdge() {
  return (
    <section id="competitive-edge" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Gain a Competitive Edge</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understand how AI can differentiate AAA in the nuclear medicine landscape and create strategic advantages.
          </p>
        </div>

        <Tabs defaultValue="landscape" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
            <TabsTrigger value="landscape">Competitive Landscape</TabsTrigger>
            <TabsTrigger value="opportunities">Blue Ocean Opportunities</TabsTrigger>
            <TabsTrigger value="advantages">AAA's Unique Advantages</TabsTrigger>
          </TabsList>

          <TabsContent value="landscape" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CompetitorCard
                name="Lantheus Holdings"
                focus="Quantitative Cancer Imaging Analysis (PYLARIFY AI™)"
                description="Primarily focused on standardizing PSMA PET/CT scan assessment through AI-enhanced imaging."
              />
              <CompetitorCard
                name="Telix Pharmaceuticals"
                focus="Clinical Decision Support (Telix AI™)"
                description="Building AI capabilities via Dedicaid focused on Clinical Decision Support Software with predictive capabilities for disease severity and treatment decisions."
              />
              <CompetitorCard
                name="GE HealthCare"
                focus="AI-Enhanced Image Processing"
                description="Advancing imaging hardware and AI-enhanced image processing (Clarify DL for SPECT/CT) to improve diagnostic image quality."
              />
              <CompetitorCard
                name="ITM Isotope Technologies Munich"
                focus="Limited AI Initiatives"
                description="Mentioned in a DARPA project involving AI, but limited evidence of comprehensive AI integration in core operations."
              />
              <CompetitorCard
                name="POINT Biopharma (Eli Lilly)"
                focus="Potential Large Pharma AI Integration"
                description="Recently acquired by Eli Lilly, which brings extensive AI capabilities that could be integrated into radiopharmaceutical operations."
              />
              <CompetitorCard
                name="RayzeBio (Bristol Myers Squibb)"
                focus="Potential Large Pharma AI Integration"
                description="Recently acquired by BMS, which could leverage its AI capabilities in the radiopharmaceutical space."
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Key Insight</h3>
              <p className="text-muted-foreground">
                The predominant focus of competitor AI is currently on{" "}
                <strong>imaging analysis, image reconstruction, and clinical decision support</strong>. These
                applications are becoming table stakes in the industry, while operational AI for manufacturing, supply
                chain, and R&D remains largely untapped.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Operational Excellence Through AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    There is a notable lack of competitors heavily promoting AI applications in core operational areas:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Advanced AI for manufacturing process optimization specifically for short shelf-life isotopes
                    </li>
                    <li>
                      Sophisticated predictive maintenance for specialized equipment (cyclotrons, automated synthesis
                      units)
                    </li>
                    <li>Highly optimized, AI-driven just-in-time supply chains for radiopharmaceuticals</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground">
                    This represents a significant "blue ocean" opportunity for AAA to differentiate through operational
                    AI that ensures reliability, efficiency, and consistent delivery of time-sensitive products.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Market Development & Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    As nuclear medicine represents an immature market, there are significant opportunities to leverage
                    AI for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li>AI-powered tools for HCP education and support in an emerging field</li>
                    <li>Intelligent patient education and support systems</li>
                    <li>AI-driven identification of key opinion leaders and network mapping</li>
                    <li>Personalized engagement strategies for different stakeholder groups</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground">
                    These applications can accelerate market development and establish AAA as the leader in not just
                    products, but also knowledge and support in nuclear medicine.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advantages" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AdvantageCard
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="Novartis Backing"
                description="As a Novartis company, AAA can leverage more extensive, enterprise-grade AI/data science resources than smaller, independent competitors."
              />
              <AdvantageCard
                icon={<Shield className="h-6 w-6 text-primary" />}
                title="Established Infrastructure"
                description="Access to Novartis's capabilities in platforms, talent, governance, and MLOps provides a significant speed and scale advantage."
              />
              <AdvantageCard
                icon={<Microscope className="h-6 w-6 text-primary" />}
                title="Comprehensive Portfolio"
                description="AAA's diverse portfolio of diagnostic and therapeutic radiopharmaceuticals creates unique opportunities for end-to-end AI integration."
              />
              <AdvantageCard
                icon={<TrendingUp className="h-6 w-6 text-primary" />}
                title="First-Mover Opportunity"
                description="By focusing on operational AI now, AAA can establish a significant lead in manufacturing excellence and supply chain optimization."
              />
              <AdvantageCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Market Leadership Position"
                description="AAA's established position enables it to set industry standards for AI adoption in nuclear medicine operations."
              />
              <AdvantageCard
                icon={<Shield className="h-6 w-6 text-primary" />}
                title="Data Advantage"
                description="AAA's operational data across manufacturing, supply chain, and R&D provides a foundation for developing proprietary AI models."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function CompetitorCard({
  name,
  focus,
  description,
}: {
  name: string
  focus: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{focus}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function AdvantageCard({
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
