"use client"
import Layout from "@/components/Layout";
import { Calendar, Clock, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

import calendarmainImage from "../../assest/images/mainpageimage.png"
import calendarmainImagedark from "../../assest/images/mainpageimagedark.png"

const todayEvents = [
  {
    time: "02:30",
    currency: "AUD",
    event: "RBA Interest Rate Decision",
    impact: "High",
    actual: "4.35%",
    forecast: "4.35%",
    previous: "4.35%",
    status: "as expected"
  },
  {
    time: "08:30", 
    currency: "EUR",
    event: "German Industrial Production",
    impact: "Medium",
    actual: "-0.2%",
    forecast: "0.1%",
    previous: "0.3%",
    status: "worse than expected"
  },
  {
    time: "14:30",
    currency: "USD", 
    event: "FOMC Statement",
    impact: "High",
    actual: "TBD",
    forecast: "Rate hike 25bps",
    previous: "Rate hike 25bps",
    status: "upcoming"
  },
  {
    time: "16:00",
    currency: "USD",
    event: "Crude Oil Inventories",
    impact: "Medium", 
    actual: "TBD",
    forecast: "-2.1M",
    previous: "-3.5M",
    status: "upcoming"
  }
];

const tomorrowEvents = [
  {
    time: "09:00",
    currency: "EUR",
    event: "ECB Interest Rate Decision",
    impact: "High",
    actual: "TBD",
    forecast: "No change",
    previous: "Rate hike 25bps",
    status: "upcoming"
  },
  {
    time: "12:30",
    currency: "GBP",
    event: "UK CPI Data",
    impact: "Medium",
    actual: "TBD", 
    forecast: "6.5%",
    previous: "6.8%",
    status: "upcoming"
  },
  {
    time: "14:00",
    currency: "CAD",
    event: "Canadian Employment Change",
    impact: "Medium",
    actual: "TBD",
    forecast: "15K",
    previous: "22K", 
    status: "upcoming"
  }
];

const weeklyHighlight = {
  title: "Fed Week Focus",
  description: "All eyes on Federal Reserve as they navigate inflation concerns and economic growth",
  impact: "High volatility expected in USD pairs",
  recommendation: "Consider tightening stop losses on USD positions"
};

export default function CalendarPage() {
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
            isDark ? calendarmainImagedark.src : calendarmainImage.src
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
                Economic Calendar
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Stay informed about market-moving economic events and data releases.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly Highlight */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className={`rounded-xl p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <TrendingUp className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {weeklyHighlight.title}
                    </h3>
                    <p className={`text-sm mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {weeklyHighlight.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`h-4 w-4 ${isDark ? "text-yellow-400" : "text-yellow-600"}`} />
                        <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{weeklyHighlight.impact}</span>
                      </div>
                      <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{weeklyHighlight.recommendation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-8 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Today's Economic Events
              </h2>
              
              <div className={`rounded-xl overflow-hidden ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={isDark ? "bg-gray-700/50" : "bg-muted"}>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Time</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Currency</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Event</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Impact</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Actual</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Forecast</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Previous</th>
                        <th className={`text-left p-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todayEvents.map((event, index) => (
                        <tr key={index} className={`border-t transition-colors ${
                          isDark ? "border-gray-700 hover:bg-gray-700/50" : "border-emerald-200 hover:bg-emerald-50"
                        }`}>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.time}</td>
                          <td className={`p-4 text-sm font-semibold ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>{event.currency}</td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.event}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              event.impact === 'High' ? (isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800') :
                              event.impact === 'Medium' ? (isDark ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800') :
                              (isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800')
                            }`}>
                              {event.impact}
                            </span>
                          </td>
                          <td className={`p-4 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.actual}</td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.forecast}</td>
                          <td className={`p-4 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.previous}</td>
                          <td className="p-4">
                            <span className={`flex items-center gap-1 text-xs font-medium ${
                              event.status === 'as expected' ? (isDark ? 'text-green-400' : 'text-green-600') :
                              event.status === 'worse than expected' ? (isDark ? 'text-red-400' : 'text-red-600') :
                              (isDark ? 'text-gray-400' : 'text-gray-600')
                            }`}>
                              {event.status === 'as expected' && <CheckCircle className="h-3 w-3" />}
                              {event.status}
                            </span>
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

        {/* Tomorrow's Events */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-8 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Tomorrow's Economic Events
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tomorrowEvents.map((event, index) => (
                  <div key={index} className={`rounded-lg p-4 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className={`h-4 w-4 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                        <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{event.time}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        event.impact === 'High' ? (isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800') :
                        event.impact === 'Medium' ? (isDark ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800') :
                        (isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800')
                      }`}>
                        {event.impact}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`text-sm font-semibold ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>{event.currency}</span>
                      <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.event}</p>
                    </div>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className={isDark ? "text-gray-400" : "text-gray-600"}>Forecast:</span>
                        <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.forecast}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? "text-gray-400" : "text-gray-600"}>Previous:</span>
                        <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{event.previous}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? "text-gray-400" : "text-gray-600"}>Actual:</span>
                        <span className={`font-medium ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`}>{event.actual}</span>
                      </div>
                    </div>
                  </div>
                ))}
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
                Calendar Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Calendar className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Real-Time Updates
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Live updates as economic data is released, ensuring you never miss market-moving events.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <AlertTriangle className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Impact Analysis
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Detailed impact analysis showing how each event could affect currency markets.
                  </p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Historical Data
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Access to historical economic data and past market reactions for better analysis.
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
                Never Miss an Event
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Subscribe to our economic calendar and get alerts for high-impact events.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Set Up Alerts
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
                  Download Calendar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
