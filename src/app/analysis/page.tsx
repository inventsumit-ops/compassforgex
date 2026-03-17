"use client"
import Layout from "@/components/Layout";
import { BarChart3, TrendingUp, TrendingDown, Calendar, Eye, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

import analysismainImage from "../../assest/images/mainpageimage.png"
import analysismainImagedark from "../../assest/images/mainpageimagedark.png"

const analysisData = [
  {
    title: "EUR/USD Technical Analysis",
    type: "Technical",
    timeframe: "Daily",
    trend: "bullish",
    summary: "EUR/USD showing strong upward momentum above 1.0800 resistance level",
    keyPoints: ["Break above 1.0800", "RSI at 65", "Volume increasing", "Moving averages bullish"],
    author: "Technical Team",
    time: "2 hours ago"
  },
  {
    title: "USD Fundamentals Impact",
    type: "Fundamental", 
    timeframe: "Weekly",
    trend: "neutral",
    summary: "USD strength supported by Fed hawkish stance but inflation concerns remain",
    keyPoints: ["Fed rate hike expectations", "CPI data upcoming", "GDP growth steady", "Labor market strong"],
    author: "Fundamental Team",
    time: "5 hours ago"
  },
  {
    title: "GBP/USD Market Outlook",
    type: "Technical",
    timeframe: "4 Hour",
    trend: "bearish", 
    summary: "GBP under pressure as UK economic data shows weakness",
    keyPoints: ["Support at 1.2500", "Break below key level", "Bank of England concerns", "Brexit uncertainties"],
    author: "Market Analysts",
    time: "1 day ago"
  }
];

const upcomingEvents = [
  {
    date: "Today",
    time: "14:30 GMT",
    currency: "USD",
    currencyFlag: "🇺🇸",
    event: "FOMC Statement",
    impact: "High",
    forecast: "Rate hike 25bps",
    previous: "Rate hike 25bps"
  },
  {
    date: "Tomorrow", 
    time: "09:00 GMT",
    currency: "EUR",
    currencyFlag: "🇪🇺",
    event: "ECB Interest Rate Decision",
    impact: "High",
    forecast: "No change",
    previous: "Rate hike 25bps"
  },
  {
    date: "Tomorrow",
    time: "12:30 GMT", 
    currency: "GBP",
    currencyFlag: "🇬🇧",
    event: "UK CPI Data",
    impact: "Medium",
    forecast: "6.5%",
    previous: "6.8%"
  },
  {
    date: "Dec 15",
    time: "08:30 GMT",
    currency: "USD",
    currencyFlag: "🇺🇸",
    event: "Core PCE Price Index",
    impact: "High",
    forecast: "4.6%",
    previous: "4.7%"
  },
  {
    date: "Dec 15",
    time: "13:30 GMT",
    currency: "CAD",
    currencyFlag: "🇨🇦",
    event: "CPI Data",
    impact: "Medium",
    forecast: "3.1%",
    previous: "3.2%"
  },
  {
    date: "Dec 16",
    time: "06:00 GMT",
    currency: "JPY",
    currencyFlag: "🇯🇵",
    event: "Industrial Production",
    impact: "Low",
    forecast: "-0.2%",
    previous: "0.3%"
  }
];

export default function AnalysisPage() {
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
            isDark ? analysismainImagedark.src : analysismainImage.src
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
                Market Analysis
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                In-depth technical and fundamental analysis to guide your trading decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Analysis */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-black"
              }`}>
                Latest Market Analysis
              </h2>
              
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max">
                  {analysisData.map((analysis, index) => (
                    <article key={index} className={`w-80 rounded-xl p-6 transition-shadow shrink-0 ${
                      isDark ? "bg-gray-900/70 border border-[#f5c542]/30 hover:shadow-xl hover:shadow-[#f5c542]/10" : "bg-white border border-gray-200 hover:shadow-md"
                    }`}>
                      {/* Tags Row */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          analysis.type === 'Technical' 
                            ? (isDark ? 'bg-[#f5c542] text-gray-900' : 'bg-green-500 text-white')
                            : (isDark ? 'bg-gray-700 text-white' : 'bg-gray-500 text-white')
                        }`}>
                          {analysis.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                        }`}>
                          {analysis.timeframe}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          analysis.trend === 'bullish' 
                            ? 'bg-green-500 text-white'
                            : analysis.trend === 'bearish' 
                              ? 'bg-red-500 text-white'
                              : (isDark ? 'bg-[#f5c542] text-gray-900' : 'bg-orange-500 text-white')
                        }`}>
                          {analysis.trend === 'bullish' ? 'Bullish' : analysis.trend === 'bearish' ? 'Bearish' : 'Neutral'}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`font-display text-xl font-bold mb-3 ${isDark ? "text-[#f5c542]" : "text-gray-900"}`}>
                        {analysis.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {analysis.summary}
                      </p>
                      
                      {/* Key Points with Icons */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {analysis.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className={`flex items-center text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                              {analysis.trend === 'bullish' ? (
                                <CheckCircle className={`h-4 w-4 mr-2 shrink-0 ${isDark ? "text-[#f5c542]" : "text-green-500"}`} />
                              ) : analysis.trend === 'bearish' ? (
                                <XCircle className={`h-4 w-4 mr-2 shrink-0 ${isDark ? "text-red-400" : "text-red-500"}`} />
                              ) : (
                                <AlertCircle className={`h-4 w-4 mr-2 shrink-0 ${isDark ? "text-[#f5c542]" : "text-orange-500"}`} />
                              )}
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="mb-4 h-24 flex items-center justify-center">
                        {index === 0 && (
                          /* EUR/USD - Blue upward trending line */
                          <div className="relative w-full h-full">
                            <svg viewBox="0 0 200 80" className="w-full h-full">
                              <polyline
                                points="10,60 40,50 70,45 100,30 130,25 160,15 190,10"
                                fill="none"
                                stroke={isDark ? "#f5c542" : "#3B82F6"}
                                strokeWidth="2"
                              />
                              <polygon points="185,5 195,10 185,15" fill={isDark ? "#f5c542" : "#3B82F6"} />
                              <circle cx="190" cy="10" r="3" fill={isDark ? "#f5c542" : "#10B981"} />
                            </svg>
                          </div>
                        )}
                        {index === 1 && (
                          /* USD - Green bar chart */
                          <div className="relative w-full h-full">
                            <svg viewBox="0 0 200 80" className="w-full h-full">
                              <rect x="20" y="50" width="20" height="30" fill={isDark ? "#f5c542" : "#10B981"} />
                              <rect x="50" y="40" width="20" height="40" fill={isDark ? "#f5c542" : "#10B981"} />
                              <rect x="80" y="30" width="20" height="50" fill={isDark ? "#f5c542" : "#10B981"} />
                              <rect x="110" y="25" width="20" height="55" fill={isDark ? "#f5c542" : "#10B981"} />
                              <rect x="140" y="20" width="20" height="60" fill={isDark ? "#f5c542" : "#10B981"} />
                            </svg>
                          </div>
                        )}
                        {index === 2 && (
                          /* GBP/USD - Red downward trending lines */
                          <div className="relative w-full h-full">
                            <svg viewBox="0 0 200 80" className="w-full h-full">
                              <polyline
                                points="10,20 40,30 70,35 100,50 130,55 160,65 190,70"
                                fill="none"
                                stroke={isDark ? "#f5c542" : "#EF4444"}
                                strokeWidth="2"
                              />
                              <polygon points="185,75 195,70 185,65" fill={isDark ? "#f5c542" : "#EF4444"} />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Footer */}
                      <div className={`flex items-center justify-between text-xs pt-4 border-t ${isDark ? "text-[#f5c542]/80 border-[#f5c542]/20" : "text-gray-600 border-gray-200"}`}>
                        <span>By {analysis.author}</span>
                        <span>{analysis.time}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Calendar */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-black"
              }`}>
                Upcoming Economic Events
              </h2>
              
              <div className={`rounded-xl overflow-hidden border ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b ${
                        isDark ? "bg-gray-900/50 border-gray-700" : "bg-gray-50 border-gray-200"
                      }`}>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Date</th>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Time</th>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Currency</th>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Event</th>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Impact</th>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Forecast</th>
                        <th className={`text-left p-4 text-sm font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>Previous</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingEvents.map((event, index) => (
                        <tr key={index} className={`border-b transition-colors ${
                          isDark ? "border-gray-700 hover:bg-gray-700/30" : "border-gray-100 hover:bg-gray-50"
                        }`}>
                          <td className={`p-4 text-sm font-medium ${
                            isDark ? "text-gray-200" : "text-gray-900"
                          }`}>
                            {event.date}
                          </td>
                          <td className={`p-4 text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}>
                            {event.time}
                          </td>
                          <td className={`p-4 text-sm font-semibold ${
                            isDark ? "text-gray-200" : "text-gray-900"
                          }`}>
                            <span className="mr-2 text-lg">{event.currencyFlag}</span>
                            {event.currency}
                          </td>
                          <td className={`p-4 text-sm ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}>
                            {event.event}
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              event.impact === 'High' 
                                ? 'bg-green-100 text-green-800'
                                : event.impact === 'Medium' 
                                  ? 'bg-orange-100 text-orange-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}>
                              {event.impact}
                            </span>
                          </td>
                          <td className={`p-4 text-sm font-medium ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}>
                            {event.forecast}
                          </td>
                          <td className={`p-4 text-sm font-medium ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}>
                            {event.previous}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-black"
              }`}>
                Our Analysis Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  isDark 
                    ? "bg-gray-800 border-[#f5c542]/30 hover:border-[#f5c542]/50" 
                    : "bg-white border-emerald-200 hover:border-emerald-400"
                }`}>
                  {/* Wave Pattern */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                        fill={isDark ? "#f5c542" : "#10b981"}
                      />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mr-6 ${
                      isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                    }`}>
                      <BarChart3 className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-display text-xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        Technical Analysis
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        Advanced chart patterns, indicators, and trading signals from expert technical analysts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  isDark 
                    ? "bg-gray-800 border-[#f5c542]/30 hover:border-[#f5c542]/50" 
                    : "bg-white border-emerald-200 hover:border-emerald-400"
                }`}>
                  {/* Wave Pattern */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                        fill={isDark ? "#f5c542" : "#10b981"}
                      />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mr-6 ${
                      isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                    }`}>
                      <TrendingUp className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-display text-xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        Market Trends
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        Real-time identification of market trends and potential trading opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  isDark 
                    ? "bg-gray-800 border-[#f5c542]/30 hover:border-[#f5c542]/50" 
                    : "bg-white border-emerald-200 hover:border-emerald-400"
                }`}>
                  {/* Wave Pattern */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                        fill={isDark ? "#f5c542" : "#10b981"}
                      />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mr-6 ${
                      isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                    }`}>
                      <Calendar className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-display text-xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        Economic Calendar
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        Comprehensive economic calendar with impact analysis and market expectations.
                      </p>
                    </div>
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
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-black"
              }`}>
                Stay Informed
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-black"}`}>
                Get daily analysis and market insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Subscribe to Analysis
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
                  View All Reports
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
