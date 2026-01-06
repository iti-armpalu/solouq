"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { NavLink } from "@/components/nav-link"
import { Menu, X, LogIn } from "lucide-react"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled ? "border-border shadow-lg" : "border-border"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/solouq-logo.webp"
              alt="Solouq"
              width={140}
              height={40}
              className="h-6 sm:h-8 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink sectionId="vision">Vision</NavLink>
            <NavLink sectionId="mission">Mission</NavLink>
            <NavLink sectionId="build">What We Build</NavLink>
            <NavLink sectionId="ecosystem">Products</NavLink>
            <NavLink sectionId="principles">Principles</NavLink>
            <a
              href="https://platform.contopt.ai/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <LogIn className="h-4 w-4" />
              Client Login to CCO
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Image src="/solouq-logo.webp" alt="Solouq" width={120} height={34} className="h-7 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-accent transition-colors rounded-lg hover:bg-accent/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <a
                href="#vision"
                onClick={(e) => handleSmoothScroll(e, "vision")}
                className="group px-4 py-3 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium cursor-pointer"
              >
                <span className="flex items-center justify-between">
                  Vision
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </a>
              <a
                href="#mission"
                onClick={(e) => handleSmoothScroll(e, "mission")}
                className="group px-4 py-3 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium cursor-pointer"
              >
                <span className="flex items-center justify-between">
                  Mission
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </a>
              <a
                href="#ecosystem"
                onClick={(e) => handleSmoothScroll(e, "ecosystem")}
                className="group px-4 py-3 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium cursor-pointer"
              >
                <span className="flex items-center justify-between">
                  Products
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </a>
              <a
                href="#principles"
                onClick={(e) => handleSmoothScroll(e, "principles")}
                className="group px-4 py-3 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium cursor-pointer"
              >
                <span className="flex items-center justify-between">
                  Principles
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </a>
              <a
                href="#build"
                onClick={(e) => handleSmoothScroll(e, "build")}
                className="group px-4 py-3 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium cursor-pointer"
              >
                <span className="flex items-center justify-between">
                  What We Build
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </a>
            </div>
          </nav>

          <div className="p-6 border-t border-border space-y-4">
            <a
              href="https://platform.contopt.ai/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={handleLinkClick}
            >
              <LogIn className="h-4 w-4" />
              Client Login to CCO
            </a>
            <div className="text-sm text-muted-foreground text-center">
              <p>Building the future of behavioral intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
