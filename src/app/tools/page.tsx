import Layout from "@/components/Layout";
import { Calculator, TrendingUp, BarChart3, Clock, Settings } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Pip Calculator",
    description: "Calculate pips, profit/loss, and position sizes instantly",
    category: "Calculators",
    features: ["Pip value calculation", "Position sizing", "Risk/reward ratio", "Swap calculation"]
  },
  {
    icon: BarChart3,
    title: "Technical Indicators",
    description: "Advanced technical indicators for market analysis",
    category: "Analysis Tools",
    features: ["50+ indicators", "Custom parameters", "Real-time calculations", "Multi-timeframe support"]
  },
  {
    icon: TrendingUp,
    title: "Profit Calculator",
    description: "Calculate potential profits and losses for your trades",
    category: "Calculators",
    features: ["Multiple scenarios", "Breakeven analysis", "Risk assessment", "Commission calculation"]
  },
  {
    icon: Clock,
    title: "Economic Calendar",
    description: "Stay updated with market-moving economic events",
    category: "Market Data",
    features: ["Real-time updates", "Impact analysis", "Historical data", "Custom filters"]
  },
  {
    icon: BarChart3,
    title: "Currency Converter",
    description: "Real-time currency conversion with live rates",
    category: "Market Data",
    features: ["Live rates", "Multiple currencies", "Historical charts", "Mobile app"]
  },
  {
    icon: Settings,
    title: "Trading Simulator",
    description: "Practice trading strategies with virtual money",
    category: "Educational",
    features: ["Virtual trading", "Real market data", "Performance tracking", "Strategy testing"]
  }
];

const featuredTools = [
  {
    name: "Advanced Charting",
    description: "Professional charting platform with 100+ indicators",
    image: "/api/placeholder/640x480"
  },
  {
    name: "Risk Manager",
    description: "Comprehensive risk management and position sizing tool",
    image: "/api/placeholder/640x480"
  },
  {
    name: "Economic Dashboard",
    description: "Real-time economic data and market sentiment analysis",
    image: "/api/placeholder/640x480"
  }
];

export default function ToolsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Trading Tools
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Professional-grade tools to enhance your trading analysis and decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Featured Tools
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredTools.map((tool, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <BarChart3 className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Tools */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                All Trading Tools
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground mb-1">{tool.category}</span>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {tool.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    
                    <div className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Use Tool
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Use Our Trading Tools?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Accurate Calculations
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Precise calculations for position sizing, risk management, and profit analysis.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Real-Time Data
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All tools use live market data for accurate and up-to-date analysis.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Free to Use
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All trading tools are completely free for all CompassForex clients.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Customizable
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Customize tools to match your trading style and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Enhance Your Trading
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Open an account and get instant access to all our professional trading tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Open Account
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Try Demo Tools
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
