import { Card } from "@/components/ui/card"
import { type LucideIcon, ArrowRight } from "lucide-react"

interface PillarCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  number: string
}

export function PillarCard({ icon: Icon, title, description, gradient, number }: PillarCardProps) {
  return (
    <Card className="relative p-6 sm:p-8 bg-card hover:bg-accent/5 transition-all duration-500 border-border hover:border-accent/50 group overflow-hidden">
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Large number watermark */}
      <div className="absolute top-2 right-2 sm:top-6 sm:right-4 text-5xl sm:text-7xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors select-none">
        {number}
      </div>

      <div className="relative space-y-3 sm:space-y-4">
        {/* Icon with glow effect */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
          <div className="relative h-14 w-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Icon className="h-7 w-7 text-accent" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
          {description}
        </p>

        {/* Hover indicator */}
        {/* <div className="pt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Explore more</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div> */}
      </div>
    </Card>
  )
}
