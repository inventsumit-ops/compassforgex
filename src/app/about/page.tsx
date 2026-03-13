import Layout from "@/components/Layout";
import { Shield, Users, Trophy, Globe } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the security of your funds and personal information with state-of-the-art encryption and regulatory compliance."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Our traders are at the heart of everything we do. We provide dedicated support and personalized service."
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We strive for excellence in trading conditions, educational resources, and technological innovation."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access worldwide forex markets with competitive spreads and deep liquidity across major currency pairs."
  }
];

const stats = [
  { number: "15+", label: "Years in Business" },
  { number: "50K+", label: "Active Clients" },
  { number: "$10B+", label: "Monthly Volume" },
  { number: "99.9%", label: "Uptime" }
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-linear-to-br from-primary/5 to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                About CompassForex
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your trusted partner in forex trading since 2010. We combine cutting-edge technology 
                with deep market expertise to provide exceptional trading experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                The principles that guide our decisions and shape our company culture.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 rounded-lg border border-border bg-card">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Our Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    Empower
                  </h3>
                  <p className="text-muted-foreground">
                    Provide traders with the tools, education, and support needed to make informed trading decisions.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    Innovate
                  </h3>
                  <p className="text-muted-foreground">
                    Continuously improve our platform with cutting-edge technology and trading solutions.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    Support
                  </h3>
                  <p className="text-muted-foreground">
                    Offer exceptional customer service and build lasting relationships with our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground mb-12">
                Our experienced leadership team brings decades of combined expertise in forex trading, 
                financial technology, and client service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">CEO</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Michael Chen
                  </h3>
                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">CTO</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Sarah Johnson
                  </h3>
                  <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">CFO</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    David Williams
                  </h3>
                  <p className="text-sm text-muted-foreground">Chief Financial Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
