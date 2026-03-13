import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
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
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="How can we help you..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          Email Support
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          support@compassforex.com
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          Phone Support
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Mon-Fri: 24/5 Trading Hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          Office Address
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          123 Trading Street
                        </p>
                        <p className="text-muted-foreground text-sm">
                          New York, NY 10001
                        </p>
                        <p className="text-muted-foreground text-sm">
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          Trading Hours
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Monday - Friday: 21:00 - 21:00 GMT
                        </p>
                        <p className="text-muted-foreground text-sm">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    How do I open an account?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Opening an account is simple. Click on "Open Account" and complete the registration form. 
                    Verification typically takes 1-2 business days.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    What documents do I need?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You'll need a valid ID, proof of address, and for some account types, 
                    proof of income or trading experience.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    How can I deposit funds?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We offer multiple deposit methods including bank transfer, credit/debit cards, 
                    and various e-wallets. Deposits are typically instant.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    Is my money safe?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our dedicated support team is ready to assist you with any inquiries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Live Chat
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
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
