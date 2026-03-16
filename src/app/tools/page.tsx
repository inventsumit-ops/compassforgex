"use client"
import Layout from "@/components/Layout";
import { Calculator, TrendingUp, BarChart3, Clock, Settings } from "lucide-react";
import { useEffect, useState } from "react";

import toolsmainImage from "../../assest/images/mainpageimage.png"
import toolsmainImagedark from "../../assest/images/mainpageimagedark.png"

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
            isDark ? toolsmainImagedark.src : toolsmainImage.src
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
                Trading Tools
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Professional-grade tools to enhance your trading analysis and decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Featured Tools
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredTools.map((tool, index) => (
                  <div key={index} className={`rounded-xl overflow-hidden transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className={`aspect-video relative ${isDark ? "bg-gray-900/50" : "bg-emerald-50"}`}>
                      <div className={`absolute inset-0 flex items-center justify-center ${
                        isDark ? "bg-linear-to-br from-[#f5c542]/20 to-gray-700/20" : "bg-linear-to-br from-emerald-200 to-emerald-100"
                      }`}>
                        <BarChart3 className={`h-12 w-12 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {tool.name}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                All Trading Tools
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className={`rounded-xl p-6 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                      }`}>
                        <tool.icon className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                      <div className="flex-1">
                        <span className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{tool.category}</span>
                        <h3 className={`font-display text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {tool.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {tool.description}
                    </p>
                    
                    <div className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-center text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isDark ? "bg-[#f5c542]" : "bg-emerald-600"}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold transition-colors ${
                      isDark 
                        ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                        : "bg-emerald-600 hover:bg-emerald-700 text-white"
                    }`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Why Use Our Trading Tools?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Calculator className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Accurate Calculations
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Precise calculations for position sizing, risk management, and profit analysis.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <BarChart3 className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Real-Time Data
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    All tools use live market data for accurate and up-to-date analysis.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Free to Use
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    All trading tools are completely free for all CompassForex clients.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Settings className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Customizable
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Enhance Your Trading
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Open an account and get instant access to all our professional trading tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Open Account
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
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
