"use client"

import type React from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Extract section ID from href (remove # if present)
    const sectionId = href.startsWith("#") ? href.substring(1) : href
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
    <a
      href={href}
      onClick={handleClick}
      className="text-sm text-muted-foreground hover:text-accent transition-colors relative group cursor-pointer"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
    </a>
  )
}
