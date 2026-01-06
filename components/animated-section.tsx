"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  id: string
  children: ReactNode
  className?: string
  delay?: "delay-150" | "delay-300" | "delay-500"
  once?: boolean
}

export function AnimatedSection({
  id,
  children,
  className = "",
  delay,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null)

  // If IntersectionObserver doesn't exist, just render visible immediately.
  // This avoids calling setState inside the effect body.
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return typeof IntersectionObserver === "undefined"
  })

  useEffect(() => {
    if (isVisible) return // already visible; no need to observe

    const el = ref.current
    if (!el) return

    // If IO doesn't exist, we already started visible via initial state.
    if (typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        if (once) observer.unobserve(entry.target)
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isVisible, once])

  return (
    <section
      id={id}
      ref={(node) => {
        ref.current = node
      }}
      className={`transition-all duration-1000 ${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  )
}
