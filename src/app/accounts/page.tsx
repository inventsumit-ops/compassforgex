import Layout from "@/components/Layout";
import { CheckCircle, Star, TrendingUp, Shield } from "lucide-react";

const accountTypes = [
  {
    name: "Micro",
    description: "Perfect for beginners to start trading with minimal risk",
    minDeposit: "$100",
    spread: "From 1.8 pips",
    leverage: "Up to 1:500",
    features: [
      "50+ currency pairs",
      "No commission",
      "Market execution",
      "24/7 support",
      "Educational resources"
    ],
    popular: false
  },
  {
    name: "Standard",
    description: "Ideal for experienced traders with competitive conditions",
    minDeposit: "$1,000",
    spread: "From 1.2 pips",
    leverage: "Up to 1:300",
    features: [
      "70+ currency pairs",
      "No commission",
      "Instant execution",
      "Priority support",
      "Advanced analytics"
    ],
    popular: true
  },
  {
    name: "Premium",
    description: "Professional trading with institutional-grade features",
    minDeposit: "$10,000",
    spread: "From 0.8 pips",
    leverage: "Up to 1:200",
    features: [
      "100+ currency pairs",
      "Low commission",
      "ECN execution",
      "Dedicated account manager",
      "VIP support"
    ],
    popular: false
  },
  {
    name: "Institutional",
    description: "For high-volume traders and financial institutions",
    minDeposit: "$50,000",
    spread: "From 0.2 pips",
    leverage: "Up to 1:100",
    features: [
      "All currency pairs",
      "Commission-based pricing",
      "Direct market access",
      "Custom solutions",
      "API access"
    ],
    popular: false
  }
];

export default function AccountsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Trading Accounts
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Choose the account type that best suits your trading style and experience level.
              </p>
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accountTypes.map((account, index) => (
                  <div 
                    key={index} 
                    className={`relative border rounded-xl p-6 transition-all hover:shadow-elevated ${
                      account.popular 
                        ? 'border-primary shadow-card bg-primary/5' 
                        : 'border-border bg-card'
                    }`}
                  >
                    {account.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {account.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {account.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Min Deposit</span>
                        <span className="font-semibold text-foreground">{account.minDeposit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Spread</span>
                        <span className="font-semibold text-foreground">{account.spread}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Leverage</span>
                        <span className="font-semibold text-foreground">{account.leverage}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {account.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      account.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}>
                      Open {account.name} Account
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Trade With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Competitive Spreads
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy some of the tightest spreads in the industry across all account types.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Secure Trading
                  </h3>
                  <p className="text-muted-foreground">
                    Your funds are protected with negative balance protection and segregated accounts.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Fast Execution
                  </h3>
                  <p className="text-muted-foreground">
                    Lightning-fast execution with no requotes and minimal slippage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Trading?
              </h2>
              <p className="text-muted-foreground mb-8">
                Open your account in minutes and join thousands of successful traders.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Open Account Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
