import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Transforming Nuclear Medicine</span>
          <span className="block mt-2 gradient-text">With Advanced AI Solutions</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Leveraging artificial intelligence to enhance operational excellence, accelerate innovation, and improve
          patient outcomes in radiopharmaceutical development and delivery.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Explore AI Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Schedule a Discovery Call
          </Button>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
      </div>
    </div>
  )
}
