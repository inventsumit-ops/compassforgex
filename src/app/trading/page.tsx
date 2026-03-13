import Layout from "@/components/Layout";
import { TrendingUp, BarChart3, Clock, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Trading",
    description: "Execute trades instantly with real-time pricing and market data"
  },
  {
    icon: BarChart3,
    title: "Advanced Charts",
    description: "Professional charting tools with 50+ technical indicators"
  },
  {
    icon: Clock,
    title: "24/5 Market Access",
    description: "Trade forex markets 24 hours a day, 5 days a week"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in risk management tools to protect your capital"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-millisecond execution with no requotes or delays"
  }
];

const platforms = [
  {
    name: "Web Platform",
    description: "Trade directly from your browser with no downloads required",
    features: ["No installation", "Cross-platform", "Auto-updates", "Full functionality"]
  },
  {
    name: "Mobile App",
    description: "Trade on the go with our iOS and Android apps",
    features: ["Push notifications", "Biometric login", "Offline charts", "One-touch trading"]
  },
  {
    name: "MT4/MT5",
    description: "Industry-standard MetaTrader platforms for advanced traders",
    features: ["Expert advisors", "Custom indicators", "Algorithmic trading", "VPS hosting"]
  }
];

export default function TradingPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Professional Trading Platform
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Experience forex trading with cutting-edge technology, lightning-fast execution, and comprehensive tools.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Choose Our Trading Platform?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-lg border border-border bg-card">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Trading Platforms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {platform.description}
                    </p>
                    <ul className="space-y-2">
                      {platform.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Trading Today
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of traders who trust CompassForex for their forex trading needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Open Live Account
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Try Demo Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
