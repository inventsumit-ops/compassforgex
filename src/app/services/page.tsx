import Layout from "@/components/Layout";
import { TrendingUp, Shield, BookOpen, HeadphonesIcon, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Forex Trading",
    description: "Trade major, minor, and exotic currency pairs with competitive spreads and fast execution.",
    features: ["50+ Currency Pairs", "Spreads from 0.0 pips", "Lightning-fast execution", "No hidden fees"]
  },
  {
    icon: Shield,
    title: "Secure Trading",
    description: "Trade with confidence knowing your funds are protected and your data is secure.",
    features: ["Regulated broker", "Negative balance protection", "Segregated client funds", "Two-factor authentication"]
  },
  {
    icon: BookOpen,
    title: "Education Hub",
    description: "Access comprehensive educational resources to improve your trading skills.",
    features: ["Video tutorials", "Trading guides", "Webinars", "Market analysis"]
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated customer support team.",
    features: ["Live chat support", "Phone support", "Email support", "Multi-language support"]
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere in the world with our globally accessible platform.",
    features: ["Web platform", "Mobile apps", "MT4/MT5 integration", "API access"]
  },
  {
    icon: Zap,
    title: "Advanced Tools",
    description: "Utilize professional-grade trading tools and analytics to enhance your strategy.",
    features: ["Real-time charts", "Technical indicators", "Economic calendar", "Trading signals"]
  }
];

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Comprehensive forex trading solutions designed to meet the needs of traders at every level.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="card-gradient border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of traders who have chosen CompassForex for their forex trading needs. 
                Open an account today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/accounts"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Open Account
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
