"use client"
import Layout from "@/components/Layout";
import { Calendar, User, Eye, ArrowRight, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

import blogmainImage from "../../assest/images/mainpageimage.png"
import blogmainImagedark from "../../assest/images/mainpageimagedark.png"

const blogPosts = [
  {
    id: 1,
    title: "EUR/USD Technical Analysis: Key Resistance Levels to Watch",
    excerpt: "In-depth technical analysis of EUR/USD with key support and resistance levels, trading strategies, and market outlook for the coming week.",
    author: "Technical Analysis Team",
    date: "March 12, 2026",
    readTime: "8 min read",
    category: "Technical Analysis",
    image: "/api/placeholder/640x360",
    featured: true
  },
  {
    id: 2,
    title: "Federal Reserve Decision: Impact on USD Pairs",
    excerpt: "Comprehensive analysis of the upcoming FOMC decision and potential impact on major USD currency pairs including EUR/USD, GBP/USD, and USD/JPY.",
    author: "Fundamental Analysis Team",
    date: "March 11, 2026",
    readTime: "6 min read",
    category: "Fundamental Analysis",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 3,
    title: "Risk Management Strategies for Forex Traders",
    excerpt: "Essential risk management techniques every forex trader should know, including position sizing, stop-loss strategies, and portfolio diversification.",
    author: "Trading Education Team",
    date: "March 10, 2026",
    readTime: "10 min read",
    category: "Trading Education",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 4,
    title: "Understanding Market Sentiment in Forex Trading",
    excerpt: "How to read and interpret market sentiment indicators, including COT reports, retail positioning, and sentiment indices.",
    author: "Market Research Team",
    date: "March 9, 2026",
    readTime: "7 min read",
    category: "Market Analysis",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 5,
    title: "Top 5 Mistakes New Forex Traders Make",
    excerpt: "Common pitfalls and mistakes that new forex traders should avoid, from over-leveraging to poor risk management and emotional trading.",
    author: "Senior Trader",
    date: "March 8, 2026",
    readTime: "5 min read",
    category: "Trading Tips",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 6,
    title: "GBP/USD Forecast: Brexit Impact and Bank of England Policy",
    excerpt: "Analysis of how Brexit developments and Bank of England monetary policy are affecting the GBP/USD currency pair.",
    author: "Currency Analysts",
    date: "March 7, 2026",
    readTime: "8 min read",
    category: "Currency Analysis",
    image: "/api/placeholder/640x360",
    featured: false
  }
];

const categories = ["All", "Technical Analysis", "Fundamental Analysis", "Trading Education", "Market Analysis", "Trading Tips", "Currency Analysis"];

export default function BlogPage() {
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
            isDark ? blogmainImagedark.src : blogmainImage.src
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
                Trading Blog
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Expert insights, market analysis, and trading strategies to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Featured Article
              </h2>
              
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className={`rounded-xl overflow-hidden transition-shadow ${
                  isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                }`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`aspect-video relative ${isDark ? "bg-gray-900/50" : "bg-emerald-50"}`}>
                      <div className={`absolute inset-0 flex items-center justify-center ${
                        isDark ? "bg-linear-to-br from-[#f5c542]/20 to-gray-700/20" : "bg-linear-to-br from-emerald-200 to-emerald-100"
                      }`}>
                        <TrendingUp className={`h-12 w-12 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded ${
                          isDark ? "bg-[#f5c542] text-gray-900" : "bg-emerald-600 text-white"
                        }`}>
                          Featured
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          isDark ? "bg-gray-700 text-gray-300" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className={`font-display text-2xl font-bold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                        {post.title}
                      </h3>
                      
                      <p className={`text-lg leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className={`flex items-center gap-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                        isDark 
                          ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}>
                        Read Full Article
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className={`py-12 border-b ${isDark ? "border-gray-700" : "border-emerald-200"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                      isDark 
                        ? "border-gray-700 hover:bg-gray-800 text-gray-300" 
                        : "border-emerald-200 hover:bg-emerald-50 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Recent Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className={`rounded-xl overflow-hidden transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className={`aspect-video relative ${isDark ? "bg-gray-900/50" : "bg-emerald-50"}`}>
                      <div className={`absolute inset-0 flex items-center justify-center ${
                        isDark ? "bg-linear-to-br from-[#f5c542]/20 to-gray-700/20" : "bg-linear-to-br from-emerald-200 to-emerald-100"
                      }`}>
                        <TrendingUp className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          isDark ? "bg-gray-700 text-gray-300" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className={`font-display text-lg font-semibold mb-3 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                        {post.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {post.excerpt}
                      </p>
                      
                      <div className={`flex items-center justify-between text-xs mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                        isDark 
                          ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}>
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className={`rounded-xl p-8 text-center ${
                isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"
              }`}>
                <h2 className={`font-display text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Stay Updated
                </h2>
                <p className={`mb-6 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  Get the latest trading insights, market analysis, and educational content delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDark 
                        ? "bg-gray-700 text-white border-gray-600 placeholder:text-gray-400 focus:ring-[#f5c542]" 
                        : "bg-white text-gray-900 border-emerald-200 placeholder:text-gray-500 focus:ring-emerald-500"
                    }`}
                  />
                  <button className={`px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                    isDark 
                      ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}>
                    Subscribe
                  </button>
                </div>
                <p className={`text-xs mt-4 ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                  Join 10,000+ traders. Unsubscribe at any time.
                </p>
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
                Want to Contribute?
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Share your trading expertise and insights with our community of traders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Become a Contributor
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
                  View Guidelines
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
