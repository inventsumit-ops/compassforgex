import Layout from "@/components/Layout";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, BookOpen, BarChart3, Users, Globe } from "lucide-react";

const stats = [
  { value: "$6.6T", label: "Daily Forex Volume" },
  { value: "50+", label: "Currency Pairs" },
  { value: "24/5", label: "Market Hours" },
  { value: "10K+", label: "Active Traders" },
];

const features = [
  { icon: TrendingUp, title: "Advanced Trading", desc: "Access powerful trading tools and real-time market data to make informed decisions." },
  { icon: Shield, title: "Secure & Regulated", desc: "Trade with confidence on a fully regulated and secure platform." },
  { icon: BookOpen, title: "Education Hub", desc: "Comprehensive learning resources from beginner to advanced levels." },
  { icon: BarChart3, title: "Market Analysis", desc: "Daily technical and fundamental analysis from expert analysts." },
  { icon: Users, title: "Community", desc: "Join thousands of traders sharing insights and strategies." },
  { icon: Globe, title: "Global Markets", desc: "Trade major, minor, and exotic currency pairs from around the world." },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Navigate the Forex <br />Markets with Confidence
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Professional-grade tools, real-time analysis, and expert education — everything you need to trade the world's largest financial market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link href="/accounts" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Open Account <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/academy" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary animate-count-up">{s.value}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Why Choose CompassForex?</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Everything you need to succeed in forex trading, all in one platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-gradient border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                <f.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Trading?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Join thousands of traders who trust CompassForex for professional forex trading.
          </p>
          <Link href="/accounts" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
