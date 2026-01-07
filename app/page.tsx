"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import {
  Search,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cdd7d6] via-[#e8eceb] to-[#cdd7d6] dark:from-[#102542] dark:via-[#0d1e35] dark:to-[#102542]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f87060]/10 via-[#102542]/10 to-[#f87060]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(248,112,96,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#f87060]/20 text-[#102542] dark:text-[#cdd7d6] border-[#f87060]/40 hover:bg-[#f87060]/30">
              <Sparkles className="w-3 h-3 mr-1 text-[#f87060]" />
              Advanced by Bright Data and OpenAI
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[#102542] via-[#1a3a5f] to-[#102542] dark:from-white dark:via-[#cdd7d6] dark:to-white bg-clip-text text-transparent">
                Create Stunning
              </span>
              <span className="block bg-gradient-to-r from-[#f87060] via-[#ff8575] to-[#f87060] bg-clip-text text-transparent">
                SEO Reports
              </span>
              <span className="bg-gradient-to-r from-[#102542] via-[#1a3a5f] to-[#102542] dark:from-white dark:via-[#cdd7d6] dark:to-white bg-clip-text text-transparent">
                in Seconds
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Turn Bright Data&apos;s SERP Perplexity Scraper into powerful, data-rich SEO
              reports—generated instantly.
              <span className="text-foreground font-medium">
                {" "}Fast, effortless, and packed with insights.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Unauthenticated>
                <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                  <Button
                    size="lg"
                    className="text-base px-8 py-6 bg-[#f87060] hover:bg-[#ff6550] shadow-lg hover:shadow-xl hover:shadow-[#f87060]/30 transition-all duration-300 group border-0 text-white"
                  >
                    <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Download My Report
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SignInButton>
              </Unauthenticated>

              <Authenticated>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="text-base px-8 py-6 bg-[#f87060] hover:bg-[#ff6550] shadow-lg hover:shadow-xl hover:shadow-[#f87060]/30 transition-all duration-300 group border-0 text-white"
                  >
                    <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Generate My Report
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Authenticated>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Unlock Your SEO Superpower
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re just getting started or need advanced insights, we have the right plan for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Starter Plan Card */}
            <Card className="relative overflow-hidden border-2 border-[#102542]/30 dark:border-[#102542] hover:border-[#102542] dark:hover:border-[#f87060]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#102542]/10 group bg-gradient-to-br from-white/80 to-[#cdd7d6]/50 dark:from-[#102542]/50 dark:to-[#0d1e35]/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#102542]/10 to-[#cdd7d6]/20 rounded-full -translate-y-16 translate-x-16" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#102542] text-white">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <Badge className="bg-[#cdd7d6] text-[#102542] hover:bg-[#b8c4c3] dark:bg-[#102542] dark:text-[#cdd7d6]">
                    Starter
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Full SEO Reports</CardTitle>
                <CardDescription className="text-base">
                  Generate comprehensive SEO reports powered by Bright
                  Data&apos;s advanced SERP Perplexity Scraper technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Complete SERP analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Keyword ranking insights</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Competitor analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Export to PDF/CSV</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan Card */}
            <Card className="relative overflow-hidden border-2 border-[#f87060] dark:border-[#f87060]/80 hover:border-[#ff6550] dark:hover:border-[#f87060] transition-all duration-300 hover:shadow-2xl hover:shadow-[#f87060]/30 group bg-gradient-to-br from-white/90 via-[#cdd7d6]/30 to-white/90 dark:from-[#102542]/80 dark:via-[#1a3a5f]/80 dark:to-[#102542]/80">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f87060]/20 to-[#ff8575]/20 rounded-full -translate-y-16 translate-x-16" />
              <Badge className="absolute top-4 right-4 bg-[#f87060] text-white border-0">
                <Sparkles className="w-3 h-3 mr-1 text-[#cdd7d6]" />
                Popular
              </Badge>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#f87060] to-[#ff6550] text-white">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <Badge className="bg-[#f87060]/20 text-[#f87060] hover:bg-[#f87060]/30 dark:bg-[#f87060]/30 dark:text-white border-0">
                    Pro
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Chat With Your Report
                </CardTitle>
                <CardDescription className="text-base">
                  Everything in Starter, plus the power to have intelligent
                  conversations with your SEO data using GPT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>All Starter features</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">
                      AI-powered chat interface
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Ask questions about your data</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Get actionable recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Priority support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-[#cdd7d6]/30 via-white/50 to-[#cdd7d6]/30 dark:from-[#0d1e35]/50 dark:via-[#102542]/50 dark:to-[#0d1e35]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Honest, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Select a plan that fits today and adapts as your SEO needs grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Pricing */}
            <Card className="hover:shadow-lg hover:shadow-[#102542]/15 transition-all duration-300 border-[#102542]/30 dark:border-[#102542] bg-gradient-to-br from-white to-[#cdd7d6]/30 dark:from-[#102542]/80 dark:to-[#0d1e35]/80">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl mb-2">Starter</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#102542] dark:text-[#cdd7d6]">
                    $19
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">
                  Perfect for small businesses and individual marketers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Bright Data SERP scraping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">PDF & CSV exports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Email support</span>
                  </div>
                </div>
                <Link href="/pricing">
                  <Button
                    className="w-full mt-6 bg-[#102542] hover:bg-[#1a3a5f] border-0 text-white"
                    size="lg"
                  >
                    Subscribe to Starter
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Pricing */}
            <Card className="border-2 border-[#f87060] dark:border-[#f87060]/80 hover:border-[#ff6550] hover:shadow-xl hover:shadow-[#f87060]/25 transition-all duration-300 relative bg-gradient-to-br from-white via-[#cdd7d6]/20 to-white dark:from-[#102542]/80 dark:via-[#1a3a5f]/80 dark:to-[#102542]/80">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f87060] text-white border-0">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl mb-2">Pro</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#f87060]">
                    $49
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">
                  For agencies and power users who need AI insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Everything in Starter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">
                      AI Chat with reports
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Priority support</span>
                  </div>
                </div>
                <Link href="/pricing">
                  <Button
                    className="w-full mt-6 bg-[#f87060] hover:bg-[#ff6550] border-0 text-white"
                    size="lg"
                  >
                    Subscribe to Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Builders */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Powered by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              Built with enterprise-grade technology and security you can trust
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Globe className="w-6 h-6" />
                Bright Data
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Zap className="w-6 h-6" />
                Vercel
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <MessageSquare className="w-6 h-6" />
                OpenAI
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Shield className="w-6 h-6" />
                Clerk
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cdd7d6]/50 dark:bg-[#102542]/50 border border-[#102542]/30 dark:border-[#cdd7d6]/30">
              <Shield className="w-4 h-4 text-[#f87060]" />
              <span className="text-sm text-[#102542] dark:text-[#cdd7d6] font-medium">
                Enterprise-grade security & 99.9% uptime guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}