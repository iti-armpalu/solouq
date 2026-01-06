"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Legal() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("team@solouq.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Solouq&apos;s services, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily access and use Solouq&apos;s services for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license
              you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software contained on Solouq&apos;s services</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality on Solouq&apos;s services, including but not limited to text,
              graphics, logos, icons, images, audio clips, and software, are the exclusive property of Solouq or its
              licensors and are protected by international copyright, trademark, patent, trade secret, and other
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account. You are responsible for safeguarding the password and for all activities that
              occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You may not use our services:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>
                To transmit or procure the sending of any advertising or promotional material without our prior written
                consent
              </li>
              <li>
                To impersonate or attempt to impersonate Solouq, a Solouq employee, another user, or any other person or
                entity
              </li>
              <li>
                In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent,
                or harmful
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee that our services will be available at all times or that access will be uninterrupted
              or error-free. We may suspend, withdraw, or restrict the availability of all or any part of our services
              for business and operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Solouq, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Solouq and its licensees and licensors from and against
              any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or
              relating to your violation of these Terms of Service or your use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which
              Solouq operates, without regard to its conflict of law provisions. Our failure to enforce any right or
              provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is
              material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-accent hover:underline transition-colors"
              >
                team@solouq.com
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              {copied && <span className="text-sm text-accent ml-2">(Copied!)</span>}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
