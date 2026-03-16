"use client"
import Layout from "@/components/Layout";
import { BarChart3, TrendingUp, TrendingDown, Calendar, Eye } from "lucide-react";
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
    event: "FOMC Statement",
    impact: "High",
    forecast: "Rate hike 25bps",
    previous: "Rate hike 25bps"
  },
  {
    date: "Tomorrow", 
    time: "09:00 GMT",
    currency: "EUR",
    event: "ECB Interest Rate Decision",
    impact: "High",
    forecast: "No change",
    previous: "Rate hike 25bps"
  },
  {
    date: "Tomorrow",
    time: "12:30 GMT", 
    currency: "GBP",
    event: "UK CPI Data",
    impact: "Medium",
    forecast: "6.5%",
    previous: "6.8%"
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
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Latest Market Analysis
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {analysisData.map((analysis, index) => (
                  <article key={index} className={`rounded-xl p-6 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          analysis.type === 'Technical' 
                            ? (isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800')
                            : (isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-100 text-emerald-800')
                        }`}>
                          {analysis.type}
                        </span>
                        <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{analysis.timeframe}</span>
                      </div>
                      <span className={`flex items-center gap-1 text-xs font-medium ${
                        analysis.trend === 'bullish' 
                          ? (isDark ? "text-green-400" : "text-green-600") 
                          : analysis.trend === 'bearish' 
                            ? (isDark ? "text-red-400" : "text-red-600")
                            : (isDark ? "text-gray-400" : "text-gray-600")
                      }`}>
                        {analysis.trend === 'bullish' ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : analysis.trend === 'bearish' ? (
                          <TrendingDown className="h-3 w-3" />
                        ) : (
                          <div className={`h-3 w-3 rounded-full ${isDark ? "bg-gray-600" : "bg-gray-400"}`} />
                        )}
                        {analysis.trend}
                      </span>
                    </div>
                    
                    <h3 className={`font-display text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {analysis.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {analysis.summary}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className={`font-display text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Key Points:</h4>
                      <ul className="space-y-1">
                        {analysis.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className={`flex items-start text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 mt-1.5 ${isDark ? "bg-[#f5c542]" : "bg-emerald-600"}`}></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`flex items-center justify-between text-xs pt-4 border-t ${isDark ? "text-gray-400 border-gray-700" : "text-gray-600 border-emerald-200"}`}>
                      <span>By {analysis.author}</span>
                      <span>{analysis.time}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Economic Calendar */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Upcoming Economic Events
              </h2>
              
              <div className={`rounded-xl overflow-hidden ${
                isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"
              }`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={isDark ? "bg-gray-900/50" : "bg-emerald-50"}>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Date</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Time</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Currency</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Event</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Impact</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Forecast</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Previous</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingEvents.map((event, index) => (
                        <tr key={index} className={`border-t transition-colors ${
                          isDark ? "border-gray-700 hover:bg-gray-700/30" : "border-emerald-200 hover:bg-emerald-50"
                        }`}>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-900"}`}>{event.date}</td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-900"}`}>{event.time}</td>
                          <td className={`p-4 text-sm font-semibold ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>{event.currency}</td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-900"}`}>{event.event}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              event.impact === 'High' 
                                ? (isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800')
                                : event.impact === 'Medium' 
                                  ? (isDark ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                                  : (isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800')
                            }`}>
                              {event.impact}
                            </span>
                          </td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-900"}`}>{event.forecast}</td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-900"}`}>{event.previous}</td>
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
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Our Analysis Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <BarChart3 className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Technical Analysis
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Advanced chart patterns, indicators, and trading signals from expert technical analysts.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Market Trends
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Real-time identification of market trends and potential trading opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Calendar className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Economic Calendar
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Comprehensive economic calendar with impact analysis and market expectations.
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
                Stay Informed
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
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
