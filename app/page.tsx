import Link from "next/link"
import { ArrowRight, Eye, Lightbulb, Target, Shield, Sparkles, Zap, type LucideIcon } from "lucide-react"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { PillarCard } from "@/components/pillar-card"
import { PrincipleCard } from "@/components/principle-card"
import { ProductCard } from "@/components/product-card"
import { FloatingDecorations } from "@/components/floating-decorations"
import { HeroParallax } from "@/components/hero-parallax"

export default function Home() {


  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <Header />

      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-accent/5 via-background to-accent/10 animate-gradient" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(104,186,180,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(104,186,180,0.06),transparent_50%)]" />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 relative">
        <HeroParallax className="container mx-auto max-w-5xl will-change-transform">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent animate-fade-in">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Democratizing Behavioral Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-[1.1] animate-slide-up px-4 sm:px-0">
              Shaping the <span className="text-accent inline-block">Future</span>{" "}
              of Consumer Behavior
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty animate-fade-in-delay px-4 sm:px-0">
              We believe that understanding human behavior is the foundation of meaningful, responsible, and effective
              brand experiences. Solouq democratizes behavioral insight through technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 animate-fade-in-delay-2 px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all w-full sm:w-auto sm:min-w-[180px] group shadow-lg shadow-accent/20"
                asChild
              >
                <Link href="https://optml.ai" target="_blank" rel="noopener noreferrer">
                  Learn About Our Featured Product: OPTML AI
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </HeroParallax>

        <div className="hidden sm:block absolute top-1/4 left-10 w-2 h-2 rounded-full bg-accent/30 animate-float" />
        <div className="hidden sm:block absolute top-1/3 right-20 w-3 h-3 rounded-full bg-accent/20 animate-float-delay" />
        <div className="hidden sm:block absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/25 animate-float-delay-2" />
      </section>

      {/* Vision Section */}
      <AnimatedSection
        id="vision"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted/30 to-transparent relative"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-balance group">
              Why Consumer Understanding{" "}
              <span className="text-accent inline-block">Needs to Change</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                Today, brands make decisions based on assumptions, surface-level metrics, and fragmented feedback. But
                human behavior is complex, contextual, and emotional.
              </p>
              <p>Solouq exists to close the gap between what people do and why they do it.</p>
              <p className="text-foreground font-medium pt-4 text-xl flex items-center gap-4 group">
                <Zap className="h-5 w-5 text-accent" />
                Our belief is simple: Better understanding leads to better decisions, for brands and consumers alike.
              </p>
            </div>
          </div>
        </div>
        <FloatingDecorations />
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection
        id="mission"
        className="py-12 sm:py-20 px-4 sm:px-6 relative"
        delay="delay-150"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight">Our Mission</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Our mission is to{" "}
              <span className="text-accent font-semibold relative group">
                democratize the understanding of human behavior through technology
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent/20" />
                <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 blur-xl transition-all duration-300" />
              </span>
              .
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              We build tools that transform observation into insight, and insight into action, enabling teams of all
              sizes to design experiences grounded in real human response.
            </p>
          </div>
        </div>
        <FloatingDecorations variant="alt" />
      </AnimatedSection>

      {/* What We Build Section */}
      <AnimatedSection
        id="build"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted/20 to-transparent relative"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-center mb-8 sm:mb-16">
            What We <span className="text-accent">Build</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <PillarCard
              icon={Eye as LucideIcon}
              title="Behavioral Intelligence"
              description="Understanding how people perceive, interpret, and react to digital experiences."
              gradient="from-accent/20 via-accent/5 to-transparent"
              number="01"
            />
            <PillarCard
              icon={Lightbulb as LucideIcon}
              title="Insight Automation"
              description="Turning complex behavioral signals into clear, actionable guidance."
              gradient="from-accent/15 via-accent/5 to-transparent"
              number="02"
            />
            <PillarCard
              icon={Target as LucideIcon}
              title="Design & Decision Support"
              description="Helping teams validate, refine, and optimize experiences before they go live."
              gradient="from-accent/20 via-accent/5 to-transparent"
              number="03"
            />
            <PillarCard
              icon={Shield as LucideIcon}
              title="Ethical, Human-Centered AI"
              description="Technology that augments human judgment, not replaces it."
              gradient="from-accent/15 via-accent/5 to-transparent"
              number="04"
            />
          </div>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50 hover:border-accent/30 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              </div>
              <div className="space-y-2 flex-1">
                <h4 className="text-base sm:text-lg font-semibold">These pillars work together</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Each component of our approach integrates to create a comprehensive system for understanding and
                  acting on human behavior, from initial observation to final implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Product Ecosystem Section */}
      <AnimatedSection
        id="ecosystem"
        className="py-12 sm:py-20 px-4 sm:px-6 relative"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight">
                The Solouq <span className="text-accent inline-block">Ecosystem</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Solouq is the vision and research layer. Our products are how that vision becomes real.
              </p>
            </div>

            <ProductCard
              badge="Featured Product"
              title="OPTML AI"
              description="OPTML AI is Solouq's first flagship product, a practical application of our behavioral intelligence philosophy."
              details="OPTML AI helps teams evaluate and improve digital experiences by analyzing how real people are likely to perceive, understand, and respond to visual content."
              href="https://optml.ai"
              buttonText="Visit OPTML AI"
            />

            <div className="bg-muted/50 p-6 sm:p-8 rounded-lg border border-border">
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Solouq is the parent company and research foundation behind OPTML AI.
                </span>{" "}
                OPTML AI is one of several products through which Solouq brings behavioral intelligence into real-world
                workflows. We build the research, tools, and products that make understanding human behavior accessible
                to everyone.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-sm text-muted-foreground/60 font-medium">Legacy Products</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>

              <div className="space-y-4 opacity-50 hover:opacity-70 transition-opacity duration-300">
                <ProductCard
                  badge="Legacy"
                  title="ContOpt"
                  description="Our original content optimization platform that helped teams improve digital experiences through behavioral insights."
                  details="ContOpt pioneered our approach to behavioral intelligence, laying the groundwork for OPTML AI's advanced capabilities."
                  href="https://platform.contopt.ai"
                  buttonText="Access Platform"
                  legacy
                />
              </div>
            </div>
          </div>
        </div>
        <FloatingDecorations variant="minimal" />
      </AnimatedSection>

      {/* Principles Section */}
      <AnimatedSection
        id="principles"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted/20 to-transparent relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8 sm:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-center">
              Our <span className="text-accent">Principles</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <PrincipleCard
                icon={Eye as LucideIcon}
                title="Human behavior is nuanced"
                subtitle="not binary"
                description="We embrace complexity over simplification, understanding that behavior exists on a spectrum."
                color="from-accent/20 to-accent/5"
                index={0}
              />
              <PrincipleCard
                icon={Sparkles as LucideIcon}
                title="Insight should be accessible"
                subtitle="not exclusive"
                description="Powerful tools shouldn't be locked behind enterprise budgets or technical barriers."
                color="from-accent/15 to-accent/5"
                index={1}
              />
              <PrincipleCard
                icon={Lightbulb as LucideIcon}
                title="Technology supports decisions"
                subtitle="not shortcuts"
                description="We build tools that enhance human judgment, not replace critical thinking."
                color="from-accent/20 to-accent/5"
                index={2}
              />
              <PrincipleCard
                icon={Shield as LucideIcon}
                title="Ethics and transparency"
                subtitle="are non-negotiable"
                description="Responsible innovation means being clear about how our technology works and its limitations."
                color="from-accent/15 to-accent/5"
                index={3}
              />
              <PrincipleCard
                icon={Target as LucideIcon}
                title="Design is a responsibility"
                subtitle="not just aesthetics"
                description="Every design choice impacts people. We take that impact seriously."
                color="from-accent/20 to-accent/5"
                index={4}
              />
              <PrincipleCard
                icon={Zap as LucideIcon}
                title="Better understanding"
                subtitle="leads to better outcomes"
                description="When brands truly understand their users, everyone wins, brands and consumers alike."
                color="from-accent/15 to-accent/5"
                index={5}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
