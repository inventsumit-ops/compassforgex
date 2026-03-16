"use client"
import Layout from "@/components/Layout";
import { TrendingUp, TrendingDown, Bell, Clock, Target } from "lucide-react";
import { useEffect, useState } from "react";

import signalsmainImage from "../../assest/images/mainpageimage.png"
import signalsmainImagedark from "../../assest/images/mainpageimagedark.png"

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
      const updateTheme = () => {
        if (typeof document !== "undefined") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      };
  
      updateTheme();
  
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
  
      return () => observer.disconnect();
    }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient"
         style={{
          backgroundImage: `url(${
            isDark ? signalsmainImagedark.src : signalsmainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={`font-display text-4xl md:text-6xl font-bold mb-6 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Trading Signals
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Professional trading signals based on technical analysis and market research.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={`py-12 border-b ${isDark ? "border-gray-700" : "border-emerald-200"}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {signalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`font-display text-3xl md:text-4xl font-bold mb-2 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>
                    {stat.value}
                  </div>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Signals */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-8 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Active Trading Signals
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeSignals.map((signal, index) => (
                  <div key={index} className={`rounded-xl p-6 transition-shadow ${
                    signal.type === 'Buy' 
                      ? (isDark ? 'bg-gray-800/50 border-green-500/30 hover:shadow-lg' : 'bg-emerald-50 border-emerald-300 hover:shadow-md')
                      : (isDark ? 'bg-gray-800/50 border-red-500/30 hover:shadow-lg' : 'bg-red-50 border-red-300 hover:shadow-md')
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          signal.type === 'Buy' 
                            ? (isDark ? 'bg-green-500 text-white' : 'bg-emerald-600 text-white')
                            : (isDark ? 'bg-red-500 text-white' : 'bg-red-600 text-white')
                        }`}>
                          {signal.type}
                        </span>
                        <span className={`font-display text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {signal.pair}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          signal.confidence === 'High' 
                            ? (isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800')
                            : (isDark ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800')
                        }`}>
                          {signal.confidence}
                        </span>
                        <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{signal.time}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Entry</p>
                        <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{signal.entry}</p>
                      </div>
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Stop Loss</p>
                        <p className={`font-semibold ${isDark ? "text-red-400" : "text-red-600"}`}>{signal.stopLoss}</p>
                      </div>
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Take Profit</p>
                        <p className={`font-semibold ${isDark ? "text-green-400" : "text-green-600"}`}>{signal.takeProfit}</p>
                      </div>
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Risk/Reward</p>
                        <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{signal.riskReward}</p>
                      </div>
                    </div>
                    
                    <div className={`rounded-lg p-3 ${isDark ? "bg-gray-700/50" : "bg-muted/50"}`}>
                      <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Signal Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                    }`}>
                      <feature.icon className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-8 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Signal Performance
              </h2>
              <div className={`rounded-xl p-8 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${isDark ? "text-green-400" : "text-green-600"}`}>72%</div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>+125</div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Average Pips per Signal</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>850</div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Total Pips This Month</p>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Get Trading Signals
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Join thousands of traders using our signals to improve their trading performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Start Free Trial
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
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
