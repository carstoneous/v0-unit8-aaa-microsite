import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Microscope, TruckIcon, FileText, Users, Beaker } from "lucide-react"

export default function Opportunities() {
  return (
    <section id="opportunities" className="section-padding bg-white dark:bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">AI Opportunities for AAA</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how artificial intelligence can address your unique challenges in nuclear medicine and create
            competitive advantages.
          </p>
        </div>

        <Tabs defaultValue="manufacturing" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
            <TabsTrigger value="research">R&D</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="clinical">Clinical Trials</TabsTrigger>
            <TabsTrigger value="customer">Customer Support</TabsTrigger>
          </TabsList>

          <TabsContent value="manufacturing" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <OpportunityCard
                icon={<Activity className="h-6 w-6 text-primary" />}
                title="Predictive Maintenance"
                description="Prevent costly cyclotron and synthesis unit downtime with AI-powered predictive maintenance, ensuring continuous production of short-lived radiopharmaceuticals."
                priority="Tier 1"
              />
              <OpportunityCard
                icon={<Beaker className="h-6 w-6 text-primary" />}
                title="Real-Time Process Optimization"
                description="Achieve 'Golden Batch' consistency and maximize yield through real-time monitoring and AI-driven process adjustments for rapid production cycles."
                priority="Tier 1"
              />
              <OpportunityCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="AI-Automated Quality Control"
                description="Accelerate batch release for time-sensitive products with AI-powered quality control systems that ensure compliance while reducing manual review time."
                priority="Tier 1"
              />
            </div>
          </TabsContent>

          <TabsContent value="supply-chain" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <OpportunityCard
                icon={<Activity className="h-6 w-6 text-primary" />}
                title="Hyper-Accurate Demand Forecasting"
                description="Minimize waste of rapidly decaying isotopes and prevent stockouts with AI-powered demand forecasting that accounts for complex variables specific to radiopharmaceuticals."
                priority="Tier 1"
              />
              <OpportunityCard
                icon={<TruckIcon className="h-6 w-6 text-primary" />}
                title="Optimized & Compliant Logistics"
                description="Ensure timely delivery of short shelf-life radioactive materials with AI-driven route optimization and real-time tracking that accounts for regulatory requirements."
                priority="Tier 1"
              />
              <OpportunityCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Just-in-Time Inventory Management"
                description="Balance inventory levels with AI algorithms that optimize production schedules and delivery timing to minimize decay and maximize usable product."
                priority="Tier 1"
              />
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <OpportunityCard
                icon={<Microscope className="h-6 w-6 text-primary" />}
                title="Novel Radiopharmaceutical Discovery"
                description="Accelerate target identification and in silico molecular design with GenAI, focusing on rapid synthesis and high yield for new radiopharmaceuticals."
                priority="Tier 2"
              />
              <OpportunityCard
                icon={<Beaker className="h-6 w-6 text-primary" />}
                title="Radiolabeling Optimization"
                description="Predict optimal synthesis conditions for efficient, fast labeling using machine learning models trained on historical synthesis data."
                priority="Tier 2"
              />
              <OpportunityCard
                icon={<Activity className="h-6 w-6 text-primary" />}
                title="Preclinical Data Analysis"
                description="Enhance biodistribution studies with AI-powered image analysis for tumor uptake and therapeutic effect assessment, accelerating the path to clinical trials."
                priority="Tier 2"
              />
            </div>
          </TabsContent>

          <TabsContent value="regulatory" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <OpportunityCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="GenAI for Regulatory Documentation"
                description="Streamline creation, assembly, and management of complex submissions and reports with GenAI tools that ensure compliance and consistency."
                priority="Tier 2"
              />
              <OpportunityCard
                icon={<Activity className="h-6 w-6 text-primary" />}
                title="AI for Compliance Checks"
                description="Automatically verify regulatory compliance across documents and processes, identifying potential issues before submission to authorities."
                priority="Tier 2"
              />
              <OpportunityCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Automated Regulatory Intelligence"
                description="Stay ahead of changing regulations with AI that monitors global regulatory changes relevant to radiopharmaceuticals and nuclear medicine."
                priority="Tier 2"
              />
            </div>
          </TabsContent>

          <TabsContent value="clinical" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <OpportunityCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Personalized Dosimetry"
                description="Optimize efficacy and safety for radiotherapies with AI-driven personalized dosing based on patient-specific factors and real-time response."
                priority="Tier 2"
              />
              <OpportunityCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="AI for Patient Recruitment"
                description="Accelerate clinical trials with AI-powered patient matching and site selection optimized for radiopharmaceutical studies."
                priority="Tier 3"
              />
              <OpportunityCard
                icon={<Activity className="h-6 w-6 text-primary" />}
                title="Adaptive Trial Design"
                description="Implement AI-driven adaptive trial designs that optimize protocols based on emerging data, particularly valuable for novel radiotherapeutics."
                priority="Tier 3"
              />
            </div>
          </TabsContent>

          <TabsContent value="customer" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <OpportunityCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="AI Chatbots for Patient FAQs"
                description="Provide 24/7 information on procedures, safety, and preparation with AI chatbots designed specifically for nuclear medicine patients."
                priority="Tier 3"
              />
              <OpportunityCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="AI-Powered Knowledge Base for HCPs"
                description="Enable rapid access to product information, administration guidelines, and safety data for healthcare professionals through an intelligent search system."
                priority="Tier 3"
              />
              <OpportunityCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="AI for Market Development"
                description="Identify key opinion leaders and map professional networks in the immature nuclear medicine market to accelerate adoption and education."
                priority="Tier 3"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function OpportunityCard({
  icon,
  title,
  description,
  priority,
}: {
  icon: React.ReactNode
  title: string
  description: string
  priority: string
}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start space-y-0 gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                priority === "Tier 1"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : priority === "Tier 2"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {priority}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
