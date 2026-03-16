"use client"
import Layout from "@/components/Layout";
import { ArrowRight, TrendingUp, Bitcoin, BarChart3, Coins } from "lucide-react";

import servicemainImage from "../../assest/images/mainpageimage.png"
import servicemainImagedark from "../../assest/images/mainpageimagedark.png"
import { useEffect, useState } from "react";
const services = [
  {
    title: "Forex Trading",
    description: "Trade major, minor, and exotic currency pairs with competitive spreads and lightning-fast execution.",
    image: "/api/placeholder/600/400",
    features: ["50+ Currency Pairs", "Spreads from 0.0 pips", "Leverage up to 1:1000", "24/5 Market Access"]
  },
  {
    title: "Crypto Trading", 
    description: "Buy, sell and trade the most popular cryptocurrencies with secure wallets and competitive fees.",
    image: "/api/placeholder/600/400",
    features: ["Bitcoin, Ethereum & more", "Secure crypto wallets", "Instant deposits", "Low trading fees"]
  },
  {
    title: "Stocks Trading",
    description: "Access global stock markets and trade shares of leading companies from around the world.",
    image: "/api/placeholder/600/400", 
    features: ["US, European & Asian stocks", "Real-time market data", "Fractional shares", "Dividend tracking"]
  },
  {
    title: "Commodity Trading",
    description: "Trade precious metals, energy, and agricultural commodities with competitive pricing.",
    image: "/api/placeholder/600/400",
    features: ["Gold, Silver & Oil", "Low margin requirements", "Market analysis", "Hedging tools"]
  }
];

