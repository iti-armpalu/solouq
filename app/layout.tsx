import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solouq — Shaping the Future of Consumer Behavior",
  description:
    "We believe that understanding human behavior is the foundation of meaningful, responsible, and effective brand experiences. Solouq democratizes behavioral insight through technology.",
    icons: {
      icon: [
        { url: "/icon.png", sizes: "64x64", type: "image/png" },
        { url: "/favicon.ico" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable}`}>
        {children}
        {/* Footer */}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
