"use client"
import Layout from "@/components/Layout";
import { HelpCircle, MessageSquare, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

import faqmainImage from "../../assest/images/mainpageimage.png"
import faqmainImagedark from "../../assest/images/mainpageimagedark.png"

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
            isDark ? faqmainImagedark.src : faqmainImage.src
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
                Frequently Asked Questions
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Find answers to common questions about forex trading and CompassForex.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className={`py-12 border-b ${isDark ? "border-gray-700" : "border-emerald-200"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDark 
                        ? "bg-gray-700 text-white border-gray-600 placeholder:text-gray-400 focus:ring-[#f5c542]" 
                        : "bg-white text-gray-900 border-emerald-200 placeholder:text-gray-500 focus:ring-emerald-500"
                    }`}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
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
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className={`rounded-lg overflow-hidden ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                    <button className={`w-full text-left p-6 transition-colors focus:outline-none ${isDark ? "hover:bg-gray-700/50 focus:bg-gray-700/50" : "hover:bg-emerald-50 focus:bg-emerald-50"}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                          isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                        }`}>
                          <faq.icon className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded ${
                              isDark ? "bg-[#f5c542]/20 text-[#f5c542]" : "bg-emerald-100 text-emerald-600"
                            }`}>
                              {faq.category}
                            </span>
                            <h3 className={`font-display text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                              {faq.question}
                            </h3>
                          </div>
                          <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Still Need Help?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <MessageSquare className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Live Chat Support
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Chat with our support team in real-time for immediate assistance.
                  </p>
                  <button className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    isDark 
                      ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}>
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <HelpCircle className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Knowledge Base
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Browse our comprehensive knowledge base for detailed guides and tutorials.
                  </p>
                  <button className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    isDark 
                      ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}>
                    Browse Articles
                  </button>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <MessageSquare className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Email Support
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Send us a detailed email and we'll respond within 24 hours.
                  </p>
                  <button className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    isDark 
                      ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Ready to Start Trading?
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Join thousands of successful traders who trust CompassForex.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Open Account
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
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
