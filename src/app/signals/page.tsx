import Layout from "@/components/Layout";
import { TrendingUp, TrendingDown, Bell, Clock, Target } from "lucide-react";

const activeSignals = [
  {
    pair: "EUR/USD",
    type: "Buy",
    entry: "1.0850",
    stopLoss: "1.0800",
    takeProfit: "1.0950",
    riskReward: "1:2",
    confidence: "High",
    time: "10 min ago",
    reason: "Break above resistance with strong momentum"
  },
  {
    pair: "GBP/USD",
    type: "Sell",
    entry: "1.2650",
    stopLoss: "1.2750",
    takeProfit: "1.2500",
    riskReward: "1:1.5",
    confidence: "Medium",
    time: "25 min ago",
    reason: "Bearish divergence forming on H4 chart"
  },
  {
    pair: "USD/JPY",
    type: "Buy",
    entry: "147.50",
    stopLoss: "146.80",
    takeProfit: "148.50",
    riskReward: "1:2",
    confidence: "High",
    time: "1 hour ago",
    reason: "Support level holding with bullish engulfing"
  },
  {
    pair: "USD/CHF",
    type: "Sell",
    entry: "0.8750",
    stopLoss: "0.8850",
    takeProfit: "0.8600",
    riskReward: "1:1.5",
    confidence: "Medium",
    time: "2 hours ago",
    reason: "Resistance rejection with bearish pin bar"
  }
];

const signalStats = [
  { label: "Active Signals", value: "4" },
  { label: "Success Rate", value: "72%" },
  { label: "Avg. Return", value: "+125 pips" },
  { label: "This Month", value: "+850 pips" }
];

const features = [
  {
    icon: Target,
    title: "Clear Entry/Exit Points",
    description: "Precise entry, stop loss, and take profit levels for each signal"
  },
  {
    icon: TrendingUp,
    title: "Technical Analysis",
    description: "Signals based on advanced technical analysis and chart patterns"
  },
  {
    icon: Clock,
    title: "Real-Time Alerts",
    description: "Instant notifications when new signals are generated"
  },
  {
    icon: Bell,
    title: "Risk Management",
    description: "Built-in risk/reward ratios and position sizing recommendations"
  }
];

export default function SignalsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Trading Signals
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Professional trading signals based on technical analysis and market research.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {signalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Signals */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Active Trading Signals
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeSignals.map((signal, index) => (
                  <div key={index} className={`bg-card border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow ${
                    signal.type === 'Buy' ? 'border-green-500' : 'border-red-500'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          signal.type === 'Buy' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {signal.type}
                        </span>
                        <span className="font-display text-lg font-bold text-foreground">
                          {signal.pair}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          signal.confidence === 'High' ? 'bg-green-100 text-green-800' :
                          signal.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {signal.confidence}
                        </span>
                        <span className="text-xs text-muted-foreground">{signal.time}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Entry</p>
                        <p className="font-semibold text-foreground">{signal.entry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Stop Loss</p>
                        <p className="font-semibold text-red-600">{signal.stopLoss}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Take Profit</p>
                        <p className="font-semibold text-green-600">{signal.takeProfit}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Risk/Reward</p>
                        <p className="font-semibold text-foreground">{signal.riskReward}</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Reason:</span> {signal.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Signal Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
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

        {/* Performance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Signal Performance
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">72%</div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">+125</div>
                    <p className="text-sm text-muted-foreground">Average Pips per Signal</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">850</div>
                    <p className="text-sm text-muted-foreground">Total Pips This Month</p>
                  </div>
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
                Get Trading Signals
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join thousands of traders using our signals to improve their trading performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  View Performance
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
