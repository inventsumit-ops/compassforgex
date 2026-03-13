import Layout from "@/components/Layout";
import { Calendar, Clock, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

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
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Economic Calendar
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Stay informed about market-moving economic events and data releases.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly Highlight */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {weeklyHighlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {weeklyHighlight.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-foreground">{weeklyHighlight.impact}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{weeklyHighlight.recommendation}</span>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Today's Economic Events
              </h2>
              
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Time</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Currency</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Event</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Impact</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Actual</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Forecast</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Previous</th>
                        <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todayEvents.map((event, index) => (
                        <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
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
                          <td className="p-4 text-sm text-foreground font-medium">{event.actual}</td>
                          <td className="p-4 text-sm text-foreground">{event.forecast}</td>
                          <td className="p-4 text-sm text-foreground">{event.previous}</td>
                          <td className="p-4">
                            <span className={`flex items-center gap-1 text-xs font-medium ${
                              event.status === 'as expected' ? 'text-green-600' :
                              event.status === 'worse than expected' ? 'text-red-600' :
                              'text-gray-600'
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Tomorrow's Economic Events
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tomorrowEvents.map((event, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{event.time}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        event.impact === 'High' ? 'bg-red-100 text-red-800' :
                        event.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.impact}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-primary">{event.currency}</span>
                      <p className="text-sm text-foreground mt-1">{event.event}</p>
                    </div>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Forecast:</span>
                        <span className="text-foreground font-medium">{event.forecast}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Previous:</span>
                        <span className="text-foreground font-medium">{event.previous}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Actual:</span>
                        <span className="text-primary font-medium">{event.actual}</span>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Calendar Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Real-Time Updates
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Live updates as economic data is released, ensuring you never miss market-moving events.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Impact Analysis
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Detailed impact analysis showing how each event could affect currency markets.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Historical Data
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Never Miss an Event
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Subscribe to our economic calendar and get alerts for high-impact events.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Set Up Alerts
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
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
