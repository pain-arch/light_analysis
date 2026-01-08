import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div>
      {/* Pricing Section */}
      <section className="py-20 sm:py-32 bg-linear-to-r from-[#cdd7d6]/30 via-white/50 to-[#cdd7d6]/30 dark:from-[#0d1e35]/50 dark:via-[#102542]/50 dark:to-[#0d1e35]/50">
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
            <Card className="hover:shadow-lg hover:shadow-[#102542]/15 transition-all duration-300 border-[#102542]/30 dark:border-[#102542] bg-linear-to-br from-white to-[#cdd7d6]/30 dark:from-[#102542]/80 dark:to-[#0d1e35]/80">
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
            <Card className="border-2 border-[#f87060] dark:border-[#f87060]/80 hover:border-[#ff6550] hover:shadow-xl hover:shadow-[#f87060]/25 transition-all duration-300 relative bg-linear-to-br from-white via-[#cdd7d6]/20 to-white dark:from-[#102542]/80 dark:via-[#1a3a5f]/80 dark:to-[#102542]/80">
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
                    <CheckCircle className="w-4 h-4 text-green-600"/>
                    <span>AI chat itegra</span>
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
    </div>
  );
}