export default function ServicesPage() {

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
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isDark ? servicemainImagedark.src : servicemainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <p
                  className={`text-[11px] md:text-xs font-medium uppercase tracking-[0.25em] ${
                    isDark ? "text-[#f5c542]" : "text-emerald-700/80"
                  }`}
                >
                  Home / Our Services
                </p>
              
              {/* Hero Content */}
              <h1 className={`font-display text-4xl lg:text-6xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Our Services
              </h1>
              <p className={`text-xl mb-8 leading-relaxed max-w-2xl ${
                isDark ? "text-white/90" : "text-gray-700"
              }`}>
                Explore our range of services designed to help you achieve your financial goals.
              </p>
              <button 
              className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                  >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* forex trading section */}
        <section className="py-20"
         style={{
          backgroundImage: `url(${
            isDark ? servicemainImagedark.src : servicemainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Forex Trading
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Trade major, minor, and exotic currency pairs with competitive spreads and lightning-fast execution.
                </p>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg text-foreground">Open 50+ currency pairs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg text-foreground">Stable CFDs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg text-foreground">High Quantity</span>
                  </li>
                </ul>
                
                <button 
              className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                  >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
              </div>
              
              {/* Right Content */}
              <div className="relative">
                {/* Laptop with Chart */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="bg-white rounded p-6">
                    <div className="h-32 bg-gradient-to-r from-emerald-50 to-blue-50 rounded mb-4 flex items-center justify-center">
                      <BarChart3 className="h-16 w-16 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Currency Pairs Card */}
                <div className="absolute -right-8 top-8 bg-white rounded-lg shadow-xl p-4 w-48">
                  <h4 className="font-semibold text-sm mb-3">Currency Pairs</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        EURUSD
                      </span>
                      <span className="text-green-600">-10.50%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        GBPUSD
                      </span>
                      <span className="text-red-600">-8.34%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        USDJPY
                      </span>
                      <span className="text-green-600">+5.67%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>USDCHF</span>
                      <span className="text-green-600">+2.15%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>AUDUSD</span>
                      <span className="text-red-600">-3.22%</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                    5 assets, 100%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stocks trading section */}
        <section className="py-20 relative"
         style={{
          backgroundImage: `url(${
            isDark ? servicemainImagedark.src : servicemainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className={`absolute inset-0 `}></div>
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className={`font-display text-3xl lg:text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  Stocks Trading
                </h2>
                <p className={`text-xl mb-8 leading-relaxed ${
                  isDark ? "text-white/90" : "text-gray-700"
                }`}>
                  Access thousands of stocks from global markets and trade with confidence using our advanced platform.
                </p>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Global Markets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Stocks CFDS</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Buy Gold</span>
                  </li>
                </ul>
                
                <button 
              className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                  >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
              </div>
              
              {/* Right Content - Person with laptop */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Main person image placeholder */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        {/* Person silhouette */}
                        <div className="w-48 h-48 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 bg-white/30 rounded-full"></div>
                        </div>
                        <p className="text-white/80 text-sm">Professional Trader</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stock chart overlay */}
                  <div className={`absolute -top-4 -right-4 rounded-lg shadow-xl p-4 w-56 ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}>
                    <h4 className={`font-semibold text-sm mb-3 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Stock Chart</h4>
                    <div className={`h-24 rounded mb-3 flex items-center justify-center ${
                      isDark 
                        ? "bg-gradient-to-r from-[#f5c542]/20 to-[#f2b824]/10" 
                        : "bg-gradient-to-r from-emerald-50 to-blue-50"
                    }`}>
                      <TrendingUp className={`h-12 w-12 ${
                        isDark ? "text-[#f5c542]" : "text-emerald-600"
                      }`} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>AAPL</span>
                        <span className={isDark ? "text-[#f5c542]" : "text-green-600"}>+2.45%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>GOOGL</span>
                        <span className={isDark ? "text-[#f5c542]" : "text-green-600"}>+1.82%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>MSFT</span>
                        <span className="text-red-600">-0.67%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* commodities  trading section */}
        <section className="py-20 relative"
         style={{
          backgroundImage: `url(${
            isDark ? servicemainImagedark.src : servicemainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className={`absolute inset-0 `}></div>
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className={`font-display text-3xl lg:text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  Commodity Trading
                </h2>
                <p className={`text-xl mb-8 leading-relaxed ${
                  isDark ? "text-white/90" : "text-gray-900"
                }`}>
                  Explore our markets for an empowered investment journey, with a robust ecosystem designed to support your success.
                </p>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>Gold & Silver</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>Oil & Gas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>Diversify Portfolio</span>
                  </li>
                </ul>
                
                <button 
              className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                  >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
              </div>


              
              {/* Right Content - Gold bars and laptop */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Gold bars image placeholder */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        {/* Gold bars representation */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="w-20 h-12 bg-yellow-400/60 rounded flex items-center justify-center">
                            <span className="text-yellow-900 text-xs font-bold">AU</span>
                          </div>
                          <div className="w-20 h-12 bg-yellow-400/60 rounded flex items-center justify-center">
                            <span className="text-yellow-900 text-xs font-bold">AU</span>
                          </div>
                          <div className="w-20 h-12 bg-gray-300/60 rounded flex items-center justify-center">
                            <span className="text-gray-700 text-xs font-bold">AG</span>
                          </div>
                          <div className="w-20 h-12 bg-gray-300/60 rounded flex items-center justify-center">
                            <span className="text-gray-700 text-xs font-bold">AG</span>
                          </div>
                        </div>
                        <p className="text-white/80 text-sm">Precious Metals</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Commodity chart overlay */}
                  <div className={`absolute -top-4 -right-4 rounded-lg shadow-xl p-4 w-56 ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}>
                    <h4 className={`font-semibold text-sm mb-3 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Commodity Prices</h4>
                    <div className={`h-24 rounded mb-3 flex items-center justify-center ${
                      isDark 
                        ? "bg-gradient-to-r from-[#f5c542]/20 to-[#f2b824]/10" 
                        : "bg-gradient-to-r from-emerald-50 to-blue-50"
                    }`}>
                      <TrendingUp className={`h-12 w-12 ${
                        isDark ? "text-[#f5c542]" : "text-emerald-600"
                      }`} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>GOLD</span>
                        <span className={isDark ? "text-[#f5c542]" : "text-green-600"}>+3.25%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>SILVER</span>
                        <span className={isDark ? "text-[#f5c542]" : "text-green-600"}>+2.15%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>OIL</span>
                        <span className="text-red-600">-1.45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


         {/* crypto trading section */}
         <section className="py-20 relative"
         style={{
          backgroundImage: `url(${
            isDark ? servicemainImagedark.src : servicemainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className={`absolute inset-0 `}></div>
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className={`font-display text-3xl lg:text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  Crypto Trading
                </h2>
                <p className={`text-xl mb-8 leading-relaxed ${
                  isDark ? "text-white/90" : "text-gray-900"
                }`}>
                  Seize control of your financial destiny with our Trading Platform. Diversify your portfolio, access real-time market data, and execute trades with confidence.
                </p>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>Top Cryptocurrencies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>Extra Security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className={`text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>24/7 Market</span>
                  </li>
                </ul>
                
                <button 
              className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                  >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
              </div>
              
              {/* Right Content - Mobile app mockups */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Mobile app 1 (chart) */}
                  <div className={`absolute top-0 left-0 w-48 h-64 rounded-lg shadow-xl p-4 transform rotate-6 ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}>
                    <h4 className={`font-semibold text-sm mb-3 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Bitcoin</h4>
                    <div className={`h-32 rounded mb-3 flex items-center justify-center ${
                      isDark 
                        ? "bg-gradient-to-r from-[#f5c542]/20 to-[#f2b824]/10" 
                        : "bg-gradient-to-r from-emerald-50 to-blue-50"
                    }`}>
                      <Bitcoin className={`h-16 w-16 ${
                        isDark ? "text-[#f5c542]" : "text-emerald-600"
                      }`} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>Price</span>
                        <span className={isDark ? "text-[#f5c542]" : "text-green-600"}>$45,234</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? "text-gray-300" : "text-gray-600"}>24h</span>
                        <span className={isDark ? "text-[#f5c542]" : "text-green-600"}>+5.67%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile app 2 (portfolio) */}
                  <div className={`absolute top-8 right-0 w-48 h-64 rounded-lg shadow-xl p-4 transform -rotate-6 ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}>
                    <h4 className={`font-semibold text-sm mb-3 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}>Portfolio</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bitcoin className="h-4 w-4 text-orange-500" />
                          <span className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"}`}>BTC</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-[#f5c542]" : "text-green-600"}`}>+2.4%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                          <span className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"}`}>ETH</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-[#f5c542]" : "text-green-600"}`}>+1.8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                          <span className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"}`}>USDT</span>
                        </div>
                        <span className="text-red-600 text-xs">-0.2%</span>
                      </div>
                    </div>
                    <div className={`mt-4 pt-3 border-t ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}>
                      <div className="text-center">
                        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Total Value</p>
                        <p className={`text-lg font-bold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}>$125,430</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative"
        style={{
          backgroundImage: `url(${
            isDark ? servicemainImagedark.src : servicemainImage.src
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
