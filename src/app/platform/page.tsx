"use client"
import Layout from "@/components/Layout";
import { TrendingUp, BarChart3, Clock, Shield, Zap, LifeBuoy, ArrowRight, Wallet, Check } from "lucide-react";
import platfrommainImage from "../../assest/images/mainpageimage.png"
import platfrommainImagedark from "../../assest/images/mainpageimagedark.png"
import { useEffect, useState } from "react";

const features = [
  {
    icon: TrendingUp,
    title: "Low Spreads",
    description: "Get the best possible pricing with our competitive spreads starting from 0.0 pips."
  },
  {
    icon: Clock,
    title: "Fast Execution",
    description: "Lightning-fast trade execution with no requotes or delays."
  },
  {
    icon: BarChart3,
    title: "Advanced Tools",
    description: "Professional charting and analysis tools to enhance your trading."
  },
  {
    icon: Shield,
    title: "Secure & Regulated",
    description: "Your funds are protected with bank-level security and regulatory compliance."
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
        <section className="py-20 md:py-32 bg-linear-to-br from-emerald-50 to-green-100 dark:from-amber-900/20 dark:to-yellow-900/30"
         style={{
          backgroundImage: `url(${
            isDark ? platfrommainImagedark.src : platfrommainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDark ? "text-[#f5c542] drop-shadow-lg" : "text-gray-900"
                }`}>
                  Why Choose Our Platform?
                </h1>
                <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
                  isDark ? "text-white/95 drop-shadow-md" : "text-gray-900"
                }`}>
                  Experience forex trading with cutting-edge technology, lightning-fast execution, and comprehensive tools designed for both beginners and professional traders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                    isDark 
                      ? "bg-[#f5c542] hover:bg-[#d4a938]" 
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}>
                    Start Trading
                  </button>
                  <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    isDark 
                      ? "border-2 border-[#f5c542] text-[#f5c542] hover:bg-[#f5c542]/10" 
                      : "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  }`}>
                    Learn More
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-foreground"
              }`}>
                Why Choose Our Platform?
              </h2>
              <p className={`text-center mb-12 max-w-3xl mx-auto ${
                isDark ? "text-white/95 drop-shadow-md" : "text-muted-foreground"
              }`}>
                Discover the benefits that make us the preferred choice for traders worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className={`rounded-xl p-8 shadow-sm transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-border hover:shadow-md"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDark ? "bg-[#f5c542]/20" : "bg-emerald-100 dark:bg-emerald-900/30"
                      }`}>
                        <feature.icon className={`h-6 w-6 ${
                          isDark ? "text-[#f5c542]" : "text-emerald-600 dark:text-emerald-400"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-display text-xl font-semibold mb-2 ${
                          isDark ? "text-[#f5c542] drop-shadow-lg" : "text-foreground"
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`mb-4 leading-relaxed ${
                          isDark ? "text-white/95 drop-shadow-md" : "text-muted-foreground"
                        }`}>
                          {feature.description}
                        </p>
                        <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                          isDark ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" : "bg-emerald-600 hover:bg-emerald-700 text-white"
                        }`}>
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Support */}
        <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-emerald-50"}`}>
          <div className="container mx-auto px-4">
            <div className={`relative rounded-xl overflow-hidden ${isDark ? "bg-gray-800/50" : "bg-emerald-100"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-[#f5c542]/20" : "bg-emerald-200"}`}>
                      <LifeBuoy className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <h2 className={`font-display text-3xl md:text-4xl font-bold ${isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"}`}>
                      24/7 Customer Support
                    </h2>
                  </div>
                  <p className={`text-lg mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                    Get dedicated support anytime, anywhere, seven days or night.
                  </p>
                  <button className={`px-8 py-3 rounded-lg font-medium transition-colors w-fit ${isDark ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}>
                    Get Started
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://placehold.co/600x400/E0F2F1/047857?text=Trading+Platform"
                    alt="Trading Platform"
                    className="rounded-lg shadow-lg w-full h-auto max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* flexible funds operations*/}
        <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-emerald-50"}`}>
          <div className="container mx-auto px-4">
            <div className={`relative rounded-xl overflow-hidden ${isDark ? "bg-gray-800/50" : "bg-emerald-100"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-[#f5c542]/20" : "bg-emerald-200"}`}>
                      <Wallet className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <h2 className={`font-display text-3xl md:text-4xl font-bold ${isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"}`}>
                      Flexible Funding Options
                    </h2>
                  </div>
                  <p className={`text-lg mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                    Deposit and withdraw using a variety of convenient payment methods.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      <span className={`${isDark ? "text-white/80" : "text-gray-900"}`}>Recharge your trading credits</span>
                    </li>
                    <li className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      <span className={`${isDark ? "text-white/80" : "text-gray-900"}`}>Transfer to a wide range of bank accounts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      <span className={`${isDark ? "text-white/80" : "text-gray-900"}`}>Deposit with cards and e-wallets</span>
                    </li>
                  </ul>
                  <button className={`px-8 py-3 rounded-lg font-medium transition-colors w-fit ${isDark ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}>
                    Get Started
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://placehold.co/600x400/E0F2F1/047857?text=Funding+Options"
                    alt="Funding Options"
                    className="rounded-lg shadow-lg w-full h-auto max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2fA section */}
        <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-emerald-50"}`}>
          <div className="container mx-auto px-4">
            <div className={`relative rounded-xl overflow-hidden ${isDark ? "bg-gray-800/50" : "bg-emerald-100"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${isDark ? "bg-[#f5c542]/20" : "bg-emerald-200"}`}>
                      <Shield className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <h2 className={`font-display text-3xl md:text-4xl font-bold ${isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"}`}>
                      2FA Authentication
                    </h2>
                  </div>
                  <p className={`text-lg mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                    Add an extra layer of security to your account with two-factor authentication.
                  </p>
                  <button className={`px-8 py-3 rounded-lg font-medium transition-colors w-fit ${isDark ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}>
                    Get Started
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://placehold.co/600x400/E0F2F1/047857?text=2FA+Security"
                    alt="2FA Security"
                    className="rounded-lg shadow-lg w-full h-auto max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative"
        style={{
          backgroundImage: `url(${
            isDark ? platfrommainImagedark.src : platfrommainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className={`absolute inset-0 `}></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`font-display text-3xl lg:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Start Trading with Us Today
              </h2>
              <p className={`text-xl mb-8 ${
                isDark ? "text-white/90" : "text-gray-900"
              }`}>
                Join thousands of traders worldwide who use our platform for their trading needs.
              </p>
              <button 
              className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                  >
                Start Trading
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
