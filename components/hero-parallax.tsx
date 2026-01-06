"use client"

import { useEffect, useRef } from "react"

type HeroParallaxProps = {
  children: React.ReactNode
  className?: string
  /** multiplier for translateY */
  strength?: number
  /** scroll distance at which opacity reaches 0 */
  fadeDistance?: number
}

export function HeroParallax({
  children,
  className,
  strength = 0.3,
  fadeDistance = 500,
}: HeroParallaxProps) {
  const elRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const update = () => {
      rafRef.current = null
      if (!el) return

      if (reduceMotion) {
        el.style.transform = ""
        el.style.opacity = "1"
        return
      }

      const y = window.scrollY || 0
      el.style.transform = `translate3d(0, ${y * strength}px, 0)`
      el.style.opacity = String(Math.max(1 - y / fadeDistance, 0))
    }

    const onScroll = () => {
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [strength, fadeDistance])

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  )
}
