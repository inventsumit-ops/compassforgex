"use client"
import Layout from "@/components/Layout";
import { CheckCircle, Star, TrendingUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";

import accountsmainImage from "../../assest/images/mainpageimage.png"
import accountsmainImagedark from "../../assest/images/mainpageimagedark.png"

const accountTypes = [
  {
    name: "Micro",
    description: "Perfect for beginners to start trading with minimal risk",
    minDeposit: "$100",
    spread: "From 1.8 pips",
    leverage: "Up to 1:500",
    features: [
      "50+ currency pairs",
      "No commission",
      "Market execution",
      "24/7 support",
      "Educational resources"
    ],
    popular: false
  },
  {
    name: "Standard",
    description: "Ideal for experienced traders with competitive conditions",
    minDeposit: "$1,000",
    spread: "From 1.2 pips",
    leverage: "Up to 1:300",
    features: [
      "70+ currency pairs",
      "No commission",
      "Instant execution",
      "Priority support",
      "Advanced analytics"
    ],
    popular: true
  },
  {
    name: "Premium",
    description: "Professional trading with institutional-grade features",
    minDeposit: "$10,000",
    spread: "From 0.8 pips",
    leverage: "Up to 1:200",
    features: [
      "100+ currency pairs",
      "Low commission",
      "ECN execution",
      "Dedicated account manager",
      "VIP support"
    ],
    popular: false
  },
  {
    name: "Institutional",
    description: "For high-volume traders and financial institutions",
    minDeposit: "$50,000",
    spread: "From 0.2 pips",
    leverage: "Up to 1:100",
    features: [
      "All currency pairs",
      "Commission-based pricing",
      "Direct market access",
      "Custom solutions",
      "API access"
    ],
    popular: false
  }
];

export default function AccountsPage() {
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
            isDark ? accountsmainImagedark.src : accountsmainImage.src
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
                Trading Accounts
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Choose the account type that best suits your trading style and experience level.
              </p>
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accountTypes.map((account, index) => (
                  <div 
                    key={index} 
                    className={`relative border rounded-xl p-6 transition-all hover:shadow-elevated ${
                      account.popular 
                        ? (isDark ? 'border-[#f5c542] shadow-card bg-[#f5c542]/5' : 'border-emerald-600 shadow-card bg-emerald-50')
                        : (isDark ? 'border-gray-700 bg-gray-800/50' : 'border-emerald-200 bg-card')
                    }`}
                  >
                    {account.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                          isDark ? 'bg-[#f5c542] text-gray-900' : 'bg-emerald-600 text-white'
                        }`}>
                          <Star className="h-3 w-3" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <h3 className={`font-display text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {account.name}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {account.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Min Deposit</span>
                        <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{account.minDeposit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Spread</span>
                        <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{account.spread}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Leverage</span>
                        <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{account.leverage}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {account.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          <CheckCircle className={`h-4 w-4 mr-2 shrink-0 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      account.popular
                        ? (isDark ? 'bg-[#f5c542] hover:bg-[#d4a938] text-gray-900' : 'bg-emerald-600 hover:bg-emerald-700 text-white')
                        : (isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700')
                    }`}>
                      Open {account.name} Account
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Why Trade With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <TrendingUp className={`h-12 w-12 mx-auto mb-4 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Competitive Spreads
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Enjoy some of the tightest spreads in the industry across all account types.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className={`h-12 w-12 mx-auto mb-4 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Secure Trading
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Your funds are protected with negative balance protection and segregated accounts.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className={`h-12 w-12 mx-auto mb-4 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Fast Execution
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Lightning-fast execution with no requotes and minimal slippage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Ready to Start Trading?
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Open your account in minutes and join thousands of successful traders.
              </p>
              <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDark 
                  ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}>
                Open Account Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
