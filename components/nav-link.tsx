"use client"

import type React from "react"

interface NavLinkProps {
  sectionId: string
  children: React.ReactNode
  onClick?: () => void
}

export function NavLink({ sectionId, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const element = document.getElementById(sectionId)

    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // Call additional onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="text-sm text-muted-foreground hover:text-accent transition-colors relative group cursor-pointer bg-transparent border-none"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
    </button>
  )
}
