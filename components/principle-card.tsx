import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface PrincipleCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  color: string
  index: number
}

export function PrincipleCard({ icon: Icon, title, subtitle, description, color, index }: PrincipleCardProps) {
  return (
    <Card className="relative p-6 sm:p-8 bg-card hover:bg-accent/5 transition-all duration-500 border-border hover:border-accent/50 group overflow-hidden hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative space-y-3 sm:space-y-4">
        {/* Icon with pulse effect */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent/30 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
          <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-accent/20">
            <Icon className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-base sm:text-lg text-accent/70 font-medium italic mt-1">{subtitle}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
          {description}
        </p>

        {/* Number indicator */}
        <div className="absolute top-0 right-6 sm:right-8 text-4xl sm:text-6xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors select-none">
          0{index + 1}
        </div>
      </div>

    </Card>
  )
}
