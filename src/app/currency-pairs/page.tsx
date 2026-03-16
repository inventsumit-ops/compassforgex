"use client"
import Layout from "@/components/Layout";
import { TrendingUp, TrendingDown, Info, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

import pairmainImage from "../../assest/images/mainpageimage.png"
import pairmainImagedark from "../../assest/images/mainpageimagedark.png"

const majorPairs = [
  { symbol: "EUR/USD", name: "Euro / US Dollar", spread: "0.1", change: "+0.2%" },
  { symbol: "GBP/USD", name: "British Pound / US Dollar", spread: "0.2", change: "-0.1%" },
  { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", spread: "0.1", change: "+0.3%" },
  { symbol: "USD/CHF", name: "US Dollar / Swiss Franc", spread: "0.2", change: "+0.1%" },
];

const minorPairs = [
  { symbol: "EUR/GBP", name: "Euro / British Pound", spread: "0.3", change: "+0.1%" },
  { symbol: "EUR/JPY", name: "Euro / Japanese Yen", spread: "0.2", change: "-0.2%" },
  { symbol: "GBP/JPY", name: "British Pound / Japanese Yen", spread: "0.3", change: "+0.4%" },
  { symbol: "EUR/CHF", name: "Euro / Swiss Franc", spread: "0.3", change: "-0.1%" },
];

const exoticPairs = [
  { symbol: "USD/TRY", name: "US Dollar / Turkish Lira", spread: "0.5", change: "+0.8%" },
  { symbol: "USD/ZAR", name: "US Dollar / South African Rand", spread: "0.6", change: "-0.3%" },
  { symbol: "EUR/PLN", name: "Euro / Polish Zloty", spread: "0.4", change: "+0.2%" },
  { symbol: "GBP/NOK", name: "British Pound / Norwegian Krone", spread: "0.5", change: "+0.1%" },
];

export default function CurrencyPairsPage() {
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
            isDark ? pairmainImagedark.src : pairmainImage.src
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
                Currency Pairs
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Trade 50+ currency pairs with competitive spreads and deep liquidity.
              </p>
            </div>
          </div>
        </section>

        {/* Major Pairs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Major Currency Pairs
              </h2>
              <p className={`text-center max-w-2xl mx-auto mb-12 ${
                isDark ? "text-white/90" : "text-gray-900"
              }`}>
                The most traded currency pairs in the world with tightest spreads.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {majorPairs.map((pair, index) => (
                  <div key={index} className={`rounded-lg p-4 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className={`h-5 w-5 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                        <span className={`font-display text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {pair.symbol}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        pair.change.startsWith('+') 
                          ? (isDark ? "text-green-400" : "text-green-600") 
                          : (isDark ? "text-red-400" : "text-red-600")
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {pair.change}
                      </div>
                    </div>
                    <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{pair.name}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}>Spread</span>
                      <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{pair.spread}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Minor Pairs */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Minor Currency Pairs
              </h2>
              <p className={`text-center max-w-2xl mx-auto mb-12 ${
                isDark ? "text-white/90" : "text-gray-900"
              }`}>
                Cross-currency pairs that offer diversification opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {minorPairs.map((pair, index) => (
                  <div key={index} className={`rounded-lg p-4 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className={`h-5 w-5 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                        <span className={`font-display text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {pair.symbol}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        pair.change.startsWith('+') 
                          ? (isDark ? "text-green-400" : "text-green-600") 
                          : (isDark ? "text-red-400" : "text-red-600")
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {pair.change}
                      </div>
                    </div>
                    <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{pair.name}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}>Spread</span>
                      <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{pair.spread}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exotic Pairs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Exotic Currency Pairs
              </h2>
              <p className={`text-center max-w-2xl mx-auto mb-12 ${
                isDark ? "text-white/90" : "text-gray-900"
              }`}>
                High-volatility pairs for experienced traders seeking bigger opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {exoticPairs.map((pair, index) => (
                  <div key={index} className={`rounded-lg p-4 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className={`h-5 w-5 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                        <span className={`font-display text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {pair.symbol}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        pair.change.startsWith('+') 
                          ? (isDark ? "text-green-400" : "text-green-600") 
                          : (isDark ? "text-red-400" : "text-red-600")
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {pair.change}
                      </div>
                    </div>
                    <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{pair.name}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}>Spread</span>
                      <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{pair.spread}</span>
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
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Why Trade Currency Pairs With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Competitive Spreads
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Some of the tightest spreads in the industry across all currency pairs.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Info className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Deep Liquidity
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Access to deep liquidity pools ensuring fast execution even during volatile periods.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <DollarSign className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    50+ Pairs
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Wide selection of major, minor, and exotic currency pairs to choose from.
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
                Start Trading Currency Pairs
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Open an account and access the global forex market with competitive conditions.
              </p>
              <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDark 
                  ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}>
                Open Trading Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
