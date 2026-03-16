"use client"
import Layout from "@/components/Layout";
import { AlertTriangle, Shield, TrendingUp, Info } from "lucide-react";
import { useEffect, useState } from "react";

import riskmainImage from "../../assest/images/mainpageimage.png"
import riskmainImagedark from "../../assest/images/mainpageimagedark.png"

export default function RiskDisclosurePage() {
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
            isDark ? riskmainImagedark.src : riskmainImage.src
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
                Risk Disclosure
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Important information about the risks involved in forex trading.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Warning */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-red-800 mb-2">
                      High Risk Warning
                    </h2>
                    <p className="text-red-700 font-medium">
                      Forex trading carries a high level of risk and may not be suitable for all investors.
                    </p>
                  </div>
                </div>
                <p className="text-red-700 leading-relaxed">
                  You should not risk more than you can afford to lose. Before deciding to trade foreign exchange, 
                  you should carefully consider your investment objectives, level of experience, and risk appetite. 
                  The possibility exists that you could sustain a loss of some or all of your initial investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Risks */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Key Trading Risks
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`rounded-xl p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-red-400" : "text-red-600"}`} />
                    <h3 className={`font-display text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Market Risk
                    </h3>
                  </div>
                  <ul className={`space-y-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-red-400" : "bg-red-600"}`}></span>
                      <div>
                        <strong>Volatility:</strong> Forex markets can be extremely volatile with rapid price movements
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-red-400" : "bg-red-600"}`}></span>
                      <div>
                        <strong>Liquidity risk:</strong> Some currency pairs may have low liquidity during certain times
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-red-400" : "bg-red-600"}`}></span>
                      <div>
                        <strong>Gap risk:</strong> Markets may gap significantly when reopening after weekends or holidays
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={`rounded-xl p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className={`h-8 w-8 ${isDark ? "text-orange-400" : "text-orange-600"}`} />
                    <h3 className={`font-display text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Leverage Risk
                    </h3>
                  </div>
                  <ul className={`space-y-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-orange-400" : "bg-orange-600"}`}></span>
                      <div>
                        <strong>Magnified losses:</strong> Leverage amplifies both profits and losses proportionally
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-orange-400" : "bg-orange-600"}`}></span>
                      <div>
                        <strong>Margin calls:</strong> Insufficient margin may lead to automatic position closure
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-orange-400" : "bg-orange-600"}`}></span>
                      <div>
                        <strong>Over-leveraging:</strong> Excessive leverage can lead to rapid account depletion
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={`rounded-xl p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className={`h-8 w-8 ${isDark ? "text-yellow-400" : "text-yellow-600"}`} />
                    <h3 className={`font-display text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Operational Risk
                    </h3>
                  </div>
                  <ul className={`space-y-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-yellow-400" : "bg-yellow-600"}`}></span>
                      <div>
                        <strong>Technical failures:</strong> Platform issues may prevent trade execution or management
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-yellow-400" : "bg-yellow-600"}`}></span>
                      <div>
                        <strong>Internet connectivity:</strong> Connection problems may affect trading and order management
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-yellow-400" : "bg-yellow-600"}`}></span>
                      <div>
                        <strong>System downtime:</strong> Maintenance or technical issues may limit access to funds
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={`rounded-xl p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Info className={`h-8 w-8 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                    <h3 className={`font-display text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Psychological Risk
                    </h3>
                  </div>
                  <ul className={`space-y-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-blue-400" : "bg-blue-600"}`}></span>
                      <div>
                        <strong>Emotional trading:</strong> Fear and greed can lead to poor decision-making
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-blue-400" : "bg-blue-600"}`}></span>
                      <div>
                        <strong>Overtrading:</strong> Excessive trading can lead to fatigue and errors
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 ${isDark ? "bg-blue-400" : "bg-blue-600"}`}></span>
                      <div>
                        <strong>Loss aversion:</strong> Holding losing positions too long hoping for reversal
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Risk Management Best Practices
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <Shield className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Use Stop Losses
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Always set stop losses to limit potential losses on every trade.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Position Sizing
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Risk only 1-2% of your trading capital per trade.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <Info className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Diversification
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Don't risk everything on one trade or currency pair.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <AlertTriangle className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Risk/Reward Ratio
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Aim for positive risk/reward ratios of at least 1:2.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <Shield className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Education First
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Understand markets before risking real capital.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <TrendingUp className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Trading Plan
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Have clear rules and stick to your strategy consistently.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-green-900/30" : "bg-green-100"
                  }`}>
                    <Info className={`h-8 w-8 ${isDark ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Demo Practice
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Test strategies with virtual money before risking real capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-yellow-800 mb-2">
                      Important Notice
                    </h2>
                    <p className="text-yellow-700 font-medium">
                      Past performance is not indicative of future results.
                    </p>
                  </div>
                </div>
                <p className="text-yellow-700 leading-relaxed">
                  The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, 
                  you should carefully consider your investment objectives, level of experience, and risk appetite. 
                  The possibility exists that you could sustain a loss of some or all of your initial investment. 
                  You should be aware of all the risks associated with foreign exchange trading and seek advice from 
                  an independent financial advisor if you have any doubts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Regulatory Protection
              </h2>
              
              <div className={`rounded-xl p-8 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className={`font-display text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Negative Balance Protection
                    </h3>
                    <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      CompassForex provides negative balance protection. You cannot lose more than your initial investment. 
                      This feature automatically closes your positions when your account balance reaches zero.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-display text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Segregated Client Funds
                    </h3>
                    <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      Client funds are kept in segregated accounts separate from company operating funds. 
                      This ensures that your money is protected even in the unlikely event of company insolvency.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-display text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Regulatory Compliance
                    </h3>
                    <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      We are fully regulated by [Regulatory Authority] and comply with all applicable financial regulations. 
                      Regular audits ensure our operations meet the highest standards of investor protection.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-display text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Compensation Scheme
                    </h3>
                    <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      We participate in the [Compensation Fund Name] which provides protection up to [Amount] per client 
                      in the event of company failure. This provides an additional layer of security for your investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Questions About Trading Risks?
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Our risk management team is available to help you understand and mitigate trading risks.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Contact Risk Team
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-[#f5c542]/30 text-[#f5c542] hover:bg-[#f5c542]/10" 
                    : "border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50"
                }`}>
                  Risk Assessment Tool
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
