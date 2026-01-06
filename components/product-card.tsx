import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  badge?: string
  title: string
  description: string
  details: string
  href: string
  buttonText: string
  legacy?: boolean
}

export function ProductCard({ badge, title, description, details, href, buttonText, legacy = false, }: ProductCardProps) {
  return (
    <Card
      className={`p-6 sm:p-10 bg-gradient-to-br from-card to-accent/5 border-2 transition-all duration-500 relative overflow-hidden group ${legacy
          ? "border-muted/30 hover:border-muted/50 hover:shadow-lg"
          : "border-accent/30 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20"
        }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${legacy ? "from-muted/10 to-transparent" : "from-accent/5 to-transparent"
          }`}
      />
      <div
        className={`absolute bottom-10 left-10 w-3 h-3 rounded-full animate-float ${legacy ? "bg-muted/20" : "bg-accent/30"
          }`}
      />
      <div className="relative space-y-4 sm:space-y-6">
        {badge && (
          <div className="flex items-center gap-3">
            <div
              className={`h-3 w-3 rounded-full ${legacy ? "bg-muted shadow-none" : "bg-accent shadow-lg shadow-accent/50"
                }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${legacy ? "text-muted-foreground" : "text-accent"
                }`}
            >
              {badge}
            </span>
          </div>
        )}
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold transition-colors ${legacy ? "text-muted-foreground group-hover:text-foreground/80" : ""
            }`}
        >
          {title}
        </h3>
        <p
          className={`text-lg sm:text-xl leading-relaxed transition-colors ${legacy
              ? "text-muted-foreground/80 group-hover:text-muted-foreground"
              : "text-muted-foreground"
            }`}
        >
          {description}
        </p>
        <p
          className={`leading-relaxed transition-colors ${legacy
              ? "text-muted-foreground/70 group-hover:text-muted-foreground"
              : "text-muted-foreground"
            }`}
        >
          {details}
        </p>
        <Button
          className={`hover:scale-105 transition-all mt-4 group ${legacy
              ? "bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-md"
              : "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30"
            }`}
          asChild
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}
