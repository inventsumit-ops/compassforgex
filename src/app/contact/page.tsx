"use client"
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useEffect, useState } from "react";

import contactmainImage from "../../assest/images/mainpageimage.png"
import contactmainImagedark from "../../assest/images/mainpageimagedark.png"

export default function ContactPage() {
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
            isDark ? contactmainImagedark.src : contactmainImage.src
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
                Contact Us
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Have questions? Our support team is here to help you 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Send us a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                          isDark 
                            ? "bg-gray-700 text-white border-gray-600 placeholder:text-gray-400 focus:ring-[#f5c542]" 
                            : "bg-white text-gray-900 border-emerald-200 placeholder:text-gray-500 focus:ring-emerald-500"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                          isDark 
                            ? "bg-gray-700 text-white border-gray-600 placeholder:text-gray-400 focus:ring-[#f5c542]" 
                            : "bg-white text-gray-900 border-emerald-200 placeholder:text-gray-500 focus:ring-emerald-500"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                          isDark 
                            ? "bg-gray-700 text-white border-gray-600 focus:ring-[#f5c542]" 
                            : "bg-white text-gray-900 border-emerald-200 focus:ring-emerald-500"
                        }`}
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="account">Account Issues</option>
                        <option value="trading">Trading Questions</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                          isDark 
                            ? "bg-gray-700 text-white border-gray-600 placeholder:text-gray-400 focus:ring-[#f5c542]" 
                            : "bg-white text-gray-900 border-emerald-200 placeholder:text-gray-500 focus:ring-emerald-500"
                        }`}
                        placeholder="How can we help you..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                        isDark 
                          ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                      }`}>
                        <Mail className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                      <div>
                        <h3 className={`font-display text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Email Support
                        </h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          support@compassforex.com
                        </p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          Response within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                      }`}>
                        <Phone className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                      <div>
                        <h3 className={`font-display text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Phone Support
                        </h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          +1 (555) 123-4567
                        </p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          Mon-Fri: 24/5 Trading Hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                      }`}>
                        <MapPin className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                      <div>
                        <h3 className={`font-display text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Office Address
                        </h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          123 Trading Street
                        </p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          New York, NY 10001
                        </p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                      }`}>
                        <Clock className={`h-6 w-6 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      </div>
                      <div>
                        <h3 className={`font-display text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Trading Hours
                        </h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          Monday - Friday: 21:00 - 21:00 GMT
                        </p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Frequently Asked Questions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`rounded-lg p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    How do I open an account?
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    Opening an account is simple. Click on "Open Account" and complete the registration form. 
                    Verification typically takes 1-2 business days.
                  </p>
                </div>
                
                <div className={`rounded-lg p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    What documents do I need?
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    You'll need a valid ID, proof of address, and for some account types, 
                    proof of income or trading experience.
                  </p>
                </div>
                
                <div className={`rounded-lg p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    How can I deposit funds?
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    We offer multiple deposit methods including bank transfer, credit/debit cards, 
                    and various e-wallets. Deposits are typically instant.
                  </p>
                </div>
                
                <div className={`rounded-lg p-6 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Is my money safe?
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    Yes. We are fully regulated and keep client funds in segregated accounts 
                    with major financial institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Still Have Questions?
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Our dedicated support team is ready to assist you with any inquiries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Start Live Chat
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-gray-600 text-white hover:bg-gray-800" 
                    : "border border-emerald-200 text-gray-900 hover:bg-emerald-50"
                }`}>
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
