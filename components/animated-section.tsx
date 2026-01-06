"use client"

import type { ReactNode } from "react"

interface AnimatedSectionProps {
  id: string
  children: ReactNode
  className?: string
  isVisible: boolean
  delay?: "delay-150" | "delay-300" | "delay-500"
}

export function AnimatedSection({ id, children, className = "", isVisible, delay = "" }: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={`transition-all duration-1000 ${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  )
}
