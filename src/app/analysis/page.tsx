import Layout from "@/components/Layout";
import { BarChart3, TrendingUp, TrendingDown, Calendar, Eye } from "lucide-react";

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
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Market Analysis
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                In-depth technical and fundamental analysis to guide your trading decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Analysis */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Latest Market Analysis
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {analysisData.map((analysis, index) => (
                  <article key={index} className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          analysis.type === 'Technical' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {analysis.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{analysis.timeframe}</span>
                      </div>
                      <span className={`flex items-center gap-1 text-xs font-medium ${
                        analysis.trend === 'bullish' ? 'text-green-600' : 
                        analysis.trend === 'bearish' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {analysis.trend === 'bullish' ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : analysis.trend === 'bearish' ? (
                          <TrendingDown className="h-3 w-3" />
                        ) : (
                          <div className="h-3 w-3 bg-gray-400 rounded-full" />
                        )}
                        {analysis.trend}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {analysis.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {analysis.summary}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-display text-sm font-semibold text-foreground mb-2">Key Points:</h4>
                      <ul className="space-y-1">
                        {analysis.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Upcoming Economic Events
              </h2>
              
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Date</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Time</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Currency</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Event</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Impact</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Forecast</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Previous</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingEvents.map((event, index) => (
                        <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                          <td className="p-4 text-sm text-foreground">{event.date}</td>
                          <td className="p-4 text-sm text-foreground">{event.time}</td>
                          <td className="p-4 text-sm font-semibold text-primary">{event.currency}</td>
                          <td className="p-4 text-sm text-foreground">{event.event}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              event.impact === 'High' ? 'bg-red-100 text-red-800' :
                              event.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {event.impact}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-foreground">{event.forecast}</td>
                          <td className="p-4 text-sm text-foreground">{event.previous}</td>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Our Analysis Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Technical Analysis
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced chart patterns, indicators, and trading signals from expert technical analysts.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Market Trends
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Real-time identification of market trends and potential trading opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Economic Calendar
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Stay Informed
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Get daily analysis and market insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Subscribe to Analysis
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
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
