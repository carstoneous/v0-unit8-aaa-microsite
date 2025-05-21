import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Factory, TruckIcon, Microscope, FileText, Database } from "lucide-react"

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-white dark:bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Proven Success in Regulated Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our case studies demonstrating successful AI implementations in pharmaceutical, manufacturing, and
            highly regulated environments.
          </p>
        </div>

        <Tabs defaultValue="manufacturing" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
            <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
            <TabsTrigger value="research">R&D</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="platforms">Data Platforms</TabsTrigger>
          </TabsList>

          <TabsContent value="manufacturing" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                icon={<Factory className="h-6 w-6 text-primary" />}
                title="Production Line Optimization"
                client="Swiss Pharmaceutical Company"
                description="Increased production capacity by 11% through advanced analytics, resulting in 200M extra tablets annually and over CHF 40M in additional revenue."
                impact="15x ROI"
                caseNumber="044 & 124"
              />
              <CaseStudyCard
                icon={<Factory className="h-6 w-6 text-primary" />}
                title="Production Line Monitoring"
                client="Swiss Chemical Company"
                description="Improved production line efficiency with real-time KPI monitoring and automated alerts, achieving 8% OEE increase and 15% speed improvement."
                impact="8x ROI"
                caseNumber="063"
              />
              <CaseStudyCard
                icon={<Factory className="h-6 w-6 text-primary" />}
                title="Predictive Maintenance"
                client="Swiss Energy Company"
                description="Implemented predictive ML models for early anomaly detection in critical equipment, enabling proactive maintenance planning and reducing downtime."
                impact="Significant downtime reduction"
                caseNumber="087"
              />
            </div>
          </TabsContent>

          <TabsContent value="supply-chain" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                icon={<TruckIcon className="h-6 w-6 text-primary" />}
                title="Supply Chain Demand Forecasting"
                client="Medical Equipment Manufacturer"
                description="Built forecasting models using Darts library, improving forecast accuracy by 10-60% and enabling better procurement and manufacturing planning."
                impact="Optimized inventory and production"
                caseNumber="092"
              />
              <CaseStudyCard
                icon={<TruckIcon className="h-6 w-6 text-primary" />}
                title="Inventory Optimization"
                client="Swiss Raw Material Vendor"
                description="Implemented forecasting models and warehouse logistics optimization, reducing excess inventory while maintaining service levels."
                impact="Reduced inventory costs"
                caseNumber="093"
              />
              <CaseStudyCard
                icon={<TruckIcon className="h-6 w-6 text-primary" />}
                title="Supply Chain Control Tower"
                client="International Reseller"
                description="Developed an application providing visibility across the supply chain with an alerting system for low stock levels."
                impact="50% reduction in out-of-stock levels"
                caseNumber="096"
              />
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                icon={<Microscope className="h-6 w-6 text-primary" />}
                title="Formula Optimization"
                client="Swiss Chemical Company"
                description="Created deep learning algorithms to optimize existing formulas for multiple criteria, with AI-recommended formulations outperforming originals in market tests."
                impact="Improved market performance"
                caseNumber="058"
              />
              <CaseStudyCard
                icon={<Microscope className="h-6 w-6 text-primary" />}
                title="Molecular Reformulation"
                client="Swiss Flavor & Fragrance Company"
                description="Developed optimization algorithms to find new ingredient sets at the molecular level while preserving properties, achieving significant cost reduction."
                impact="Up to 50% cost reduction"
                caseNumber="059 & 121"
              />
              <CaseStudyCard
                icon={<Microscope className="h-6 w-6 text-primary" />}
                title="Product Property Prediction"
                client="Swiss Chemical Producer"
                description="Trained neural networks to predict end product properties, suggest new formulas, and recommend improvements, significantly reducing development time and waste."
                impact="Accelerated R&D cycles"
                caseNumber="065 & 122"
              />
            </div>
          </TabsContent>

          <TabsContent value="regulatory" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Regulatory Documentation Automation"
                client="Multinational Pharmaceutical Company"
                description="Implemented data automation solution for regulatory reporting, automating document generation and reducing manual data preparation and validation."
                impact="Multi-million annual savings"
                caseNumber="023"
              />
              <CaseStudyCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Document Analysis with GenAI"
                client="Major Swiss Insurance Company"
                description="Deployed GenAI solution for semantic analysis of complex regulatory documents across multiple languages and formats, with dashboard for compliance monitoring."
                impact="$70M risk exposure eliminated"
                caseNumber="134"
              />
              <CaseStudyCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Automated Risk Assessment"
                client="Financial Institution"
                description="Created automated compliance system with interactive due diligence module and intelligent scheduling for reviews based on risk profiles."
                impact="97% improvement in audit ratings"
                caseNumber="135"
              />
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CaseStudyCard
                icon={<Database className="h-6 w-6 text-primary" />}
                title="AWS Data & Analytics Platform"
                client="Multinational Pharmaceutical Company"
                description="Built GxP-compliant data science platform on AWS, integrating diverse data sources while ensuring regulatory compliance."
                impact="5 use cases live in first 9 months"
                caseNumber="071 & 073"
              />
              <CaseStudyCard
                icon={<Database className="h-6 w-6 text-primary" />}
                title="Secure GenAI Platform"
                client="Major Swiss Bank"
                description="Implemented secure GenAI platform with comprehensive approvals, documentation, and support organization, ensuring compliance and data protection."
                impact="Deployed to 6,000+ users"
                caseNumber="016"
              />
              <CaseStudyCard
                icon={<Database className="h-6 w-6 text-primary" />}
                title="MLOps Implementation"
                client="Swiss Pharmaceutical Company"
                description="Established MLOps process, framework, and tech stack for deploying ML models in production within a regulated pharmaceutical environment."
                impact="Standardized ML deployment process"
                caseNumber="077"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg">
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({
  icon,
  title,
  client,
  description,
  impact,
  caseNumber,
}: {
  icon: React.ReactNode
  title: string
  client: string
  description: string
  impact: string
  caseNumber: string
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-start space-y-0 gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-1">{client}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-sm font-medium">Impact:</span>
            <span className="text-sm ml-2 text-muted-foreground">{impact}</span>
          </div>
          <div className="text-xs text-muted-foreground">Case #{caseNumber}</div>
        </div>
      </CardFooter>
    </Card>
  )
}
