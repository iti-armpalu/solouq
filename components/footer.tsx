"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6 bg-muted/20 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-50" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4 group">
            <Link href="/" className="flex items-center group">
              <Image
                src="/solouq-logo.webp"
                alt="Solouq"
                width={120}
                height={35}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shaping the future of consumer behavior through behavioral intelligence.
            </p>
          </div>
          <div className="group">
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:translate-x-2 transition-transform duration-200">
                <button
                  onClick={() => handleSmoothScroll("vision")}
                  className="hover:text-accent transition-colors inline-flex items-center hover:gap-2 group/link"
                >
                  <span className="w-0 h-px bg-accent group-hover/link:w-4 transition-all duration-200" />
                  About Solouq
                </button>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-200">
                <button
                  onClick={() => handleSmoothScroll("mission")}
                  className="hover:text-accent transition-colors inline-flex items-center hover:gap-2 group/link"
                >
                  <span className="w-0 h-px bg-accent group-hover/link:w-4 transition-all duration-200" />
                  Mission
                </button>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-200">
                <button
                  onClick={() => handleSmoothScroll("principles")}
                  className="hover:text-accent transition-colors inline-flex items-center hover:gap-2 group/link"
                >
                  <span className="w-0 h-px bg-accent group-hover/link:w-4 transition-all duration-200" />
                  Principles
                </button>
              </li>
            </ul>
          </div>
          <div className="group">
            <h4 className="font-medium mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:translate-x-2 transition-transform duration-200">
                <Link
                  href="https://optml.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center hover:gap-2 group/link"
                >
                  <span className="w-0 h-px bg-accent group-hover/link:w-4 transition-all duration-200" />
                  OPTML AI
                </Link>
              </li>
            </ul>
          </div>
          <div className="group">
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:translate-x-2 transition-transform duration-200">
                <Link
                  href="/privacy"
                  className="hover:text-accent transition-colors inline-flex items-center hover:gap-2 group/link"
                >
                  <span className="w-0 h-px bg-accent group-hover/link:w-4 transition-all duration-200" />
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-200">
                <Link
                  href="/legal"
                  className="hover:text-accent transition-colors inline-flex items-center hover:gap-2 group/link"
                >
                  <span className="w-0 h-px bg-accent group-hover/link:w-4 transition-all duration-200" />
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <span className="inline-block">
            © {new Date().getFullYear()} Solouq. All rights reserved.
          </span>
        </div>
      </div>
      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent opacity-50" />
    </footer>
  )
}
