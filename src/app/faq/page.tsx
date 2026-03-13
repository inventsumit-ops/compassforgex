import Layout from "@/components/Layout";
import { HelpCircle, MessageSquare, Shield, TrendingUp } from "lucide-react";

const faqs = [
  {
    question: "What is forex trading?",
    answer: "Forex (foreign exchange) trading is the buying and selling of currencies on the foreign exchange market. It's the largest financial market in the world with over $6.6 trillion traded daily.",
    category: "Getting Started",
    icon: HelpCircle
  },
  {
    question: "How do I open a trading account?",
    answer: "Opening an account is simple: 1) Click 'Open Account' on our website, 2) Complete the registration form with your personal details, 3) Verify your identity, 4) Make your first deposit. The process usually takes 1-2 business days.",
    category: "Account",
    icon: Shield
  },
  {
    question: "What documents do I need to verify my account?",
    answer: "Required documents typically include: Valid government-issued ID (passport or driver's license), Proof of address (utility bill or bank statement), and depending on account type, proof of income or trading experience.",
    category: "Account",
    icon: Shield
  },
  {
    question: "What leverage does CompassForex offer?",
    answer: "We offer flexible leverage up to 1:500 depending on your account type and experience level. Micro accounts: up to 1:500, Standard: up to 1:300, Premium: up to 1:200, Institutional: up to 1:100.",
    category: "Trading",
    icon: TrendingUp
  },
  {
    question: "How are spreads calculated?",
    answer: "Spreads represent the difference between buy and sell prices. We offer competitive spreads starting from 0.1 pips on major pairs like EUR/USD. Spreads may vary based on market conditions and account type.",
    category: "Trading",
    icon: TrendingUp
  },
  {
    question: "What deposit methods are available?",
    answer: "We support multiple deposit methods: Bank transfers, Credit/Debit cards (Visa, Mastercard), E-wallets (Skrill, Neteller, PayPal), and Cryptocurrency deposits. Most methods are instant.",
    category: "Deposits & Withdrawals",
    icon: MessageSquare
  },
  {
    question: "How long do withdrawals take?",
    answer: "Withdrawal processing times vary by method: E-wallets: 1-24 hours, Bank transfers: 2-5 business days, Credit cards: 3-7 business days. VIP accounts receive priority processing.",
    category: "Deposits & Withdrawals",
    icon: MessageSquare
  },
  {
    question: "Is my money safe with CompassForex?",
    answer: "Absolutely. We are fully regulated by major financial authorities, maintain segregated client accounts separate from company funds, and offer negative balance protection. We also carry $10M in professional indemnity insurance.",
    category: "Safety & Security",
    icon: Shield
  },
  {
    question: "What trading platforms are available?",
    answer: "We offer multiple trading platforms: Web platform (no download required), Mobile apps (iOS & Android), MetaTrader 4 (MT4), MetaTrader 5 (MT5), and API access for algorithmic traders.",
    category: "Trading",
    icon: TrendingUp
  },
  {
    question: "Do you offer demo accounts?",
    answer: "Yes! We offer free demo accounts with $50,000 virtual funds to practice trading strategies. Demo accounts have full access to all features and real market data. No time limits - practice as long as you need.",
    category: "Getting Started",
    icon: HelpCircle
  },
  {
    question: "What is the minimum deposit?",
    answer: "Minimum deposits vary by account type: Micro accounts: $100, Standard: $1,000, Premium: $10,000, Institutional: $50,000. We recommend starting with a Micro account if you're new to trading.",
    category: "Account",
    icon: Shield
  },
  {
    question: "How can I contact customer support?",
    answer: "Our support team is available 24/5 via: Live chat on our website, Phone: +1 (555) 123-4567, Email: support@compassforex.com, and Ticket system through your client portal. Average response time is under 2 hours.",
    category: "Support",
    icon: MessageSquare
  },
  {
    question: "What educational resources do you offer?",
    answer: "We provide comprehensive education: Video tutorials, Trading guides, Webinars with expert traders, Economic calendar, Market analysis, and a demo account for practice. All resources are free for clients.",
    category: "Education",
    icon: HelpCircle
  }
];

const categories = ["All", "Getting Started", "Account", "Trading", "Deposits & Withdrawals", "Safety & Security", "Support", "Education"];

export default function FAQPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Find answers to common questions about forex trading and CompassForex.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                    <button className="w-full text-left p-6 hover:bg-muted/50 transition-colors focus:outline-none focus:bg-muted/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <faq.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                              {faq.category}
                            </span>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {faq.question}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Still Need Help?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Live Chat Support
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Chat with our support team in real-time for immediate assistance.
                  </p>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Knowledge Base
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Browse our comprehensive knowledge base for detailed guides and tutorials.
                  </p>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Browse Articles
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Email Support
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Send us a detailed email and we'll respond within 24 hours.
                  </p>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Send Email
                  </button>
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
                Ready to Start Trading?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join thousands of successful traders who trust CompassForex.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Open Account
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Try Demo Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
